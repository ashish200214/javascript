let n = prompt("Enter the Number : ");
let rev=0,rem,original;
original=n;

while(n!=0){
    rem = n%10;
    rev = rev*10+rem;
    n = Math.floor(n/10);
}

if(rev==original){
    console.log("Number is Palindrome");
}
else{
    console.log("Number is Not Palindrome");
}