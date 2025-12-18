// let obj={}// creating an object

// let obj2={ //
//   name:"rohit",

//   age:30
// }
// // console.log(obj2)

// let obj3={
//     name:"mishra",
//     age:35,
// }
// // console.log(obj3)


// // accsssing values of an object
// console.log(obj3.name)//dot operator
// console.log(obj3["age"])// must be passed as a string or else will be targetd as a variable


// let obj4={
//     name:"rohan",
//     legs:4,
// }
// //adding properties to an obeject
// obj4.fur=true;
// obj4["color"]="orange";
// console.log(obj4)


// // delete method
// let obj5={
//     key:"value",
//     age:45,
// }
// delete(obj5.key); // delete the key pair values
// delete(obj5["age"])
// console.log(obj5) /// undefined






//nested obj

// let outerobj={
//     name:"divya",
//     age:40,
    
    // nested obj
//     address:{
//         city:"Delhi",
//         country:"India",

//     },
//     favcolor:["red","blue","black","white"],
//     sayhello:()=>{
//      console.log("Hello sir")
//     },
//     ishandsome:false

// }
// console.log(outerobj.name);
// console.log(outerobj.age);
// console.log(outerobj.ishandsome);
// console.log(outerobj.address.city);
// console.log(outerobj.address.country);
// console.log(outerobj.favcolor[2]);
// outerobj.sayhello()



// // for in method in object

// let demobj={
//     k1:"v1",
//     k2:"v2",
//     k3:"v3",
//     k4:"v4"
// }
// for(let item in demobj){
//     console.log(item,demobj[item])
// }


//optional changing




var a=10;
function rohit(){
    var b=20;
    console.log(b)
}
rohit();
console.log(a)
