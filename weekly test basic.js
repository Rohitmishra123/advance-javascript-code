let a =123
let rev=0
while(a>0)
{
  let last =a%10
  rev=rev*10+last
  a=parseInt(a/10)

}
console.log(rev)