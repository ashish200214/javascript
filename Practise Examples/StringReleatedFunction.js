//string inbuild function which return the length of string
function findLengthOfString(str){
    return str.length;
}

//string inbuild function which return the lowerCase of the passed string
function getLowerCase(str){
    return str.toLowerCase();
}

//string inbuild function which return the upperCase of the passed string
function getUpperCase(str){
    return str.toUpperCase();
}

//string inbuild function which return the slicing of the string by passing initial value and end value
//like "ashish".slice(2,5)  =>his

function getSlice(str,start,end){
    return str.slice(start,end);
}

//

console.log(findLengthOfString("ashish"));
console.log(getLowerCase("ASHISH"));
console.log(getUpperCase("ashish"))
console.log(getSlice("ashish",2,5))   //=>his
