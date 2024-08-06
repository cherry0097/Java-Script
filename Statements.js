/*
How javascript works:

Creation Phase:

Step 1: Global Object Creation: A global object is created. In JavaScript, everything you declare outside of any function or block becomes a property of the global object. In browsers, this global object is known as window (or globalThis in modern JavaScript).
Setp 2: Memory Setup: Memory is allocated for variables and function references. This creates the memory heap for storing these items.
Step 3: Initialization: Variables are initialized with the value undefined. Functions are also set up, but they are fully defined (not undefined) and ready to be invoked.
Execution Phase:

Code Execution:

Step 1: Variable Assignment: Variables are assigned their values as defined in the code.
Step 2: The JavaScript engine executes the code line by line.

*/

let a; // This will declar a on the temporal dead zone.
var b; // This will declar b on the global scope.
const c = 5; // For constant we need to assign a value.

console.log(`
    The value of a = ${a}
    The value of b = ${b}
    The value of c = ${c}`);
/*
Output:
    The value of a = undefined
    The value of b = undefined
    The value of c = 5
*/
a = 5; // let a = 15 the we will receive an error: SyntaxError: Identifier 'a' has already been declared
var b = 10; // But for var b it didn't happened. Why?

/*

The reason is let and const declears the variable a on a temporal dead zone. Which make a to be delcared on it's own scope.
Hence, if we try to redeclar a again then it will not accept that.
While a is changing the value on the global scope.
*/

console.log(`
    The value of a = ${a}
    The value of b = ${b}
    The value of c = ${c}`);

/*

Output:

    The value of a = 5
    The value of b = 10
    The value of c = 5

*/
let d = "Ratul"

{
    let a = 10
    const c = 100
    var b = 1000
    console.log(`
    The value of a in block= ${a}
    The value of b in block= ${b}
    The value of c in block= ${c}
    The value of d in block= ${d}
        `)
}

console.log(`
    The value of a out of the block= ${a}
    The value of b out of the block= ${b}
    The value of c out of the block= ${c}`);

/*

If we declear any variable inside the block then it will use the value inside the block for let and const and will not change the value on the global scope.
But for var it will change on the global scope
Hoisting: Also, we tried to fetch another value d which is not present inside the block, so it fest the value outside the block. Which is known as hoisting.

*/

let e,f = [5,6];
console.log(e) // Output undefined
console.log(f) // Output [5,6]
/*
Similarly:
let a,b,c = 4;
a and b will undefined and c will have a value 4
*/

