const { log } = require("console");
var csv = require("csvtojson");
var fs=require("fs");
var _ = require('underscore');

// Convert a csv file with csvtojson
function readWriteFile(path,writePath){
csv()
  .fromFile(path)
  .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
   
     writeData(jsonArrayObj,writePath);
   })
  }


   function writeData(data,writePath){
    var data_string=JSON.stringify(data,undefined,4)       
    fs.writeFileSync(writePath,data_string );
    console.log("File written successfully\n");
    }
    
   readWriteFile(".\\data\\csv_source\\Patients.csv",".\\data\\underscore_json\\patients.json")
 // readWriteFile(".\\data\\csv_source\\provider.csv",".\\data\\json_output\\provider.json")
   readWriteFile(".\\data\\csv_source\\visitInfo.csv",".\\data\\underscore_json\\visit.json")
  // C:\GITLAB\js.learning\create_patient_objects\data\underscore_json

function readPatient(path){
    var text = fs.readFileSync(path,'utf8')
    var P_obj= JSON.parse (text);   //this key word is used to (covert string to json)  JSON.parse
  //  console.log("File written successfully")
    return   P_obj  
    
    };
    var pData=readPatient(".\\data\\underscore_json\\patients.json")
    var vData=readPatient(".\\data\\underscore_json\\visit.json")
  console.log(pData);
 console.log(vData);
var final=[];
  _.each(pData, function(p)
  {

    var vD =_.filter(vData, function(value) { return value.MRN ==p.MRN});
    
    _.extend(p,{"visit": vD});
final.push(p);
});
writeData(final,".\\data\\full_patient_data\\patients_fullData_Underscore.json")


        
  