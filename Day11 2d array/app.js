let arr2=[[1,2,3],[4,5,6],[7,8,9]];
for(let i=0;i<arr2.length;i++){
    let str=""
    for(let j=0;j<arr2[i].length;j++){
        str+=arr2[i][j] + " "
    }
    console.log(str)
}


//

// for(let item of arr2){
//     let str=""
//     for(let somthing of item){
//         str+=somthing+" "
//     }
//     console.log(str)
// }



//for avg calculate ex 5 array phle count krega phir divide krega

//  let arr=[10,20,30,40,50];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
    
// }
// let avg=sum/arr.length
// console.log(avg)

// sum of array pure array ko count krega number phir output dega
let arr=[10,20,30,40,50];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
    
}

console.log(sum)

