// shallow copy

// let obj={
//     name:"xyz",
//     age:22
// }

//let obj2=obj// not good , shares reference, don't use

// shallow copy

// let obj2={...obj}
// obj2.name="rohit"
// console.log(obj);
// console.log(obj2)


// nested object shallow copy be made a nested object

// let user1={
//     name:"xyz",
//     age:22,
//     address:{
//         city:"Delhi",
//         country:"India",
//     },
//     sayHi:()=>{
//         console.log("Hello")
//     }
// }

// let user2=user1// dont use

// let user2={...user1}
// console.log(user1);
// console.log(user2);
// user2.name="rohit";
// user2.address.city="mumbai";
// console.log(user1);
// console.log(user2)


// Json Method


// let arr=[{name:"xyz"},{name:"abc"},{name:"klm"}]
// let dataFromBackend=JSON.stringify(arr)
// let originalobject=JSON.parse(dataFromBackend);
// console.log(originalobject);
// console.log(originalobject[0].name);


// deep copy with nested object
// won't work

// let user1={
//    name:"xyz",
//    age:22,
//    address:{
//     city:"Delhi",
//     country:"India"
//    },
//    sayhi:function(){
//     console.log("Hello")
//    }

// }

// let jsonstr=JSON.stringify(user1);
// let user2=JSON.parse(jsonstr);
// console.log(user1);
// console.log(user2);



/// structured clone in deep copy for functions

let user1={
    name:"xyz",
    age:30,
    address:{
        city:"Delhi",
        country:"India",
    },
    }

let user2=structuredClone(user1);
console.log(user1);
console.log(user2);


user2.address.city="pune";


console.log(user1);
console.log(user2);




