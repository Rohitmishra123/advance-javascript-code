//


let n=prompt("Enter the number")
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str+="* "
//     }
//     console.log(str)
// }



///


// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//         if(j==1 || i==n || j==i){
//             str+="* "
//         }else{
//             str+=" "
//         }
//     }
//     console.log(str)
// }


//     *
//   * *
//  *  *
// *    *
// * * * *


for(let i=1;i<=n;i++){
    let str=""

    for(let j=1;j<=i;j++){
        str+=" ";
    }
    for(let k=1;k<=i;k++){
        if(k==1 || k==i || k==n){
            str+="*"
        }else{
            str+=" ";
        }
    }
    console.log(str);

}