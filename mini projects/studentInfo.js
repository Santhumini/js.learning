var fs=require("fs");

fs.readFile("student.csv", function (err, data) {
    if (err) {
      return console.error(err);
    }
  const studentDetails = data.toString();
    // console.log(studentDetails);
    saveFile(studentDetails);
});
function  saveFile(studentDetails){
  fs.writeFile("studentFiles.csv",studentDetails+ "\ncompleted", function (err) {
    if (err) {
      return console.error(err);
    }
    console.log(studentDetails);
  });
}



  
  



