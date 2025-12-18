let age=18
switch(age>=18)
{
    case true:
    console.log("adult")
    break;
    case false:
    console.log("child")
    break;
}

let day=100
switch(day)
{
    case 1:
        console.log("Monday");
        break;
        case 2:
        console.log("Tuesday");
        break;
        case 3:
        console.log("Wednesday");
        break;
        case 4:
        console.log("thursday");
        break;
        case 5:
        console.log("friday");
        break;
        case 6:
        console.log("sturday");
        break;
        case 7:
        console.log("sunday");
        break;
        default:
            console.log("Invaild Output")

}


// number odd or even

// let num=9
// switch(num%2==0){
//     case true:
//         console.log("even number")
//         break;
//         case false :
//             console.log("odd number")
//             break;
// }
 

// let number=4
// switch(number%2==0)
// {
//     case true:
        
// }

let month=4
switch(month)
{
    case 1:
    case 4:
    case 6 :
    case 8 :       
        console.log(31);
        break;
        case 2:
        console.log(28);
        break;
        case 3:
        console.log(30);
        break;
        // case 4:
        // console.log(31);
        // break;
        case 5:
        console.log(30);
        break;
        // case 6:
        // console.log(31);
        // break;
        case 7:
        console.log(30);
        break;
        // case 8:
        // console.log(31);
        case 9:
        console.log(30);
        break;
        case 10:
        console.log(31);
        break;  
        case 11:
        console.log(30);
        break;
        case 12:
        console.log(31);
        break;
        
}

let mon =4
switch(mon){
    case 1 || 3 || 5 || 7 || 8 || 10 || 12:
        console.log(31);
        break;
     case 2 || 4 || 6:
        console.log(30);
        break

}
