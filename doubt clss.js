  // output
  //  1
  //  01
  //  010
 //   1010
//    10101


let n=5
let temp=1;
for(let i=1;i<=n;i++){
    let str=" "
    for(let j=1;j<=i;j++){
     str+=temp
     if(temp==1){
        temp=0
     }else{
        temp=1
     }
    }
   console.log(str);
}


let str=5;
let tem=1;
for(let i=1;i<=str;i++){
    let str=" ";
    for(let j=1;j<=i;j++){
        str+=tem
        if(tem==1){
        tem=0
        }else{
            temp=0
        }
    }
    console.log(str)
}



