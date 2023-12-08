function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                let temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
                
            }
        }
    }
    return arr;
}

let intArr=[];
let size = +prompt("Enter the size of array : ");

for(let i=0;i<size;i++){
    intArr[i] = +prompt(" Enter Element :");
}

console.log("Before Sorting : - ",intArr);
console.log("After Sorting : - ",bubbleSort(intArr));
