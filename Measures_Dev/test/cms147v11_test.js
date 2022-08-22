const { result, debounce, values, get } = require('underscore');
var _ = require('underscore');
const vary = require('vary');

var array =[10,20,30,50,40];
var array1=[10,20,30,50,40];
array.splice(3)
array.push(52,42)

var sum=0;
for(i=0;i<array.length;i++){
    sum+=array[i];
}


function findSecondLargest(arr){
var arrSorted = arr.sort((a, b) => a - b);
  return arrSorted[arr.length - 2];
}
array.sort()
array.reverse()

for(let i=0;i<array.length;i++){
    //console.log(array[i], array.indexOf(array[i]))
  }

  function countUnique(iterable) {
    return new Set(iterable).size;
  }
  

 var Split = _.chunk(array, 2);

//  result = _.union(array,array1);

 var Multiply = array.map(x => x * 10.0);
 var divide = array.map(x => x /5);
// console.log( divide)
//  console.log (array +"  Delete last 2 elements");
// console.log(array+" pushed 3 elements with duplicates");
// console.log(sum+" sum the array")
// console.log(array.length+" The length array")
// console.log(findSecondLargest(array)+"  Second largest element of in the array");
// console.log(array+"  Sort the array in descending order")
// console.log(countUnique(array)+" Counted of each distinct elements in the array"); 
// console.log(Split+" split 2 as array")
// console.log(result+"Merge the 1st array to the end of 2nd array")
// console.log(Multiply+"Multipling each element with 10.0")

//****************************************************************************************************************************************************** */

var student =[{name:"magesh",dob:"11/26/1999",gender:"male",marks:"89",Grade:"A grade "}
]

// console.log(studentmarks)

// function Grades(marks){
// if (marks<=35){
// console.log("F grade")
// }  if(marks<=36 || marks<=70){
//   console.log("C grade")
// } if(marks<=71||marks<=85){
//   console.log("B grade")
// } else if (marks>=85)
//   console.log("A grade")
// }
// Grades(studentmarks)

// result1 = _.keys(student);
// console.log(result1);
// console.log(result1.length)

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}


 student.push({name: 'Sachin',dob:"04-24-1975",gender:"male",marks:"36",Grade:"C grade"},
              {name:"priya",dob:"11/26/2000",gender:"female",marks:"88",Grade:"A grade "},
                {name:"arun",dob:"07/26/2002",gender:"male",marks:"35",Grade:"F grade "});
// console.log(student);

var newStudent_updata = student.map((user) => ({
  ...user,
  dob:formatDate(new Date(user.dob)) ,   // new Date(user.dob)       
  marks: parseInt(user.marks),
}));
// console.log(newStudent_updata)



var sorting = _.sortBy(newStudent_updata, 'marks');
var updated_student_list=sorting.reverse()
// console.log(updated_student_list)





// function genderCount(obj) {
//   return obj.reduce((acc, curVal) => {
//       if (curVal.gender === 'male') {
//           acc.male++;
//       }
//       else {
//           acc.female++;
//       }
//       return acc;
//   }, {male: 0, female: 0},);
// }
// // console.log(genderCount(updated_student_list));


var gender_count = _.countBy(updated_student_list, "gender")
// console.log(gender_count)


// function mark_graterThan85(obj) {
//   return obj.reduce((acc, curVal) => {
//       if (curVal.marks > 85) {
//           acc.marks++;
//       }
//       return acc;
//   }, {marks:0});
// }
// console.log(mark_graterThan85(updated_student_list));


sum = _.reduce(updated_student_list, function(memo, num) { return memo + ((num.marks > 85 ) ? 1 : 0)}, 0);
console.log(sum);

final=[];
_.each(updated_student_list, function(value) { 
  
  var s=value.dob
  var n=value.name
  final.push(n)
  final.push(getAge(s));
 
});
console.log(final);






function getAge(date) {
  var today = new Date();
  var birthDate = new Date(date);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

// console.log(getAge());









