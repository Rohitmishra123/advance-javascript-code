//Map method  jab apko array ke har ek element par koi kaam krna ho
//aur ek naya array chaiye ho tab map ka use hote hai
// purne elements ko naye elements mein "map" badal deta hai

// let arr=[2,4,5,6,8,7,9];

// let doubled=arr.map((item)=>
// {
//     return item*2
// })
// console.log(doubled)



// only first word ko bs capital krna 

// let arr=["hello","javascript","react"];
// let ans=arr.map(x=> x[0].toUpperCase()+ x.slice(1));
// console.log(ans)

// let users=[
//     {name:"rohit",amount:2000},
//     {name:"mohit",amount:4000},
//     {name:"sohit",amount:6000},
// ];
// let ans=users.map(x=> `${x.name}-${x.amount}`);
// console.log(ans)


// har 1 element per sqaure krna hai 10 ko 100 krna hai 20 ko 400 aise he

let arr=[10,20,30,40,50];
let ans=arr.map(x=> x**2);
console.log(ans)