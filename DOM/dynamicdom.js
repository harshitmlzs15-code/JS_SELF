let h1 = document.createElement("h1")
h1.innerText = "hello how are you?"
document.querySelector("body").appendChild(h1)
let h2 = document.createElement("h2")
h2.innerText = "how prepend works"
document.querySelector("body").prepend(h2)
/* what is happening above:
1. creating an empty element
2. adding info to that element
3. appending/prepending it accordingly using queryselector
appendChild/append and prepend */

 h2.remove()  //will remove the element 

// how to add styles using js
// let body = document.querySelector("body");

// body.style.backgroundColor = "blue";
// body.style.color = "yellow";
// h1.style.backgroundColor = "red"
// h1.style.font = "20px monospace";
// h1.style.color = "yellow"

//this method is prioritised: element.classList.method("classname")
h1.classList.add("class")
h1.classList.remove("class")
h1.classList.toggle("class")
