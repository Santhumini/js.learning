var csv = require("csvtojson");
var fs=require("fs");
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
    
  //  readWriteFile(".\\data\\csv_source\\Patients.csv",".\\data\\json_output\\patients.json")
  //  readWriteFile(".\\data\\csv_source\\provider.csv",".\\data\\json_output\\provider.json")
  //  readWriteFile(".\\data\\csv_source\\visitInfo.csv",".\\data\\json_output\\visitInfo.json")

function readPatient(path){
var text = fs.readFileSync(path,'utf8')
var P_obj= JSON.parse (text);   //this key word is used to (covert string to json)  JSON.parse
//console.log(P_obj);
return   P_obj  

};
var pData=readPatient(".\\data\\json_output\\patients.json")
var vData=readPatient(".\\data\\json_output\\visitInfo.json")

function visitInfo(PD,VD){
  for(var i=0;i<PD.length;i++){
  
  var varr=[];
    final={}
      for(var j=0;j<=VD.length-1;j++){
       if (PD[i].MRN==VD[j].MRN){
        tmp_obj=[{}]
         tmp_obj =VD[j];
         delete tmp_obj["MRN"];
         varr.push(tmp_obj);
       
         }
   }
   PD[i]["visits"]= varr;
  }
   //console.log(PD)
   writeData(PD,".\\data\\full_patient_data\\patients_fullData.js");
};
visitInfo(pData,vData);
