// let arr=[6,3,5,2];
//  for(let i=0;i<arr.length;i++)
//  {
//     let curr=arr[i];
//     let j=i-1
//     while(j>=0 && arr[j] > curr)
//     {
//         arr[j+1]=arr[j];
//         j--
//     }
//     arr[j+1]=curr
//  }
//  console.log(arr)


// function insertionsort(arr){
//    for(let i=0;i<arr.length;i++)
//    {
//      let current=arr[i];
//      let j=i-1;
//      while(j>=0 && arr[j]>current)
//      {
//         arr[j+1]=arr[j];
//         j--
//      }
//      arr[j+1]=current
//    }
//    return arr;
// }
// console.log(insertionsort([6,3,5,2]))


// function insertionsort(arr){
//     for(let i=0;i<arr.length;i++)
//     {
//         let current=arr[i];
//         let j=i-1;
//         while(j>=0 && arr[j]>current)
//         {
//             arr[j+1]=arr[j];
//             j--
//         }
//         arr[j+1]=current
//     }
//     return arr
// }
// console.log(insertionsort([5,3,4,2]))



// function insertionsort(arr){
//     for(let i=0;i<arr.length;i++)
//     {
//         let current=arr[i];
//         let j=i-1;
//         while(j>=0 && arr[j]>current){
//             arr[j+1]=arr[j];
//             j--
//         }
//         arr[j+1]=current
//     }
//     return arr
// }
// console.log(insertionsort([5,6,2,1]));



    function insertionsort(arr){
        for(let i=0;i<arr.length;i++)
        {
            let current=arr[i];
            let j=i-1;
            while(j>=0 && arr[j]>current)
            {
                arr[j+1]=arr[j];
                j--
            }
            arr[j+1]=current

        }
        return arr
    }
    console.log(insertionsort([5,4,3,2,1]));