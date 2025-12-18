// gerbage collector

// why are string immutable 
// suppose

// let a="abc";
// let b="abc"
//

// stack                    heap

// 2k                       (2k)"xyz"
// a
//[2k]
// b

// js does not make similar heap in order to percent memory from bulding up
// now lets assume strings are immutable

// thats is why strings are immutable
// garbage collector

// let str="VibhorJain"
// let val=str.slice(3)
// let val2=str.slice(3,7)
// console.log(val);
// console.log(val2);
// //Here no change will be made because string is immutable that is we can't make any changes in string
// str[0]="H"
// console.log(str)
// let str1="22"
// let str2="22"
// str1="234567"
// console.log(str1)
// console.log(str2)
// // js does not make similar strings in heap in order to prevent memory from bulking up
// //string method
// console.log(str.includes("V"))
// console.log(str.includes("v"))
// console.log(str.includes("vih"))
// let str3="my name is Vibhor jain"
// console.log(str3.includes("m",6))
// console.log(str3.concat("i am a good by"))
// console.log(str3.startsWith("jshdjsh"))
// console.log(str3.endsWith("jshdjsh"))
// console.log(str3.indexOf("m"))
// console.log(str3.indexOf("m",1))
// let msg="     my name is Vibhor jain"
// console.log(msg)
// console.log(msg.trim())
// console.log(msg.trimStart())
// console.log(msg.replace(" ",""))









