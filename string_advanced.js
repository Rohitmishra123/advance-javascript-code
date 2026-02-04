// string ke importent ke question 
// alphabet alg print kro and 
// number ko alg print kro and 
// special char ko alg print krne ko

// let str="12hello@!#45";
// let number="";
// let name="";
// let special="";
// for(let i=0;i<str.length;i++)
// {
//     let ch=str[i];
//   if(ch>="0" && ch<="9")
//   {
//     number+=ch
//   }else if(ch>="a" && ch<="z" || ch>="A" && ch<="Z")
//   {
//     name+=ch
//   }
//   else
//   {
//     special+=ch
//   }
// }
// console.log(number);
// console.log(name);
// console.log(special)


// agar word ko uppercase krna ho to aur usko alg print krna hai to ye code rhega 
// Agr word UppercAse me ho usko lowercAse krnA hAi to 

// let str="hello";
// let uppercase="";
// for(let i=0;i<str.length;i++)
// {
//     let ch=str[i];
//     if(ch>="a" && ch<="z" || ch>="A" && ch<="Z")
//     {
//         uppercase+=ch.toUpperCase();
        

//     }
// }
// console.log(uppercase);


//"123" should print empty string output 123;

// let str="123";
// let num=""
// for(let i=0;i<str.length;i++)
// {
//     let ch=str[i];
//     if(ch>="0" && ch<="9")
//     {
//         num+=ch
//     }
// }
// console.log(num)

// total count btna hai string ke;

// let str="abc123";
// let totalcount="";
// for(let i=0;i<str.length;i++)
// {
//     totalcount++
// }

// console.log(totalcount)



// count words kitne words hai string me

// let str="I Love Javascript and codeing";
// let countwords=1;
// for(let i=0;i<str.length;i++)
// {
//     if(str[i]===" ")
//     {
//         countwords++
//     }
// }
// console.log(countwords)



// space count krna hai kitne space hai string me;
// let str="i love my  self";
// let countspace=0;
// for(let i=0;i<str.length;i++)
// {
//     let ch=str[i];
//     if(ch==" ")
//     {
//         countspace++
//     }
// }
// console.log(countspace)


// duplicate words ko remove kro 
// let str="aabrrohit";
// let duplicate="";
// for(let i=0;i<str.length;i++)
// {
//     let ch=str[i];
//     if(!duplicate.includes(ch))
//     {
//         duplicate+=ch
//     }
// }
// console.log(duplicate)

// Uppercase and Lowecase count kro string me se;

// let str="AbCdE";
// let uppercase=0;
// let lowercase=0;
// for(let i=0;i<str.length;i++)
// {
//     let ch=str[i];
//     if(ch>="a" && ch<="z")
//     {
//         lowercase++
//     }else if(ch>="A" && ch<="Z")
//     {
//         uppercase++
//     }
// }
// console.log(uppercase)
// console.log(lowercase)


// words count krna hai ki 1 string me kitne words hai

let str1="Hello How are you rohit";
let count=1;
for(let i=0;i<str1.length;i++)
{
    if(str1[i]==" ")
    {
        count++
    }
}
console.log(count)

// count krna hai word ki kitne baar aya hai 1 word pure string mai frequeny niklna hai

let str="rohit mishra";
let obj={};
for(let i=0;i<str.length;i++)
{
    let char=str[i];
    if(char !=="")
    {
        if(obj[char])
        {
            obj[char]++
        }else{
            obj[char]=1
        }
    }
}
console.log(obj)