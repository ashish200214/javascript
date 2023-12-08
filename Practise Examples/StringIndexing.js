//program which return the particular character present in string by taking input from user.
function getIndex(str,n){
    return str[n];
}

str=prompt("Enter the String : ");
n=prompt("enter the index you want to print");

console.log("The character at index ",n," is ",getIndex(str,n));
