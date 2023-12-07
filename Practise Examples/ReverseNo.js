let n = prompt("Enter the Number : ");
let rev=0,rem;
while(n!=0){
    rem = n%10;
    rev = rev*10+rem;
    n=Math.floor(n/10);
}
console.log("Reverse of number is "+rev);