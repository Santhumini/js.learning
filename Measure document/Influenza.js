var _ = require("underscore")
var csv = require("csvtojson");
var fs = require("fs");
const { Console } = require("console");
const e = require("express");
const { get } = require("underscore");


var patientData = [];
function readPatient(path) {
    var text = fs.readFileSync(path, 'utf8')
    var p1 = JSON.parse(text);   //this key word is used to (covert string to json)  JSON.parse
    patientData.push(p1)
    //    console.log("File read successfully")

};
readPatient(".\\Influenza_data\\Influenza_patient1.json");
readPatient(".\\Influenza_data\\Influenza_patient2.json");
readPatient(".\\Influenza_data\\Influenza_patient3.json");
readPatient(".\\Influenza_data\\Influenza_patient4.json");

// console.log(patientData)

OidDictionary = { "2.16.840.1.113883.3.526.3.1253": { "ICD-10-CM": ["T78.08XA", "T78.08XD", "T78.08XS", "Z91.012"], "SNOMED-CT": ["91930004", "213020009"] }, "2.16.840.1.113883.3.526.3.1256": { "SNOMED-CT": ["294648008", "294649000", "294647003"] }, "2.16.840.1.113883.3.526.3.1254": { "CVX": ["135", "140", "141", "144", "149", "150", "155", "158", "161", "166", "168", "171", "185", "186", "197", "205", "88"] }, "2.16.840.1.113883.3.526.3.1257": { "SNOMED-CT": ["293112000", "293113005", "390796006", "420113004"] }, "2.16.840.1.113883.3.526.3.402": { "CPT": ["90630", "90653", "90654", "90655", "90656", "90657", "90658", "90661", "90662", "90666", "90667", "90668", "90673", "90674", "90682", "90685", "90686", "90687", "90688", "90689", "90694", "90756"], "HCPCS Level II": ["G0008", "Q2034", "Q2035", "Q2036", "Q2037", "Q2038", "Q2039"], "SNOMED-CT": ["86198006"] }, "2.16.840.1.113883.3.526.3.1537": { "SNOMED-CT": ["102263004", "226881001", "226885005", "229955000", "256442007", "256443002", "286550009", "303300008", "414074006"] }, "2.16.840.1.113883.3.526.3.1240": { "HCPCS Level II": ["G0438", "G0439"], "SNOMED-CT": ["444971000124105", "456201000124103"] }, "2.16.840.1.113883.3.464.1003.101.12.1014": { "CPT": ["99324", "99325", "99326", "99327", "99328", "99334", "99335", "99336", "99337"], "SNOMED-CT": ["209099002", "210098006"] }, "2.16.840.1.113883.3.464.1003.101.12.1013": { "CPT": ["99315", "99316"] }, "2.16.840.1.113883.3.526.3.1083": { "CPT": ["90951", "90952", "90953", "90954", "90955", "90956", "90957", "90958", "90959", "90960", "90961", "90962", "90963", "90964", "90965", "90966", "90967", "90968", "90969", "90970", "99512"], "SNOMED-CT": ["302497006"] }, "2.16.840.1.113883.3.464.1003.101.12.1016": { "CPT": ["99341", "99342", "99343", "99344", "99345", "99347", "99348", "99349", "99350"], "SNOMED-CT": ["185460008", "185462000", "185466002", "185467006", "185468001", "185470005", "225929007", "315205008", "439708006", "698704008", "704126008"] }, "2.16.840.1.113883.3.526.3.1255": { "SNOMED-CT": ["315640000"] }, "2.16.840.1.113883.3.464.1003.101.12.1012": { "CPT": ["99304", "99305", "99306", "99307", "99308", "99309", "99310", "99315", "99316", "99318"], "SNOMED-CT": ["18170008", "207195004"] }, "2.16.840.1.113883.3.464.1003.101.12.1001": { "CPT": ["99201", "99202", "99203", "99204", "99205", "99212", "99213", "99214", "99215"], "SNOMED-CT": ["30346009", "37894004", "185463005", "185464004", "185465003", "3391000175108", "439740005"] }, "2.16.840.1.113883.3.464.1003.101.12.1080": { "CPT": ["98966", "98967", "98968", "99441", "99442", "99443"], "SNOMED-CT": ["185317003", "314849005", "386472008", "386473003", "401267002"] }, "2.16.840.1.113883.3.464.1003.101.12.1089": { "CPT": ["98969", "98970", "98971", "98972", "99421", "99422", "99423", "99458"], "HCPCS Level II": ["G0071", "G2010", "G2012", "G2061", "G2062", "G2063"] }, "99211": { "CPT": ["99211"] }, "2.16.840.1.113883.3.464.1003.101.12.1008": { "CPT": ["99241", "99242", "99243", "99244", "99245"], "SNOMED-CT": ["281036007", "77406008"] }, "2.16.840.1.113883.3.526.3.1012": { "SNOMED-CT": ["185316007", "185317003", "185318008", "185320006", "185321005", "185349003", "185463005", "185465003", "270424005", "270427003", "270430005", "308335008", "308720009", "386473003", "390906007", "401267002", "401271004", "406547006", "438515009", "438516005", "445450000", "448337001", "87790002", "90526000"] }, "2.16.840.1.113883.3.526.3.1084": { "CPT": ["90945", "90947", "90951", "90952", "90953", "90954", "90955", "90956", "90957", "90958", "90959", "90960", "90961", "90962", "90963", "90964", "90965", "90966", "90967", "90968", "90969", "90970"], "SNOMED-CT": ["14684005", "225230008", "238318009", "238319001", "238321006", "238322004", "238323009", "428648006", "676002", "71192002"] }, "2.16.840.1.113883.3.464.1003.101.12.1024": { "CPT": ["99391", "99392", "99393", "99394"] }, "2.16.840.1.113883.3.464.1003.101.12.1025": { "CPT": ["99395", "99396", "99397"] }, "2.16.840.1.113883.3.464.1003.101.12.1027": { "CPT": ["99411", "99412"] }, "2.16.840.1.113883.3.464.1003.101.12.1030": { "CPT": ["99429"] }, "2.16.840.1.113883.3.464.1003.101.12.1026": { "CPT": ["99401", "99402", "99403", "99404"] }, "2.16.840.1.113883.3.464.1003.101.12.1023": { "CPT": ["99385", "99386", "99387"] }, "2.16.840.1.113883.3.464.1003.101.12.1022": { "CPT": ["99381", "99382", "99383", "99384"] }, "2.16.840.1.113883.3.526.3.1252": { "CPT": ["99201", "99202", "99203", "99204", "99205", "99212", "99213", "99214", "99215", "99241", "99242", "99243", "99244", "99245", "99304", "99305", "99306", "99307", "99308", "99309", "99310", "99315", "99316", "99318", "99324", "99325", "99326", "99327", "99328", "99334", "99335", "99336", "99337", "99341", "99342", "99343", "99344", "99345", "99347", "99348", "99349", "99350", "99381", "99382", "99383", "99384", "99385", "99386", "99387", "99391", "99392", "99393", "99394", "99395", "99396", "99397", "99401", "99402", "99403", "99404", "99411", "99412", "99429"], "HCPCS Level II": ["G0438", "G0439"], "SNOMED-CT": ["30346009", "37894004", "18170008", "185460008", "185462000", "185463005", "185464004", "185465003", "185466002", "185467006", "185468001", "185470005", "207195004", "209099002", "210098006", "225929007", "281036007", "315205008", "3391000175108", "439708006", "439740005", "698704008", "704126008", "77406008"] }, "2.16.840.1.113883.3.526.3.1185": { "SNOMED-CT": ["185900003", "185901004", "185902006", "416928007"] }, "2.16.840.1.113883.3.526.3.1007": { "SNOMED-CT": ["183932001", "183964008", "183966005", "266721009", "269191009", "31438003", "35688006", "397745006", "407563006", "410534003", "410536001", "416098002", "428119001", "59037007", "62014003", "79899007"] }, "2.16.840.1.113883.3.526.3.1008": { "SNOMED-CT": ["105480006", "160932005", "160934006", "182890002", "182895007", "182897004", "182900006", "182902003", "183944003", "183945002", "184081006", "185479006", "185481008", "224187001", "225928004", "266710000", "266966009", "275694009", "275936005", "281399006", "310343007", "373787003", "406149000", "408367005", "413310006", "413311005", "413312003", "416432009", "423656007", "424739004", "443390004", "713247000"] }, "2.16.840.1.113883.3.526.3.1009": { "SNOMED-CT": ["107724000", "182856006", "182857002", "185335007", "224194003", "224198000", "224199008", "242990004", "266756008", "270459005", "309017000", "309846006", "419808006", "424553001"] } }

