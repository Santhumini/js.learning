var _ = require('underscore');
var csv = require("csvtojson");
var fs = require("fs");
const { isFunction } = require('util');
const { Console } = require('console');

var patientData = [];
function readPatient(path) {
  var text = fs.readFileSync(path, 'utf8')
  var p1 = JSON.parse(text);   //this key word is used to (covert string to json)  JSON.parse
  patientData.push(p1)
  //  console.log("File read successfully")
  // return p1;

};
readPatient(".\\data\\patient2.json");

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

function epochConvert(timeconvter) {
  var time = new Date(timeconvter * 1000);
  return time;
}


function get_SMCodes(padata,section,code){
  var SMcode= _.filter(padata[section], function(num) {    
    snomd  = num.codes['SNOMED-CT']
    if (snomd && snomd.length>0){   
    return code.includes(num.codes['SNOMED-CT'][0])
    }
   });
   return SMcode;
  } 

  sortInDescending=(section_data, colname) =>{
    var sorttime = _.sortBy(section_data, function (t) { return epochConvert(t[colname]) })
    return sorttime = sorttime.reverse();
  }


// main function
var completed = [];
_.each(patientData, function (value) {
  //DENOM calculation
  var final = value.birthdate;
  var age = (getAge(epochConvert(final)))
  tmp_obj = {}
  tmp_obj.MRN = value.medical_record_number
  tmp_obj.MEASUREID = 'CMS69v10'
  tmp_obj["DENOM"] = 0
  tmp_obj["NUMER"] = 0                 
  tmp_obj["EXCLUSION"] = 0              
  tmp_obj["Exceptions"]=0
  if (age >= 18) {
    tmp_obj["DENOM"] = 1

  } else {
    tmp_obj["DENOM"] = 0
    
  }
//Exceptions calculation 
var Exceptions_output1 = get_SMCodes(value,"procedures","306136006")
if (Exceptions_output1>0){

  console.log(Exceptions_output1)
}

  // completed.push(tmp_obj);
});
// console.log(completed);



































