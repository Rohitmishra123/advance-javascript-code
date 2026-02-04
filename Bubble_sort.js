
// ascending  order me print krne ke liya  ye code hai
// let arr=[4,1,3,9,7];
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr.length-1-i;j++)
//     {
//         if(arr[j]>arr[j+1])
//         {
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr)

// Descending order me print krne ke liye ye code 
// let arr1=[3,1,2,5,4];
// for(let i=0;i<arr1.length;i++)
// {
//     for(let j=0;j<arr1.length-1-i;j++)
//     {
//         if(arr1[j]<arr1[j+1])
//         {
//             let temp=arr1[j];
//             arr1[j]=arr1[j+1];
//             arr1[j+1]=temp
//         }
//     }
// }
// console.log(arr1)


// agar array allready sorted hai to uske liye ye condtion 
// flag ka use krke krnege
 
// let arr=[1,2,3,4,5,6];
// let flag;
// for(let i=0;i<arr.length;i++)
// {
//     flag=false;
//   for(let j=0;j<arr.length-i-1;j++)
//   {
//     if(arr[j]>arr[j+1])
//     {
//         let temp=arr[j];
//         arr[j]=arr[j+1];
//         arr[j+1]=temp;
//         flag=true
//     }
    
//   }
// }
// console.log(arr)


function bubblesort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp
            }
        }
    }
    return arr
}
console.log(bubblesort([3,5,2,1,8]));
