//Pattern print the abcd
// A
// BB
// CCC
// DDDD


// let a=prompt("Enter the number");
// for(let i=1;i<=n;i++){
//     let str=""
//     for(let j=1;j<=i;j++){
//         str+=String.fromCharCode(64+i)
//     }
//     console.log(str)
// }


// print the number 
 // 1
 // 2 3
 // 3 4 5
 // 4 5 6 7
 // 5 6 7 8

//  for(let i=1;i<=n;i++){
//     let str=""
//     let temp=i;
//     for(let j=1;j<=i+i;j++){
//         str+=temp
//         temp++
//     }
//     console.log(str);
//  }



 //print the alphabet 
 // a
 // bc
 // cde
 /// efghi

//  for(let i=1; i<=n; i++){
//     let str="";
//     let temp=i;
//     for(let j=1; j<=i; j++){
//       str+=String.fromCharCode(temp+64)
//       temp++
//       if(temp>26){
//         temp=1
//       }
//     }
//     console.log(str)
//   }


// print krna hai
// 1
// 2 3
//  4 5 6
//  7 8 9 10


// let n = 4; 
// let num = 1;

// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += num;
//     num++; 
//   }
//   console.log(str);
// }


// Print the char
// a
// B C
// D E F
// G H I J


//  let n=4; 
// let temp=1;
// for(let i=1;i<=n;i++){
//     let str=" ";
//     for(let j=1;j<=i;j++){
//         str+=String.fromCharCode(temp+64)+" "
//         temp++
//     }
//     console.log(str)
// }



// print the hollow char
 
//  let n=6; 
// let temp=1;
// for(let i=1;i<=n;i++){
//     let str=" ";
//     for(let j=1;j<=i;j++){
//         if(j==1 || i==n || i==j){
//          str+=String.fromCharCode(temp+64)+" "
        
//         }else{
//             str+=" "
//         }
//         temp++
       
//     }
//     console.log(str)
// }



let n=prompt("Enter the number");
for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=n;j++){
        if(i==1 || i==n || j==1 || j==n){
            str+="* "
        }else{
            str+=" "
        }
    }
    console.log(str)
}