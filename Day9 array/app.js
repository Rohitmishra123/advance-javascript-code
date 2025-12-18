// array

// array is a list /collection of data of a array
// length total numbers of elements in array is it length calls 0 called size
// array are zero index that means start at 0

// let arr=[1,2,3,4,5]
// console.log(arr.length)

// let arr=[1,'a',"Hello",true,];   // in js arrays are hetrogenious
// console.log(arr);
// console.log(arr.length);   //array length is the total no on element present inside an array
// console.log(typeof(arr.length));
// console.log(typeof(arr[0]));
// console.log(typeof(arr[1]));
// console.log(typeof(arr[2]));
// console.log(typeof(arr[3]));
// console.log(arr[arr.length-1]);   // in order to access an element


//accessimg the element from the array
let arr=[1,2,3,4,5,6,7,8,9,10]

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

// print the reverse array


for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
}

// For of Loop

for(let item of arr){
    console.log(item);
}