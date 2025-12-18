// let arr=[10,20,30,40,50];
// let target=40;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==target){
//         console.log(i)
//     }
   
// }


// function linear operations

// let arr=[10,20,30,40,50];
// let target=60;
// function linearsearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==target){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearsearch(arr,target))

// find maximum element

let arr=[5,7,8,10];

function linearsearch(arr){
    let max=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
console.log(linearsearch(arr))


// find the minimum number in linear serach

let arr1=[5,10,35,40];
function findmin(arr1){
    let min=arr1[0];
    for(let i=1;i<arr1.length;i++){
        if(arr[i]<min){
            arr[i]=min
        }
    }
    return min
}
console.log(findmin(arr1))


// find the occourneces the linear search
// repeat the number of array

let arr2=[1,2,2,3,4,5,2];
let reap=2;
function findoccurence(arr2,reap){
    let count=0;
    for(let i=0;i<arr2.length;i++){
        if(arr2[i]==reap){
            count++
        }
    }
    return count;
}
console.log(findoccurence(arr2,reap));
