
const prompt = require("prompt-sync")({ sigint: true });
const { clear } = require("console");
var fs=require("fs");
const { get } = require("stack-trace");
const { empty } = require("statuses");
const { is } = require("type-is");


function getAccountInfo(){
var text = fs.readFileSync('Accounts.json','utf8')
var acc_obj= JSON.parse (text);                      //this key word is used to (covert string to json)  JSON.parse
return   acc_obj  
};

function writeAccInfo(data){
    var data_string=JSON.stringify(data,undefined,4)       //this keyword is used to (json to string) JSON.stringify
     fs.writeFileSync('Accounts.json',data_string );
    console.log("File written successfully\n");
    }
   

//main
// var acc = getAccountInfo();
// var a=  json.parse(acc)
// document.write(acc.name)
// for (var i=0;i<=acc.length-1;i++){
// if(acc[i].account_no=="A99440DH"){
//     acc[i].Balance= acc[i].Balance +530;
// break;
// }               
//}
//writeAccInfo(acc);

function options () {

console.log ("Enter your choice ?\n click 1 for creat account\n click 2 for deposit\n click 3 for withdraw\n click 4 for check balance\n click 5 for transfer to another account\n click 6 for exit\n\n");
 var  choice= prompt("");


switch (choice) {
        case "1": creatAccount(); 
        options();
        break;
        case "2":  console.log('Enter a Account num for deposit \n')
        var AccountNum = prompt(" ");
       console.log('Enter an deposit amount \n')
        var amount= prompt(" ");
        depositAmount(AccountNum,amount); 
        options();
        break;
        case "3":  
        console.log("Enter the account num to WithDraw");
        var AccountNum = prompt(" ");
        console.log("Enter the amount");
        var amount= prompt(" ");
    
        WithDrawAmount(AccountNum,amount);
        options();
        break; 
        case "4": 
            console.log("Enter the your account num");
            var accountNum=prompt(" ")
            var bal = balance(accountNum);
           
            if (bal != -1 ) {
                console.log("The balance is :"+ bal);
                
              }
            else{
                console.log(" Failed to get balance")
            }
            options();    
        break; 
        case "5": transfer();
        options(); 
        
        break; 
        case "6": exit(); 
        break;
}
}

function current_date_time() {
    var date = new Date();
    var Str =
         date.getFullYear()
        + "-" + ( "00" + (date.getMonth() + 1)).slice(-2)
        + "-" + ("00" + date.getDate()).slice(-2)
        +" "
        +("00" + date.getHours()).slice(-2) + ":"
        + ("00" + date.getMinutes()).slice(-2)
        + ":" + ("00" + date.getSeconds()).slice(-2);
        return Str;
}

function creatAccount() 
{
    console.log('Enter your name:\n')
     var name = prompt("");
    console.log('Enter your mobileNum:\n') ;
    var mobileNum = prompt("");
   console.log('Enter the  deposit amount mininum  is 1000 \n') ;
    var balance= prompt();
    var balanceAmount=parseFloat(balance);
    var bval = balancevalidation(balanceAmount)
if (bval){
// console.log(bval+"!!!")
   var LastTxndatetime = current_date_time()
   var last3txns=["C_"+ balance];
    var acc_obj= getAccountInfo()
   var ln =acc_obj.length+1
    var acc_no= "A"+ln+"M"+mobileNum.substring(0,5)+name.substring(0,2);
    var a_obj= {"cust_name":name,"mobile_num":mobileNum,"account_no":acc_no,"BalanceAmount":bval,"LastTxndatetime":LastTxndatetime,"last3txns":last3txns}
    acc_obj.push(a_obj)
    
   writeAccInfo(acc_obj);
}
else{
    console.log("Invalid minimun balance Account cannot be created ");
   // options()
}
}

 function depositAmount(AccountNum,amount){
  if (isNaN(amount)  ){
    console.log("Given amount is not a number ")
return -1;
}

   var  depositAmount=parseFloat(amount);
    
    var acc_obj= getAccountInfo()
    for (var i=0;i<=acc_obj.length-1;i++){
        if(acc_obj[i].account_no==AccountNum){
             acc_obj[i].Balance+=depositAmount;
             acc_obj[i].LastTxndatetime= current_date_time();
             acc_obj[i].last3txns.push("C_"+ depositAmount)
             acc_obj[i].last3txns= acc_obj[i].last3txns.slice(-3);
             
             writeAccInfo(acc_obj); 
             break;
        }
 }
 if(i==(acc_obj.length-1)+1){
    console.log("Invalid account num")
}
 }
function WithDrawAmount(AccountNum,amount){
    if (isNaN(amount)  ){
        console.log("Given amount is not a number ")
    return -1;
    }
    amount= parseFloat(amount);
    var acc_obj= getAccountInfo()
    for(i=0;i<=acc_obj.length-1;i++){
        if(acc_obj[i].account_no==AccountNum){
            if(acc_obj[i].Balance<amount){
                console.log("you dont have that much amount")
                return -1
            }
            acc_obj[i].Balance -=amount;
            acc_obj[i].last3txns.push("D_"+ amount)
            acc_obj[i].LastTxndatetime= current_date_time();
            console.log(acc_obj[i].LastTxndatetime);
             acc_obj[i].last3txns=acc_obj[i].last3txns.slice(-3);
            writeAccInfo(acc_obj); 
            break;
        }
    }if(i==(acc_obj.length-1)+1){
        console.log("Invalid account num")
        return -1
    }
 }

    function balance(accountNum){
      
        var acc_obj=getAccountInfo()
        for(i=0;i<=acc_obj.length-1;i++){
        
            if(acc_obj[i].account_no==accountNum){
              
                return acc_obj[i].Balance
                
            }
        }
       
        if(i==(acc_obj.length-1)+1){
            console.log("Invalid account num")
            return -1
        }

    }
    
         function isAccountExist(Accnum,acc_obj){
            for(i=0;i<=acc_obj.length-1;i++){
                if(acc_obj[i].account_no==Accnum)
                { 
                return true;
            }
        }
        if(i==(acc_obj.length-1)+1){
            return false;
        }
        }



function transfer(){
    console.log("From Account No:")
    var FrmAccNo= prompt(" ");
    console.log("To Account No:")
    var ToAccNo= prompt(" ");
    console.log("Transfer amount")
    var TrAmt= prompt(" ");
   var acc_obj= getAccountInfo()
    if (isAccountExist(FrmAccNo,acc_obj) && isAccountExist(ToAccNo,acc_obj) )
    {

     var bamt =  balance(FrmAccNo,acc_obj)

      if (bamt > TrAmt )
      {
 
    WithDrawAmount(FrmAccNo,TrAmt)
    
   depositAmount(ToAccNo,TrAmt);
    

      }

    }else{console.log("From or To Accnum is invalid");
}
    
} 
function exit(){
    exit;
}


  
function balancevalidation(balance) {
  if (balance >=1000 ) {
    console.log("balance :"+balance);
    return balance;
  } else {
console.log("Invalid amount. enter amount > 1000 ");
var corr_amt = prompt(" ");
corr_amt=parseFloat(corr_amt);
if (corr_amt >=1000){
    return corr_amt;
}
  
  }
  
  
}

options();



