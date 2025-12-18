//break and continue difference
//break stops the excution of immedidate stop


let i=1
while(i<=100){
    if(i==6){
        break
    }
    console.log(i)
    i++
}

while(i<=100){
    if(i==3){
        i++
        continue
    }
    console.log(i)
    i++
}