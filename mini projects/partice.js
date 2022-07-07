var fs=require("fs");

fs.readFile("student.csv", function (err, data) {
    if (err) {
      return console.error(err);
    }
    studentDetails = data.toString();
      
});