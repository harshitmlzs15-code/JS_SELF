let h1 = document.querySelector("h1");
h1.innerHTML = "<strike>oolalalallala";

/*
.innerHTMl = changes the html itself inside the tag
.innerText and text content changes the text inside the tag
 */

// set attribute and get attribute
let a = document.querySelector("a");
a.setAttribute("href", "https://www.youtube.com") //set a new attribute to existing one
console.log(a.getAttribute("href")) //access an existing attribute
a.removeAttribute("href") //remove an existing attribute