// let arr=[1,2,3,4,5,6];
// let arr2=[7,8,9,10];
// concats arr2 in arr1 and returns a new copy of the data
// let val2=arr.concat(arr2);


// joins all the elements of the array with the provided sperator and returns a string

// let val4=arr.join("*");
// console.log(val4)

// returns elements at the given index
// let val5=arr.at(6)
// console.log(val5)

//cheks if a particular elements is present in the array returns boolean

// let val3=arr.includes(-1);
// console.log(val3)

// let arr4=[1,2,3,4,5,6,101];
// console.log()

// slice
// let arr3=[1,2,3,4,5,6,7,8,9,10];
// let val=arr3.slice(0,5);
// let val=arr3.slice(3,7);
// let val=arr3.slice(4)
// let val=arr3.slice(-5,-5)
// console.log(val)


// splice
// negative index is not possible

// let arr4=[11,12,13,14,15,16];
// // let val6=arr4.splice(1,3);
// // let val6=arr4.splice(0,2)
// // console.log(4)
// let val6=arr4.splice(2,3,true,false,99,100,101)
// console.log(val6);
// console.log(arr4)


// flat removes to single level of indexing

let arr=[[1,2,3],[4,5,6],[7,8,9],[11,12,13,14,[101,102,103,104]]]
let flatarr=arr.flat(Infinity)
console.log(flatarr)
console.log(arr)
