// Remove the duplicate number in this array using set method
let arr=[1,2,3,4,1,2,3,5];
let uniqe=[...new Set(arr)];
console.log(uniqe)

// agar array me duplicate hai to true print krna hai
// is array me 2 do bar aya hai 
// array ki length hai 6 
// but set method duplicate add nhi krta hai to last wale 2 ko remove kr dega wo

function findduplicate(arr1)
{
    return arr1.length !==new Set(arr1).size
}
console.log(findduplicate([1,2,3,4,5,2]));

// count unique Elements 
// set se method se hmm count krunga abhi

let arr2=[10,20,30,40,10,20,50];
let uniquecount=new Set(arr2).size
console.log(uniquecount)
