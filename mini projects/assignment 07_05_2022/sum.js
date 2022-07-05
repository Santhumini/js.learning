let sum = 93;                                                       
if (sum % 10 == 0){                                                 
    console.log("if");                                        
} else if (sum % 2 == 1){ // here the  condition is passed                                       
    if (sum % 5 == 0 && sum % 2 == 0){ // and failed here
        console.log("Nested if");
    } else if (sum % 5 == 0){
        console.log("Nested else if")
    } else {
        console.log("Nested else")

    }
}

