// const myset=new Set()
// add methood to the set
// myset.add("q");
// myset.add("w");
// myset.add("e");
// myset.add("e");
// myset.add("e");


// delte method

// myset.delete("w") // deletes given value from the set if present

// myset.has("t") // checks whether a values is present in the set and returns a boolean

// myset.clear() // removes all values from the set.


// First way of looping over set

// myset.forEach(function(item){
//     console.log(item)
// })


// second way of looping over set


// const arr=myset.entries()
// for(let item of arr){
//     console.log(item)
// }  


// third way of looping over set


// const newarr=myset.values()
// for(let item of newarr){
//     console.log(item)
// }
// console.log(myset,myset.size)








/// array methods of the set


let arr=[1,2,3,3,4,4,5,5];
// let arr2=new Set(arr)
// let arr2=[...new Set(arr)];
// console.log(typeof([...new Set(arr)]));



arr.forEach(function(item,index){
    console.log(item,index)
})


// console.log(10++"5");