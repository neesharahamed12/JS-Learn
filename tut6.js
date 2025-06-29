console.log(a); // undefined
var a ;
a =7;
a=undefined; // reassigning a to undefined
// console.log(b); // not defined
console.log(a); // undefined
if(a === undefined) {
    console.log("a is undefined");
}else{
    console.log("a is defined");
}
//loselly /weakly typed language
var x = 10;
console.log(x); // 10
var x = "Hello";    
console.log(x); // Hello
