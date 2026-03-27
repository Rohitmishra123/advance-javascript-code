
// let arr=[10,20,30,40,50];
// let max=0;
// for(let i=1;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i]
//     }
// }
// console.log(max);

// const { forwardRef } = require("react");


// second largest number

// let arr=[10,20,30,60,50];
// let first=-Infinity;
// let second=-Infinity;
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>first){
//         second=first;
//         first=arr[i]
//     }else if(arr[i]>second && second !==first){
//         second=arr[i]
//     }
// }
// console.log(second)


// let arr=[10,20,30,40];
// let ans=[...new Set(arr)];
// ans.sort((a,b)=> a-b)
// console.log(ans[ans.length-2]);


// ye code second smallest number nikl dega agar ye use kre to

// let arr=[10,5,20,8];
// let samllest=Infinity;  // taaki koi bhi number chhota ho jayega aur update ho jaye 
// let secondsmallest=Infinity;

// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]<samllest)
//     {
//        secondsmallest=samllest;
//        samllest=arr[i]
//     }else if(arr[i]<secondsmallest && arr[i] !==samllest)

//         {
//             secondsmallest=arr[i]
//         }
// }
// console.log(secondsmallest)

// agar sir bol diye inbulit method ka use kr ke kro find second smallest number in this array to
// ye logic rhega sort method se kiya hu

// let arr1=[10,5,20,8];
// let uniqe=[...new Set(arr1)];
// uniqe.sort((a,b)=>a-b);
// console.log(uniqe[uniqe.length-3]);


// First repeating Element agr niklna ho to agr jaise he first value mile usko return kr de
// isko phle loop se krte hai
// phir set se krunga 

// let arr=[5,1,2,3,1,2,5];
// let firstrepating=-1
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]==arr[j])
//         {
//            firstrepating=arr[i]
//            break;
//         }
//     }
//      if(firstrepating !==-1)
//      {
//         break;
//      }
// }
// console.log(firstrepating)

//set method se kr rha hu repating wala question

let arr=[1,2,3,4,1,5,3,6];
// let uniqe=new Set();
// let firstrepating=-1;
// for(let i=0;i<arr.length;i++)
// {
//     if(uniqe.has(arr[i]))
//     {
//         firstrepating=arr[i];
//         break;
//     }
//     uniqe.add(arr[i])
// }
// console.log(firstrepating)

let uniqe=new Set();
let firstrepating=-1;
for(let i=0;i<arr.length;i++)
{
    if(uniqe.has(arr[i]))
    {
        firstrepating=arr[i];
        break;
    }
    uniqe.add(arr[i])
}
console.log(firstrepating)
