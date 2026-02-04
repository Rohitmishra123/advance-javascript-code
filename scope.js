// var function scoped hota hai -- function ke ander kahin bhi access kr skte hai
// let and const blocked scoped hota hai-- sirf { } ke ander he access kr skte hai


// ye sirf function ke ander chl skta hai

// function outer()
// {
//     if(true)
//     {
//         var a=10
//     }
//     console.log(a)
// }
// outer()


/// ye code sirf block ke ander he chelga 
// ye nhi to refernce error ayega

// function outer()
// {
//     if(true)
//     {
//         let a=10;
//     }
//     console.log(a)
// }
// outer()


// ye hai block scoped jo sirf block ke ander he chelga 

function outer()
{
    if(true)
    {
        let a=10;
        console.log(a)
    }

}
outer()