
// ye ulta loop chelga aur print krega 
// ***
// **
// *


// let n=prompt("Enter the Number");
// // let i=5
// for(let i=n;i>=1;i--){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str+="* "
//     }
//     console.log(str)
// }

// ye loop sidha chelga print hoga 
// *
// **
// ***
// ****
// *****

// let n=prompt("Enter the number");
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str+="* "
//     }
//     console.log(str)
// }

// print the Number 12345
// 1
//22
//333
//4444
//55555

// let n=prompt("Enter the Number");
// for(let i=0;i<n;i++){
//     let str=""
//     for(let j=0;j<=i;j++){
//         str+=(i+1)
//     }
//     console.log(str)
// }

// print krna hai
// 1
// 12
// 123
// 1234
// 12345


// let n=prompt("Enter the Number");
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str+=j
//     }
//     console.log(str)
// }



// print krna hai reverse number 
// 12345
// 1234
// 123
// 12
// 1

// let n=prompt("Enter the number");
// for(let i=n;i>=1;i--){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str+=j
//     }
//     console.log(str)
// }




// ****
// ***
// **
// * 
let n=prompt("Enter the number");

// for(let i=1;i<=n;i++){
//     let str=""
// for(let j=1;j<=n-i+1;j++){
//     str+="* "
// }
// console.log(str)
// }


// right tringle angle space

//
//    *
//   **
//  ***
// ****

// for(let i=1;i<=n;i++){
//     let str=""
//     for(let j=1;j<=n-i;j++){
//          str+=" "
//     }
//     for(let k=1;k<=i;k++){
//         str+="* "
//     }
//     console.log(str)
// }



// Hollow pattern 
// ****
// *   *
// *   *
// ****

for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=n;j++){
     if(i==1 || i==n || j==1 || j==n){
        str+="*"
     }else{
        str+=" "
     }
    }
    console.log(str)
}
