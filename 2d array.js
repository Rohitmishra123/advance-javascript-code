// example for 2d array
//[1,2,3],
//[4,5,6],
//[7,8,9],

let arr=[
    [1,2,3],
    [4,5,6],
     [7,8,9],
]

// for(let i=0;i<arr.length;i++){
//         console.log(arr[i].slice().reverse().join(" "));
//      }




     // print alternate manner zig and zag
     // first row left to right
     // second row right to left
     // third row again left to right

     let arr1=[
        [1,2,3],
        [4,5,6],
        [7,8,9],
    ]
    let result=[]
  for(let i=0;i<arr.length;i++){
    if(i%2==0){
        for(let j=0;j<arr[i].length;j++){
        result.push(arr[i][j]);
        }
    }else{
        for(let j=arr[i].length-1;j>=0;j--){
            result.push(arr[i][j]);
        }
    }
  }
console.log(result.join(" "));
        
