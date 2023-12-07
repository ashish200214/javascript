//typeOf operator
//used to find the type of the data or data type.
let a = 10;
let b = 10.5;
let c = "ashish";

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//convert number to string.
// 22 -> "22"
let age=22;
console.log(typeof age);
age=age+" "
console.log(typeof age);

//convert string to number
let myStr=32;
console.log(typeof myStr);
myStr=+"32";
//just add + before the string to convert string to number.
console.log(typeof myStr);

let abc = "18";
age=Number(abc);
console.log(typeof age);


//string concatenation
let string1 = "ashish";
let string2 = "gavali";

let fullName = string1+" "+string2;
console.log(fullName);

//template string
let age1 = 22;
let firstName="ashish";

//"my name is ashish and my age is 22"
// let aboutMe = "My Name is "+firstName+" and my age is "+age1;
// console.log(aboutMe);

let aboutMe = 'my name is ${firstName} and my age is ${age1}';

console.log(aboutMe);

