// simple bs print krna hai is nested array ko
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         console.log(arr[i][j])
//     }
// }

// pure nested  array ko sum krna hai

// let arr1=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// let sum=0;
// for(let i=0;i<arr1.length;i++)
// {
//     for(let j=0;j<arr1[i].length;j++)
//     {
//         sum+=arr1[i][j]
//     }
// }
// console.log(sum)

// diagonal sum krna hai

// let arr2=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],

// ];
// let sumdiagnoal=0
// for(let i=0;i<arr2.length;i++)
// {
//     for(let j=0;j<arr2[i].length;j++)
//     {
//         if(i==j)
//         {
//             sumdiagnoal+=arr2[i][j]
//         }
//     }
// }
// console.log(sumdiagnoal)




// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// let signalsum=0;
// for(let i=0;i<arr.length;i++)
// {
//     signalsum+=arr[i][i];
//     signalsum+=arr[i][arr.length-1-i]
// }
// console.log(signalsum)


// transpose kya hota hai;
// row ko colums bana dena;
// aur colums ko row bna dena

// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// let transpose=[];
// for(let i=0;i<arr[0].length;i++)
// {
//     let row=[];
//   for(let j=0;j<arr.length;j++)
//   {
//     row.push(arr[j][i])
//   }
//   transpose.push(row)
// }
// console.log(transpose)



// max find krna hai is nestesd array se

// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];
// let max=arr[0][0];
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         if(max<arr[i][j])
//         {
//             max=arr[i][j]
//         }
//     }
// }
// console.log(max)


// agar bs alg alg coulum ka sum niklna ho to logic ye rhega

// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// for(let j=0;j<arr[0].length;j++)
// {
//     let sum=0;
//   for(let i=0;i<arr.length;i++)
//   {
//     sum+=arr[i][j]
//   }
//   console.log(sum)
// }


// agr arow ka sum niklna ho to uske liye ye condtion rhega 
let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
for(let i=0;i<arr.length;i++)
{
    let sum=0;
    for(let j=0;j<arr[i].length;j++)
    {
        sum+=arr[i][j]
    }
    console.log(sum)
}