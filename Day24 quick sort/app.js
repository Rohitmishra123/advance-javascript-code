function quicksort(arr){
    if(arr.length ==1 || arr.length ==0){
        return arr
    }
    let pivot = arr[arr.length-1];
    let sm=[];
    let lg =[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            sm.push(arr[i])
        }else{
            lg.push(arr[i])
        }
    }
    let sortedsm=quicksort(sm);
    let sortedlg=quicksort(lg);
    return [...sortedsm, pivot, ...sortedlg]
}
console.log(quicksort([1,2,3,4,5,6]));