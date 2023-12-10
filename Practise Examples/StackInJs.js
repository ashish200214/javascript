let stack = [10, 20, 30, 40, 50];
console.log(stack);
stack.push(60);
stack.push(70);
console.log(stack);

console.log("Poped element is ", stack.pop());
console.log("Poped element is ", stack.pop());
console.log(stack);

//add data into starting of the array then use unshift() method
stack.unshift(0);
console.log(stack);

//shift() is used to remove the starting of the array.
console.log(stack.shift());
//push and pop is inbuild method to perform on the array in javascript.

//push and pop is faster than shift and unshift.
