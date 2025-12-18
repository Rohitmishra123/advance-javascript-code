let str="abc";
let arr=["ab","abd","cacb","cabef"];
let ans=0;
for(let item of arr){
    let isGoodstirng=true;
    for(let i=0;i<item.length;i++){
    if(!str.includes(item[i])){
        isGoodstirng=false;
        break;

    }

}
if(isGoodstirng==true){
    ans++
}
}
console.log(ans)