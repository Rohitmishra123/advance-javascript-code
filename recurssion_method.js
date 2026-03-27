// function fact(n){
//     if(n==0)
//     return 1
//     return n*fact(n-1)
// }
// console.log(fact(5))



// function sum(n)
// {
//     if(n==0)
//         return 0
//     return n+sum(n-1)
// }
// console.log(sum(5))

// function reverse(n){
//     if(n==0)
//     return
//     console.log(n)
//     reverse(n-1);
// }
// reverse(5)


// function reversearray(arr,start,end)
// {
//     if(start>=end)
    
//         return;

//         let temp=arr[start];
//         arr[start]=arr[end];
//         arr[end]=temp
//     reversearray(arr,start+1,end-1)
// }
// let arr=[5,4,3,2,1];
// reversearray(arr,0,arr.length-1)
// console.log(arr)


// function reversestring(str)
// {
//     if(str.length==0)
//         return "";
//     return reversestring(str.slice(1))+str[0];
// }
// console.log(reversestring("rohit"))


// sum krne ke liye array ka with recurssion

// function sumarray(arr,index=0)
// {
//     if(index==arr.length)
//      return 0
//   return arr[index]+sumarray(arr,index+1)
// }
// let arr=[1,2,3,4,5,6];
// console.log(sumarray(arr))

// Ye code palidrome ka with recurssion se mere ko best lga hai

// function reversestring(str)
// {
//     if(str.length==0)
//         return "";
//     return reversestring(str.slice(1))+str[0];
// }
// let str="madam"
// console.log(str===reversestring(str))


//prime number with recurssion se krne ke liye ye logic implement krna hai
// function isprime(n,i=2)
// {
//     if(n<=1)
//         return false
//     if(i*i>n)
//         return true
//     if(n % i==0)
//         return false
//     return isprime(n,i+1)
// }
// console.log(isprime(7));
// console.log(isprime(10));
