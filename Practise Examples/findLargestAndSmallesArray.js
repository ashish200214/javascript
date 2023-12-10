function getSmallestFromArr(arr){
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}

function getLargestFromArr(arr){
    let max = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

let intArr=[];
let size = +prompt("Enter the size of array : ");
for(let i=0;i<size;i++){
    intArr[i]=+prompt("Enter Element : ");
}

console.log("The smallest Number From the array is ",getSmallestFromArr(intArr));
console.log("The largest Number From the array is ",getLargestFromArr(intArr));