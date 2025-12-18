//Explicit

let a=-285777.777
// console.log(a)
console.log(typeof(a))

let aInString=String(a)
//console.log(aInString)
console.log(typeof(aInString));



let aInBoolean=Boolean(a)
console.log(aInBoolean);

let str="jkghgh"
let strInNumber=Number(str);
console.log(strInNumber);

let  strBoolean=Boolean(str);
console.log(strBoolean);

//IMPLICIT
console.log(1+"1")
// only + will result in concatention,
// rest all arithmetic operators will get actual result of calculation

console.log(true+5);
console.log(false+5);
console.log(true+false);