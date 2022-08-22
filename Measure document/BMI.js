var _ = require('underscore');
var csv = require("csvtojson");
var fs = require("fs");
const { isFunction } = require('util');
const { Console } = require('console');
const { values } = require('underscore');

var patientData = [];
function readPatient(path) {
  var text = fs.readFileSync(path, 'utf8')
  var p1 = JSON.parse(text);   //this key word is used to (covert string to json)  JSON.parse
  patientData.push(p1)
  //  console.log("File read successfully")
  // return p1;

};
readPatient(".\\BMI_data\\patient1.json");
readPatient(".\\BMI_data\\patient2.json");
readPatient(".\\BMI_data\\patient3.json");
readPatient(".\\BMI_data\\patient4.json");
readPatient(".\\BMI_data\\patient5.json");
readPatient(".\\BMI_data\\patient6.json");

// console.log(patientData)


var OidDictionary = {
  "2.16.840.1.113883.3.600.1.1623":
  {
    "ICD-10-CM": ["O00.00", "O00.01", "O00.101", "O00.102", "Z36.88", "Z36.89", "Z36.8A", "Z36.9"],
    "SNOMED-CT": ["10231000132102", "102872000", "102875003", "87605005", "90968009", "9279009", "9899009"]
  }
}

oid_get_codes = (OidDict, oid, codeystem) => {
  var oid_get_codes = OidDict[oid][codeystem]
  return oid_get_codes;
}

function epochConvert(timeconvter) {
  var time = new Date(timeconvter * 1000);
  return time;
}


getAge = (dateString) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
getAge();

getYear = (val) => new Date(val).getFullYear()


function get_SMCodes(padata, section, code) {
  var SMcode = _.filter(padata[section], function (num) {
     snomd = num.codes['SNOMED-CT']
    if (snomd && snomd.length > 0) {
      return code.includes(num.codes['SNOMED-CT'][0])
    }
  });
  return SMcode;
}


function get_vital_signs(pd, value, code) {
  var vs = _.filter(pd[value], function (v) {
    return v.codes.LOINC[0] == code;
  });
  return vs
}

sortInDescending = (section_data, colname) => {
  var sorttime = _.sortBy(section_data, function (t) { return epochConvert(t[colname]) })
  return sorttime = sorttime.reverse();
}


get_procedures = (pdata, value, code) => {
  var procedures_value = _.filter(pdata[value], function (v) {
    procedures_value1 = v.codes["CPT"]
    if (procedures_value1 && procedures_value1 > 0)
      return v.codes.CPT[0] == code;
  });
  return procedures_value
}



// main function
var completed = [];
_.each(patientData, function (value) {

  tmp_obj = {}
  tmp_obj.MRN = value.medical_record_number
  tmp_obj.MEASUREID = 'CMS69v10'

  tmp_obj["DENOM"] = 0
  tmp_obj["NUMER"] = 0
  tmp_obj["EXCLUSION"] = 0
  tmp_obj["Exceptions"] = 0
  tmp_obj["outlier"] = 0


  //DENOM calculation
  var final = value.birthdate;
  var age = (getAge(epochConvert(final)))

  if (age >= 18) {
    tmp_obj["DENOM"] = 1
  }

  if (tmp_obj["DENOM"] == 0) 
  {
    tmp_obj["NUMER"] = 0
    tmp_obj["EXCLUSION"] = 0
    tmp_obj["Exceptions"] = 0
    tmp_obj["outlier"] = 0
  }
  else {

    //EXCLUSION calculation 
    conditions_svcyear = -1
    SNOMEDcodes = oid_get_codes(OidDictionary, "2.16.840.1.113883.3.600.1.1623", "SNOMED-CT")
    EXCLUSION_visits = get_SMCodes(value, "conditions", SNOMEDcodes);
    if (EXCLUSION_visits.length > 0) {

      sorted_conditions = sortInDescending(EXCLUSION_visits, "start_time")

      svcYear2 = sorted_conditions[0]["start_time"]

      conditions_svcyear = getYear(epochConvert(svcYear2))

      if (conditions_svcyear == 2022) {
        tmp_obj["EXCLUSION"] = 1;
      } else {
        tmp_obj["EXCLUSION"] = 0;
      }
    }


    //Exceptions calculation 
    Exceptions_visits = get_SMCodes(value, "procedures", "306136006");
    if (Exceptions_visits.length > 0) {
      sorted_Exceptions = sortInDescending(Exceptions_visits, "start_time")

      svc_code_Exceptions = sorted_Exceptions[0]["start_time"]

      svcYear_Exceptions = getYear(epochConvert(svc_code_Exceptions))
      if (svcYear_Exceptions == 2022) {
        tmp_obj["Exceptions"] = 1
      } else {
        tmp_obj["Exceptions"] = 0

      }
    }

    if (tmp_obj["DENOM"] == 1 && tmp_obj["EXCLUSION"] == 1) {
      tmp_obj["NUMER"] = 0
      tmp_obj["Exceptions"] = 0
    }



    //NUMER calculation
    else if (tmp_obj["EXCLUSION"] == 1 || tmp_obj["Exceptions"] == 1) {
      tmp_obj["NUMER"] = 0

    }
    else {

      vitalsigns_data = get_vital_signs(value, "vital_signs", "39156-5")
      if (vitalsigns_data.length > 0) {
        sorted_time = sortInDescending(vitalsigns_data, "time")
        BMIvalue = sorted_time[0].values[0]["scalar"]
        svcYear = -1
        if (BMIvalue < 18.5) {
          procedures_data = get_procedures(value, "procedures", "43644")
          if (procedures_data.length > 0) {
            sorted_startTime = sortInDescending(procedures_data, "start_time")
            ep_starttime = sorted_startTime[0]["start_time"]
            svcYear = getYear(epochConvert(ep_starttime))
          }
          if (svcYear == 2022) {
            tmp_obj["NUMER"] = 1
          } else {
            tmp_obj["NUMER"] = 0

          }
        }

        else if (BMIvalue >= 18.5 && BMIvalue <= 25) {
          tmp_obj["NUMER"] = 1
        } if (BMIvalue > 25) {
          procedures_data = get_procedures(value, "procedures", "43645")

          if (procedures_data.length > 0) {
            sorted_startTime = sortInDescending(procedures_data, "start_time")
            ep_starttime = sorted_startTime[0]["start_time"]
            svcYear = getYear(epochConvert(ep_starttime))
            if (svcYear == 2022) {
              tmp_obj["NUMER"] = 1
            } else {
              tmp_obj["NUMER"] = 0
            }
          }
        }
      }

    }

    //Outlier
    if (tmp_obj["DENOM"] == 1 && tmp_obj["NUMER"] == 0 && tmp_obj["EXCLUSION"] == 0 && tmp_obj["Exceptions"] == 0) {
      tmp_obj["outlier"] = 1
    }
  }


  completed.push(tmp_obj);
});
console.log(completed);



































