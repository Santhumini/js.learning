//  var date = new Date();
//  console.log( date.getFullYear() + " ")
// console.log( "/" +( "00" + (date.getMonth() + 1)).slice(-2))
//         console.log(  "/" + ("00" + date.getDate()).slice(-2))
        
//         console.log(  ("00" + date.getHours()).slice(-2) + ":")
//         console.log(  ("00" + date.getMinutes()).slice(-2))
//         console.log(  ":" + ("00" + date.getSeconds()).slice(-2))
    


const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
];

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers.name}!`);
});
