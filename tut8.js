// let and const 
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// console.log(b); // undefined    
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
// let a = 10;
// var b = 20;
// const c = 30;


// let and const -temporal dead zone
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // undefined    
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
let a = 10;
var b = 20;
const c = 30;
console.log(a); // 10
console.log(b); // 20       
console.log(c); // 30

//temporal dead zone
// console.log(x); // ReferenceError: Cannot access 'x' before initialization
// console.log(x); // this will not work because of the temporal dead zone

let x = 10;



// let a=12; // syntax error: Identifier 'a' has already been declared
// var a=13; // this will work because var is function scoped

// but it work 
var d= 14; // this will work because var is function scoped
var d = 15; // this will work because var is function scoped
console.log(d); // 15

// const z;
// console.log(z); // SyntaxError: Missing initializer in const declaration  


//  const z = 50; // this will work because const is block scoped
//  z=500; // TypeError: Assignment to constant variable


var y;



// type error -const z=50; z=500; // TypeError: Assignment to constant variable
// syntax error - const z;
// refrence error - temporal dead zone



// ------------------------------------
//temporal dead zone :
// Variables declared with let and const are not accessible before their declaration due to the temporal dead zone.
// Uncommenting the following lines will throw ReferenceError:

// console.log(e); // ReferenceError: Cannot access 'e' before initialization
let e = 100;

// console.log(f); // ReferenceError: Cannot access 'f' before initialization
const f = 200;


// ---------------

function a1(){
console.log(b1); // 10
}
let b1=1000
a1();

