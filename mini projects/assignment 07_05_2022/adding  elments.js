var num=[8.2,23.1,9.2,8.8,20.0,18.2,6.5,90.1,5.1,30.1]
var suma = 0.0;
var sumb = 0.0;
for(i=0;i<num.length;i++){

if(num[i]<=10.0){
  suma = suma+num[i];
}else{
  sumb = sumb+num[i];
}

}
console.log(suma);
console.log(sumb);
