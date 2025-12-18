// Linear Serach code
let arr=[5,10,15,20,25,30,100,30]
let target=30;
function linearsearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1
}
console.log(linearsearch(arr,target))

//
let arr1="thggolu"
let target1="g";
function linearsearch(arr1,target1){
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]==target1){
            return i
        }
    }
    return -1
}
console.log(linearsearch(arr1,target1))

// Binary serach
// array should be sorted

function Binarysearch(arr,target){
    let si=0;
    let ei=arr.length-1;
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
console.log(Binarysearch([1,2,3,4,5,6,7,8,9]))                                                       