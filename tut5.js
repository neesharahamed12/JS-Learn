//sortest js program is empty file

// window 
// this



var a = 10;
function b() {
    var x = 20;
    console.log(window.a); // 10
    console.log(this.a); // 10
    console.log(a); // 10

    console.log(window.x); // undefined
    console.log(this.x); // undefined
    console.log(x); // 10
}
b();

console.log(window.a); // 10
console.log(this.a); // 10
console.log(a); // 10
