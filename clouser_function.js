// outer function  kaa varable access kr skte hai inner mai
// But inner function kaa varable outer function me nhi kr skate hai
// isko bolte hai clousers function + lexcial scope

// ye code run krega kyu hm access kr skte hai outer varables ko inner function me


// function outer()
// {
//     let age=20;

//   function inner()
//   {
//     console.log(age)
//   }  
//   inner()
// }
// outer()

// output 20


// ye code me error ayega refernce error kyu ki 
// hm inner varable ko access kr rhe hai outer function me isliye

// function outer()
// {
//     console.log(age);

//   function inner()
//   {
//     let age=30
//   }  
//   inner()
// }
// outer()



// function ke bahar access kr skte hai isko bolte hai lexcial scope

// let age=20;
// function outer()
// {
//     function inner()
//     {
//         console.log(age)
//     }
//     inner()
// }
// outer()

// ye method bhut importent hai return wala
// ye wale code me sirf function ka reference pass ho rha hai
// tu function ko call nhi kr rha hai

// function createcounter()
// {
//     function increment()
//     {
//         console.log("I am rohit")
//     }
//     return increment
// }
// const counter=createcounter()
// console.log(counter)

//output simple ayega iska [function:increment]


// ye code chlega aur kyu ki hmne return me increment function call kiya hai();

function createcounter()
{
    function increment()
    {
        console.log("I am rohit")
    }
    return increment()
}
const counter=createcounter();
console.log(counter)

// simple output ayega iska I am rohit