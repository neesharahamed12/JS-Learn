// Block Scope and shadowing in js 

// {
//     var a = 10;
//     console.log(a); // 10
// }

// if(true) true;
// if(true) {
//     let a = 20; // block scoped variable
//     console.log(a); // 20
// }

//need block to combine multiple statements

{
    var  x = 10;
    let y = 20; // block scoped variable
    const z = 30; // block scoped variable

    console.log(x); // 10
    console.log(y); // 20       
    console.log(z); // 30
}
// console.log(x); // 10
// console.log(y); // ReferenceError: y is not defined      
// console.log(z); // ReferenceError: z is not defined




// shadow variables 
var a1 = 10;
let b1 = 100;
const c1 = 1000;
{
    var a1 = 20; // this will shadow the outer variable
   let b1 = 200; // this will not shadow the outer variable
    const c1 = 2000; // this will not shadow the outer variable
    console.log(a1); // 20
    console.log(b1); // 200
    console.log(c1); // 2000
}

function shadowTest() {
    var a1 = 30; // this will shadow the outer variable
    let b1 = 300; // this will not shadow the outer variable
    const c1 = 3000; // this will not shadow the outer variable
    console.log(a1); // 30
    console.log(b1); // 300
    console.log(c1); // 3000
}

shadowTest();

console.log(a1); // 20
console.log(b1); // 100
console.log(c1); // 1000




// illigal shadowing

let n = 3; 
{
    // var n = 4; // illigal shadowing, this will throw an error
}

var m= 5;
{
    let m = 6; // legal shadowing, this will not throw an error
    console.log(m); // 6
}
console.log(m); // 6



const p = 7;
{
    const p = 8; 
    {
        const p = 8; 
        {
            const p = 9; // this will not shadow the outer variable
            console.log(p); // 9
        }
    console.log(p); // 8
    }
}
