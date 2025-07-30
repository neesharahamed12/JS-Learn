// const { memo } = require("react");

var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);

// # Phase 1 :
// memory
// n:undefined
// square:{
//     var ans = num * num;
//     return ans;
// }
// square2:undefined
// square4:undefined

// # Phase 2 :code execution
// L1- n:2

// L-6 again memory allocation and execution and delete when function returns
// ## memory
// num undefined
// ans undefined
// ## code execution
// num:2
// ans:4

// square2:4
// square4: 16 // again memory allocation and execution and delete when function returns

// the whole global execution context is deleted after the code execution is done

// it is manage by call stack
// *Global execution context