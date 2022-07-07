var fs=require("fs");

fs.readFile("information.csv", function (err, data) {
    if (err) {
      return console.error(err);
    }
    studentDetails= data.toString();
      
});
/*fs.writeFile(
  "information.csv",
  studentDetails +"task completed",
  function (err) {
    if (err) {
      return console.error(err);
    }
  });*/
