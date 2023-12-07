let n = prompt("Enter the Number : ");
function reverseNumber(n){
    let rev=0,rem;
while(n!=0){
    rem = n%10;
    rev = rev*10+rem;
    n=Math.floor(n/10);
}
return rev;
}
console.log("Reverse of number is "+reverseNumber(n));