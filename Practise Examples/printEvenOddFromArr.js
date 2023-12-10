function printEvenOdd(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            console.log(arr[i]," is even number");
        }
        else{
            console.log(arr[i]," is odd number");
        }

    }

}

let intArr=[];
let size = +prompt("Enter the size of array : ");

for(let i=0;i<size;i++){
    intArr[i]=+prompt("Enter Element : ");

}

printEvenOdd(intArr);