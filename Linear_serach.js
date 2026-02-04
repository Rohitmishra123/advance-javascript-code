let arr=[5,10,15,20,25];
let target=15;
let index=-1;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==target)
    {
        index=i;
        break
    }
}
console.log(index)