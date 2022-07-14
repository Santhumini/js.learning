var animals=[{name:"lab",color:"white",cost:500},
   {name:"bull dog",color:"black",cost:800},
   {name:"lab",color:"black",cost:600},
   {name:"husky",color:"white",cost:78}
   ]
//   function animalsOnly2(X){         // this is called normal function 
//       return x.name
//   }
    // animalsOnly=(nameOfAnimals)=>(nameOfAnimals.name)
    budget=(a)=>a.cost <=700;
    blackDogs=(abc)=>abc.color=="black";  // this called arrow function
    console.log(budget);
console.log(blackDogs);
//     var result2=animals.filter(blackDogs);
//var result= animals.map(animalsOnly);
   