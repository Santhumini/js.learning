var a= process.argv
console.log(a)

var h = a[2]
var w = a[3]

console.log("h=:"+h)
console.log("W=:"+w)

const b = (w/ ((h*h)/10000)).toFixed(2);
console.log(b)