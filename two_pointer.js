function ispalidrome(str)
{
    let left=0;
    let rigth=str.length-1
    while(left<rigth)
    {
        if(str[left] !==str[rigth])
        {
            return false;

            
        }
        left++;
        rigth--;
        
    }
    return true
}
console.log(ispalidrome("madam"))