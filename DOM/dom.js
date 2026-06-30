// dom manipulation: things to master
/* 
html se element select krna
text badlna
html badlna
css badlna
attribute
event listeners
 */

let greetings = document.getElementById("greeting");
console.log(greetings);
let users = document.getElementsByClassName("new");
console.log(users);

// sometimes console.log doesn't work then we use console.dir
// getElementById getElementsByClassName aren't used much now

// the one which you should learn is queryselector and quey selector all
let v = document.querySelector("h2"); // universal we use # for id and . for classes
console.dir(v);
let b = document.querySelectorAll("h2"); //will return a array like structure containing all h2 elements
console.dir(b);