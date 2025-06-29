// scope chain 
// function a(){
//     console.log(b);
//     function c() {
//         console.log(b);
//     }

// }
// var b = 10;
// a();
// console.log(b);


function a(){
    var b = 10;
    console.log(b);
    c();
    function c() {
        console.log(b);
    }

}
a();
// console.log(b);// ReferenceError: b is not defined


// Lexical environment
// first find in local scope, then in outer scope
// if not found, then throw error

// Lexical environment is a concept in JavaScript that refers to the environment in which a function is defined. It consists of the function's scope and the variables that are accessible within that scope. When a function is created, it captures the lexical environment in which it was defined, allowing it to access variables from that environment even when called outside of it.