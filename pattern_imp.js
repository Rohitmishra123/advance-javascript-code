// Hollow Square pattern;

// let n=5;
// for(let i=1;i<=n;i++)
// {
//     let str="";
//   for(let j=1;j<=n;j++)
//   {
//     if(i==1 || i==n || j==1 || j==n)
    
//         str+="*"
//     else
//         str+=" "
//   }
//   console.log(str)
// }

// Hollow payramid pattern

// let n1=5;
// for(let i=1;i<=n1;i++)
// {
//     let str="";
//  for(let j=1;j<=n1-i;j++)
 
//     str+=" ";
//   for(let j=1;j<=2*i-1;j++)
//   {
//     if(i==n1 || j==1 || j==2*i-1)
//         str+="*";
//       else
//         str+=" "
//   }
//   console.log(str)
 
// }

// number to reversed print krn
// let n=5;
// for(let i=1;i<=n;i++)
// {
//   let str="";
//   for(let j=n-i+1;j<=n;j++)
//   {
//     str+=j
//   }
//   console.log(str)
// }


// Right aligned pattern = phle space,phir star

let n=5;
for(let i=1;i<=n;i++)
{
  let str="";

 for(let j=1;j<=n-i;j++)
  {
    str+=" "
  } 
  for(let k=1;k<=i;k++)
  {
    str+="*"
  }
  console.log(str)
}
