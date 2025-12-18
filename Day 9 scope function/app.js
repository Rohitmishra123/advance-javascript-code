// global scope
// global scope only declared all the variales


var global = 1
let globalB=2
const globalC=3


console.log(global);
console.log(globalB);
console.log(globalC);

// Block Scope
// let and const only declared inside the block where we can not declred out of the block scope

{

var blocka=1
let blockB=2
const blockC=3

console.log(blocka);
console.log(blockB);
console.log(blockC)

}

// only var variales are run and given  the output 1 because of var or global scope and let and const are block scope

console.log(blocka);
// console.log(blockB);
// console.log(blockC)



// var only declred because of var is global scope

if(true){
    
    var ifblocka=1;
    let ifblockB=2;
    const ifblockC=3;
}
console.log(ifblocka);
// console.log(ifblockB);
// console.log(ifblockC);




// Functional Scope

function xyz(){
    var functiona=1
    let functionb=2
    const functionc=3

    console.log(functiona);
    console.log(functionb);
    console.log(functionc);
}
xyz()