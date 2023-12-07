//String method.
/**
    1. trim() :
    suppose string have spaces and to remove that space we will use trim.
    it will return the string.
    2.toUpperCase() : convert the string to uppercase.
    3.toLowerCase() : convert the string to the lower case.
    4.slice() : used to slicing the string similar like python.
*/
//string is immutable
let firstName="     Ashish      ";
console.log(firstName.length);
console.log(firstName.trim());
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

//slicing
let newString = firstName.slice(0,4);
console.log(newString); //ashi


// a     s     h     i     s      h
// 0     1     2     3     4      5