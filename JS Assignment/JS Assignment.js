var _ = require('underscore');
var csv = require("csvtojson");
var fs=require("fs");
const e = require('express');


function readPatient(path){
  var text = fs.readFileSync(path,'utf8')
  var p1= JSON.parse (text);   //this key word is used to (covert string to json)  JSON.parse
//  console.log("File read successfully")
  return p1;
  
  };
var p1=readPatient(".\\data\\patient1.json");
var p2=readPatient(".\\data\\patient2.json")

var patient_languages=(p1.languages);
// console.log("languages known by the patient  "+patient_languages)


var date=p1["birthdate"];
// console.log(date)


function epochConvert (timeconvter){
var time=new Date(timeconvter* 1000);
return time; 
}
var pdate=epochConvert();

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return "age :"+age;
}
getAge();


var visits=(p1.encounters)
var list=[]
_.each(visits,function(value){
 list.push(value.codes);
});
// console.log(list);

var patient_data=[];
patient_data.push(p1)
patient_data.push(p2)
// console.log(patient_data);


final=[];
_.each(patient_data,function(value){
  var final1=(value.birthdate)
  final.push(getAge(epochConvert(final1)))
})
console.log(final)


