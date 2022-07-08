var myArray = [
    "rock" ,
    "paper",
    "scissor"
  ];
  
  function game(p1,p2){
    if(p1=="rock"&& p2 == "paper"){
     return"p2";
    }else if(p1=="rock"&&p2=="scissor"){
        return"p1";
    }else if(p1=="rock"&&p2=="rock"){
        return"draw"
    }else if(p1=="paper"&&p2=="rock"){
    return "p1"
    }else if(p1=="paper"&&p2=="paper"){
        return "draw"
 }else if(p1=="paper"&&p2=="scissor"){
    return "p2"
}else if(p1=="scissor"&&p2=="rock"){
    return "p2"
}else if(p1=="scissor"&&p2=="paper"){
    return "p2"
}else if(p1=="scissor"&&p2=="scissor"){
    return "draw"
}
}


var i = 1 
var result = {"p1":0,"p2":0,"draw":0};
  while (i <= 3) {
    console.log("**Game"+i+"**");
  var p1 = myArray[Math.floor(Math.random()*myArray.length)];
  var p2 = myArray[Math.floor(Math.random()*myArray.length)];
  console.log("p1  "+p1);
  console.log("p2  "+p2);
       win = game (p1,p2);
       if (win=="draw"){
    console.log("match draw ");}
else{console.log(win+"  wins");
}
     result[win] = result[win] + 1        
        i++;
  }
 

//console.log ("res p1 :"+result["p1"]); //>result[p2]
  if (result["p1"]>result["p2"]){
    console.log ("*****p1 wins*****");
}else if (result["p2"] > result["p1"]){
   console.log ("******p2 wins******");
} else console.log("match drawn");{

}console.log(result);

//console.log(result)
