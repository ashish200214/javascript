"use strict"; //javascript strictly follows rules.
//intro to variable
//variables can store some information
//we can use that information later
//we can change that information later

//declare a variable
var firstName="Ashish";
var lastName=" Gavali";

//use a variable
//variable is case sensitive
//we can change this value this is why it is var.
//if "use strict" mode is on then variable must be declare using var otherwise it will give error.
//if "use strict" mode not used then we can create variable without using var keyword.


 
var fullName = firstName+lastName;
console.log(fullName);

//let keyword
let number = 10;
console.log(number);

//let vs var
/*
var variable can be re declared.
let variable can be declare only once.

Ex. var firstName="ashish";
    var firstName="gavali";
    allowed...

    let firstName="ashish";
    let firstName="gavali";
    not allowed...

    
*/ 
//declare constants
/**
 * syntax : const variableName = value;
 * once it is initialized with value reinitiialization is not possible.
 * it is like final keyword in java used with variable.
 * ex. 
 * const pi = 3.14;
 * pi=3.15//error not possible
 */

var c;
console.log(typeof c); //undefined
var n = null;
console.log(typeof n); //null



