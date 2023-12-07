let n = prompt("Enter the number to find factorial : ");
let fact = 1;
for(let i=1;i<=n;i++){
    fact*=i;
}
console.log("Factorial is ",fact);