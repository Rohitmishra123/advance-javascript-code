// let n=1;
// while(n<=10)
// {
//     console.log(n);
//     n++
// }

// let n=1;
// while(n<=20)
// {
//     if(n % 2==0)
//     {
//         console.log(n)
//     }
//     n++
// }

// odd number print with all the 20 numbers

// let n=1;
// while(n<=20)
// {
//     if(n % 2==1)
//     {
//         console.log(n)
//     }
//     n++
// }

// sum of 10 Numbers;
// let n=123456789;
// let sum=0
// while(n>0)
// {
//     let digit=n%10;
//     n=Math.floor(n/10);
//     sum+=digit
// }

// console.log(sum)

// reverse numbers 

// let n=12345;
// let rev=0;
// while(n>0)
// {
//     let digit=n%10;
//     n=Math.floor(n/10);
//     rev=rev*10+digit
// }
// console.log(rev)


// Palindrome check krna hai ya nhi 
// let n=121;
// let Palindrome=n
// let rev=0;
// while(n>0)
// {
//     let digit=n%10;
//     n=Math.floor(n/10)
//     rev=rev*10+digit
// }
// if(Palindrome==rev)
// {
//     console.log(true)
// }else{
//     console.log(false)
// }

// count krna hai number ko kitne number hai
// let n=12345666;
// let count=0;
// while(n>0)
// {
//     let digit=n%10;
//     n=Math.floor(n/10)
//     count++
// }
// console.log(count)

// amnstrong number check krna hai

// let n=153;
// let amnstrong=n
// let sum=0;
// while(n>0)
// {
//     let digit=n%10;
//     n=Math.floor(n/10);
//     sum+=digit**3
// }
// if(amnstrong==sum)
// {
//     console.log(true)
// }else{
//     console.log(false)
// }

//reverse array without extra array

let arr=[1,2,3,4,5,6,7,8];
let start=0;
let end=arr.length-1;

while(start<end)
{
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--
}
console.log(arr)
