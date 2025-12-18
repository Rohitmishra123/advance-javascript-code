// a=500
// b=20
// sum=a+b
// console.log("the sum of 500 and 20",sum);

//reverse the number

// let a=321;
// let first=a%10;
// let rest=parseInt(a/10);
// let second=rest%10;
// let third=parseInt(rest/10);
// let reverse=parseInt(String(first)+String(second)+String(third));
// console.log(reverse);
// // console.log(reverse);

// // let ac = 10;
// // if (true) {
// //     // let a = 20;
// //     console.log(a);
// // }
// // console.log(ac);
// // let n=97;

// function factorial(n){
//     if(n===2){
//         return 2;
//     }
//     return n* factorial(n-2)
// }
// console.log(factorial(100));
// console.log(factorial(200));



// let a=10;
//  a=20


// let num=9;
// let result=(num%2===0)?
//                       (num>0? console.log("even +ve"):console.log("even -ve")):
//                       (num>0? console.log("odd +ve"):console.log("odd -ve"));



// let i=10;
// while(i)


// let n=5;
// let str=""
// for(let i=1;i<=n;i++){

//   for(let j=1;j<=n;j++){
//     str+="* "
//   }
  
// }
// console.log(str)

let n=prompt("Enter the number");
for(let i=1;i<=n;i++){
    let str=""
    for(let j=1;j<=i;j++){
         str+="* "
    }
    console.log(str);
}

///
let s="leetcode"
var firstUniqChar = function(s) {
let map=new Map()
for(let i=0;i<s.length;i++){
    if(map.has(s-[i])){
     
    }else{
        return
    }
}
}