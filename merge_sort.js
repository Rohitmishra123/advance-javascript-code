// let arr=[5,4,3];
// let arr1=[2,1,6];
// let merge=[];
// for(let i=0;i<arr.length;i++)
// {
//     merge.push(arr[i])
// }
// for(let i=0;i<arr1.length;i++)
// {
//     merge.push(arr1[i])
// }

// for(let i=0;i<merge.length;i++)
// {
//   for(let j=0;j<merge.length-1-i;j++)
//   {
//     if(merge[j]>merge[j+1])
//     {
//         let temp=merge[j];
//         merge[j]=merge[j+1];
//         merge[j+1]=temp
//     }
//   }
// }
//  console.log(merge)




let arr=[5,4,3];
let arr1=[1,2,6];
let merege=[];

for(let i=0;i<arr.length;i++)
{
  merege.push(arr[i])
}
for(let i=0;i<arr1.length;i++)
{
  merege.push(arr1[i])
}
console.log(merege)

for(let i=0;i<merege.length-1;i++)
{
  for(let j=0;j<merege.length-1-i;j++)
  {
    if(merege[j]>merege[j+1])
    {
      let temp=merege[j];
      merege[j]=merege[j+1];
      merege[j+1]=temp
    }
  }
}
 console.log(merege)