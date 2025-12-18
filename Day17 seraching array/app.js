let arr=[10,20,30,40,50];
let target=101;


function Binarysearch(arr,target){
    let si=0;
    let ei=arr.length-1
    while(si<=ei){
        let mid=Math.floor((si+ei)/2)
        if(arr[mid]==target){
            return mid
        }else if(target>arr[mid]){
            si=mid+1
        }else{
            ei=mid-1
        }
    }
    return -1

}
console.log(Binarysearch(arr,target))