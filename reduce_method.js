// sum niklne ke liye reduce method;
// let arr=[1,2,3,4,5,6];
// let ans=arr.reduce((total,x)=>{
//     return total+x
// });
// console.log(ans)


// sirf even numbers ke liye and uske sum niklna ha method use kiya hu filter and reduce;

// let arr=[1,2,3,4,5,6,7,8,9];
// let sum=arr
// .filter(x=> x % 2==0)
// .reduce((total,x)=>{
//     return total+x
// })
// console.log(sum)



// product niklna hai har number ka

let arr=[1,2,3,4,5];
let ans=arr.reduce((total,x)=>{
    return total*x
})
console.log(ans)