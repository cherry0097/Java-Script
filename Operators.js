let a = 6
let b = 10
let c = "6"
let d = 6
if (a == c){
    console.log(`The value of a and c is same.
        But the type of a = ${typeof a} and type of c = ${typeof c}`)

}
if (a === c){
    console.log(`The value of a and c same by the type is not.`);
    
}
if (a === d){
    console.log(`The value and type of a and d is same`)
}
if (a != b){
    console.log(`The value of a and b not same.`);
    
}

a == b ? console.log(`Using the turnry operator`) : console.log(`Using the turnry operator a is not equal to b`)

// Bitwise operator:
console.log(5&1) // 0101 AND 0001 = 0001 = 1
console.log(5|1) // 0101 OR 0001 = 0101 = 5
console.log(~5) // NOT 0101 = 1010 = 10 [This example uses 4 bits unsigned. But JavaScript uses 32-bit signed numbers. Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.]
console.log(5^1); // 0101 XOR 0001 = 0100 = 4
console.log(5<<1) // 0101 left shift by 1 = 1010 = 10
console.log(5<<2) // 0101 left shift by 2 = 0100 = 4
console.log(5>>1) // 0101 right shift by 1 = 0010 = 2
console.log(5>>2) // 0101 right shift by 2 = 0001 = 1

//Converting Decimal to Binary:
function dec2bin(dec){
    return (dec >>> 0).toString(2);
  }
let decilamTobinary = dec2bin(23)
console.log(decilamTobinary);

//Converting Binary to Decimal
function bin2dec(bina){
    return parseInt(bina, 2).toString(10);
  }

let binaryTodecimal = bin2dec(decilamTobinary)
console.log(binaryTodecimal)





