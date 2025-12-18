let str="abc_def_ghi_ijk";
let ans=[str[0]];
for(let i=1;i<str.length;i++)
    {
    if(str[i]=="_")
    {

    }
    else
    {
        if(str[i-1]=="_")
        {
            ans.push(str[i].toUpperCase());
        }
        else
        {
            ans.push(str[i])
        }
    }
}
console.log(ans.join(""));
