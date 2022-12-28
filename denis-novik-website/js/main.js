let a = 1;
let b = 2;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a);; // => 2
console.log(b);; // => 1