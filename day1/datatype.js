let x = 9;
let y = 3;

console.log("x + y =", x + y) ;
console.log("x - y = ", x - y);

const pi = 3.14; // can't be redeclared or reassigned
// console.log(pi += 4); not possible

let string = "harshit";
console.log(string);
console.log(string += " shiva");


// const string2 = "harshit";
// console.log(string2);
// console.log(string2 += " shiva"); 

//bigint
let a = 1234567890123456789012345n;
let b = BigInt("1234567890123456789012345")
console.log(a);
console.log(b);
console.log(b+a);

//boolean datatype

console.log (x == y);

//object 

const student = {
    firstname: "harshit",
    lastname: "yadav",
    rollnumber: 2503201000554,
};

// m1
console.log(student);
// // m1 - page
// document.getElementById("dp").innerHTML = JSON.stringify(student);
// // m2 -page
// document.getElementById("d").innerHTML = student.firstname + " " + student.lastname + " " + student.rollnumber;

//array
const array = ["harshit", "trishu", "anjulikaa", "princess"];
console.log(array);

//date
const date = new Date();
console.log(date);

const p = Symbol();
const q = Symbol();


if (p == q) {
    console.log(true);
}
else {
    console.log(false);
}


