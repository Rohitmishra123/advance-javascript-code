let str="rohit";
let count=0;
for(let i=0;i<str.length;i++){
    let ch=str[i];
  if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u"){
    count++
  }
}
console.log(count)


let nam="rohit";
let rev="";
for(let i=nam.length-1;i>=0;i--){
   rev=rev+nam[i]
}
console.log(rev)