function oid_get_codes  (OidDict, oid, codeystem) {
    var get_codes = OidDict[oid][codeystem]
    return get_codes;
  }
  


function epochConvert(timeconvter) {
    var time = new Date(timeconvter * 1000);
    return time;
}



function monthDiff(d1) {
    current_date = new Date();
    months = (current_date.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += current_date.getMonth();
    return months <= 0 ? 0 : months;
}

function encounters(patientData,section,code){
    
    var encounters_code=_.filter(patientData[section],function(i){
    var SNOMEDCT=i.codes["SNOMED-CT"] ||i.codes["CPT"]
    if(SNOMEDCT && SNOMEDCT.length>0){
        return code.includes((i.codes["SNOMED-CT"]&&i.codes["SNOMED-CT"][0]) ||(i.codes["CPT"]&&i.codes["CPT"][0]))
    }
})
return encounters_code

}

function immunizations_codes(patientData,section,code){
   var codes= _.filter(patientData[section],function(v){
    var cvxCode = v.codes["CVX"] || v.codes["ICD-10-CM"]
    if(cvxCode && cvxCode.length>0){
        return code.includes((v.codes["CVX"] && v.codes["CVX"][0])|| (v.codes["ICD-10-CM"] && v.codes["ICD-10-CM"][0]))
    }
    })
    return codes;
}

function sortInDescending  (section_data, colname)  {
    var sorttime = _.sortBy(section_data, function (t) { return epochConvert(t[colname]) })
    return sorttime = sorttime.reverse();
  }
 
getYear = (val) => new Date(val).getFullYear()


var completed = [];
_.each(patientData, function (patdata) {
    tmp = {}
    tmp["DENOM"] = 0
    tmp["NUMER"]=0
    tmp["EXCLUSION"]=0
    tmp["EXCEPTIONS"]=0
    tmp["outlier"] = 0

//DENOM    
    var patdob = monthDiff(epochConvert(patdata.birthdate))

    SNOMEDCT_codes=oid_get_codes(OidDictionary,"2.16.840.1.113883.3.464.1003.101.12.1001", "SNOMED-CT")
    getencounters_section=encounters(patdata,"encounters",SNOMEDCT_codes)

    if(getencounters_section.length>0){

    encounters_time =sortInDescending(getencounters_section,"start_time")
    svcYear_encounters=encounters_time[0]["start_time"]
   
    encounters_years =getYear(epochConvert(svcYear_encounters))

    }
    cptCodes=oid_get_codes(OidDictionary,"2.16.840.1.113883.3.526.3.1083","CPT")
    get_procedures=encounters(patdata,"procedures",cptCodes)   
    if(get_procedures.length>0){
    getSorted_procedures =sortInDescending(get_procedures,"start_time")
    get_procedures_time = getSorted_procedures [0]["start_time"]
   
    procedures_svcYear=getYear(epochConvert(get_procedures_time))
    }

    if (patdob >= 6 &&encounters_years==2022 && procedures_svcYear==2022 ) {
        tmp["DENOM"] = 1
    }
    if( tmp["DENOM"] == 0){
        tmp["NUMER"]=0
        tmp["EXCLUSION"]=0
        tmp["EXCEPTIONS"]=0
        tmp["outlier"] = 0
    }

//EXCEPTIONS 
    else{
     ICD10CM_code=oid_get_codes(OidDictionary,"2.16.840.1.113883.3.526.3.1253", "ICD-10-CM")
     get_section1= immunizations_codes(patdata,"conditions",ICD10CM_code)
     if (get_section1.length > 0) {
     sortedExceptions=sortInDescending(get_section1,"start_time")
     sorted_time1=sortedExceptions[0]["start_time"]
     svcYear1=getYear(epochConvert(sorted_time1))
     if(svcYear1==2022){
        tmp["EXCEPTIONS"]=1
     }else{
        tmp["EXCEPTIONS"]=0
     }
    }
     if(tmp["DENOM"]==1&&tmp["EXCEPTIONS"]==1){
        tmp["NUMER"]==0
        tmp["EXCLUSION"]==0
        tmp["outlier"] = 0
     }


     }

//NUMER
    CVX_code=oid_get_codes(OidDictionary,"2.16.840.1.113883.3.526.3.1254", "CVX")
    get_section2= immunizations_codes(patdata,"immunizations",CVX_code)
    if (get_section2.length > 0) {
    sorted=sortInDescending(get_section2,"start_time")
    sorted_time2=sorted[0]["start_time"]
    svcYear= getYear(epochConvert(sorted_time2))
     if(svcYear==2022){
        tmp["NUMER"]=1
     }else {
        tmp["NUMER"]=0
     }
    }
    if (tmp["DENOM"] == 1 && tmp["NUMER"] == 0 && tmp["EXCLUSION"] == 0 && tmp["EXCEPTIONS"] == 0) {
        tmp["outlier"] = 1
      }

    completed.push(tmp)

})
console.log(completed)















