// shallow copy bas top level copy hota hai
// Nested Object me refernce bas jata hai 

// ye shallow ke best example hai isme nested object ke city bas reference pass hua hai

// let users={
//     name:"rohit",
//     age:30,
//   address:{
//     city:"Delhi",
//   }
// }
// let copy={...users};
// copy.address.city="Noida"
// console.log(users.address.city)


// const obj1=
//     {
//     name:"rohit",
//     age:40,
//     city:"delhi",
//        address:{city:"Noida"}
//     };
// let obj2={...obj1};
// obj2.address.city="Mubai";
// console.log(obj1.address.city);



// Deep copy poora object ka naya copy banata hai
// nested object bhi new memory me hota hai
// orginal object bhi safe hota hai

let users={
  name:"rohit",
  age:30,
 address:{
  city:"Delhi",
 }
}
let copy=JSON.parse(JSON.stringify(users));
copy.address.city="Noida";
console.log(copy);
console.log(users.address.city);

// json.parse json string ko wapas javascript object me convert krta hai
// json.stringify javascript object ko json string me convert krta hai
// spread operator array/object ko tod ke individual value bna deta hai
// Rest parameter kya krta hai multiple values ko jod ke ek array bana deta hai