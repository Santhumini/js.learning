const { log } = require("console");
var csv = require("csvtojson");
var fs = require("fs");
var _ = require('underscore');

// Convert a csv file with csvtojson
function readWriteFile(path, writePath) {
  csv()
    .fromFile(path)
    .then(function (jsonArrayObj) { //when parse finished, result will be emitted here.

      writeData(jsonArrayObj, writePath);
    })
}


function writeData(data, writePath) {
  var data_string = JSON.stringify(data, undefined, 4)
  fs.writeFileSync(writePath, data_string);
  console.log("File written successfully\n");
}

function readPatient(path) {
  var text = fs.readFileSync(path, 'utf8')
  var P_obj = JSON.parse(text);   //this key word is used to (covert string to json)  JSON.parse
  //  console.log("File written successfully")
  return P_obj

};


readWriteFile("..\\data\\csv_source\\Patients.csv", "..\\data\\json_output\\Patients.json")
readWriteFile("..\\data\\csv_source\\provider.csv", "..\\data\\json_output\\provider.json")
readWriteFile("..\\data\\csv_source\\visitInfo.csv", "..\\data\\json_output\\visitInfo.json")

// const fs = require('fs')

ppath = '..\\data\\json_output\\Patients.json'
vpath = '..\\data\\json_output\\visitInfo.json'

try {
  if (fs.existsSync(ppath) && fs.existsSync(vpath)) {
    var pData = readPatient(ppath)
    var vData = readPatient(vpath)

    var final = [];
    _.each(pData, function (p) {

      var vD = _.filter(vData, function (value) { return value.MRN == p.MRN });
      
      _.each(vD, function(x) { delete x.MRN; });
  

      _.extend(p, { "visit": vD });
      final.push(p);
    });
    writeData(final, "..\\data\\patient_visits_using_underscore_output\\Full_patients_data_info.json")


  }
} catch (err) {
  console.error(err)
}


















