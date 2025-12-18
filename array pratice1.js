let arr=[10,20,30,40,50];
let max=0;
for(let i=0;i<arr.length;i++){
 if(arr[i]>max){
    arr[i]=max
 }

}
console.log(arr);