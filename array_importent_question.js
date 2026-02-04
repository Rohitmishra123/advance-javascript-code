// missing number in array question isme se jo array me nhi usko array me print krna hai

// let arr=[1,2,4,5];
// let missing=-1;
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i] !==i+1)
//     {
//         missing=i+1;
//         break
//     }
// }
// console.log(missing)


// 1 array me duplicate number print krna hai kun sa number duplicate hai bs whi array me daal do

// let arr1=[1,2,3,2,4,1];
// let duplicate=[];
// for(let i=0;i<arr1.length;i++)
// {
//     for(let j=i+1;j<arr1.length;j++)
//     {
//         if(arr1[i]==arr1[j])
//         {
//             if(duplicate.includes(arr1[i])==false)
//             {
//                 duplicate.push(arr1[i])
//             }
//         }
//     }
// }
// console.log(duplicate)


// agar array me bs duplicate number remove kr ke print krna ho to iske liye ye code hai

// let arr2=[1,2,3,2,4,1];
// let duplicatearr=[];
// for(let i=0;i<arr2.length;i++)
// {
//     if(!duplicatearr.includes(arr2[i]))
//     {
//         duplicatearr.push(arr2[i])
//     }
// }
// console.log(duplicatearr)

// moves zero to array end

// let arr3=[1,0,2,0,3,0,4];
// let moveZero=0;
// for(let i=0;i<arr3.length;i++)
// {
//     if(arr3[i] !==0)
//     {
//       arr3[moveZero++]=arr3[i]  
//     }
// }
// while(moveZero<arr3.length)
// {
//     arr3[moveZero++]=0
// }
// console.log(arr3)


// array me diya gya string aur number dono ko alg alg print krna hai

// let arr=["a",1,"b",2,"c",3];
// let number=[];
// let string=[];
// for(let i=0;i<arr.length;i++)
// {
//     if(typeof arr[i]=="number")
//     {
//         number.push(arr[i])
//     }else if(typeof arr[i]=="string")
//     {
//         string.push(arr[i])
//     }
// }
// console.log(number);
// console.log(string)


// jo bhi dono array me common number usko print kro dusre array mai

// let arr=[1,2,3,4,5];
// let arr1=[3,4,5,6,7,8];
// let commonnumber=[];
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr1.length;j++)
//     {
//         if(arr[i]==arr1[j])
//         {
//             commonnumber.push(arr[i])
//         }
//     }
// }
// console.log(commonnumber)




// array ke frequency btna hai ki jo array me number 1 kitne baar aya hai

// let arr=[1,2,3,4,5,5,4,3,2,2,5];
// let obj={};
// for(let i=0;i<arr.length;i++)
// {
//     let count=arr[i];
//     if(count !==0)
//     {
//       if(obj[count])
//       {
//         obj[count]++
//       }else{
//         obj[count]=1
//       }
//     }
// }
// console.log(obj)

// let arr=[1,2,3,1,2,2,4,5,5,5];
// let freq=new Map()

// for(let t of arr)
// {
//   if(freq.has(t))
//   {
//     let value=freq.get(t);
//     freq.set(t,value+1)
//   }else{
//     freq.set(t,1)
//   }
// }
// console.log(freq)

// let arr1=[1,2,3,4,5,5,4,4,3,2];
// let obj1={}
// for(let i=0;i<arr1.length;i++)
// {
//   let count=arr1[i];
//   if(count !==0)
//   {
//     if(obj1[count])
//     {
//       obj1[count]++
//     }else{
//       obj1[count]=1
//     }
//   }
// }
// console.log(obj1)

function greet(callback)
{
 
  console.log("Hi")
  callback()
}
function sayHi()
{
  console.log("Hello")
}
greet(sayHi)