// m1 of defining function
function dance(val){
    console.log(` dancer ${val}`);
}
dance("tsn");
dance("hggu");
dance("butki");

// m2 of defining function aka function expression
let val = function (c){
    console.log(c*68);
}
val(5);
// m3 arrow function

let name = (c)=>{
    console.log(c*68);
}
name(5);


// | Feature       | Normal Function | Arrow Function            |
// | ------------- | --------------- | ------------------------- |
// | Syntax        | Longer          | Shorter                   |
// | `this`        | Own `this`      | Inherits `this`           |
// | `arguments`   | Available       | Not available             |
// | Can use `new` | Yes             | No                        |
// | Best Use      | Object methods  | Short callbacks/functions |

// rest ...

function ram(a,b, ...val){
    console.log(a,b, val)
}
ram(1,2,3,4,5,6,7)