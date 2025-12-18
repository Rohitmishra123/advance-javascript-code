// let arr1=[1,2,3,5,7];
// let arr2=[9,11,13,14,15,16];


function mergetwoSortedarray(a1,a2){
    let ans=[];
    let i=0;
    let j=0;

    while(i<a1.length && j<a2.length)
    {
        if(a1[i]<a2[j])
        {
            ans.push(a1[i])
            i++
        }
        else
            {
         ans.push(a2[j])
         j++
        }
    }
    while(i<a1.length)
    {
        ans.push(a1[i])
        i++
    }
        while(j<a2.length)
    {
        ans.push(a2[j])
        j++
    }
    return ans
}
// console.log(mergetwoSortedarray(arr1,arr2))

function mergesort(arr)
{
    if(arr.length==1)
    {
        return arr
    }
    let mid=Math.floor(arr.length/2)-1
    let left=mergesort(arr.slice(0,mid+1));
    let right=mergesort(arr.slice(mid+1));
    return mergetwoSortedarray(left,right)
}

console.log(mergesort([99,55,1,60,-10,100,200,65,70]))