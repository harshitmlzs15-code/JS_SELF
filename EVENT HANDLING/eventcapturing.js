let b1 = document.querySelector("#b1")
let b2 = document.querySelector("#b2")
let b3 = document.querySelector("#b3")
let b4 = document.querySelector("#b4")

b1.addEventListener("click", ()=>{
    console.log("b1 clicked")
}) // bubbling takes place

b2.addEventListener("click", ()=>{
    console.log("b2 clicked")
}, true) // syntax for enabling capture phase, by default it's disabled
// firstly event capturing takes place then bubbling

b3.addEventListener("click", ()=>{
    console.log("b3 clicked")
}) // bubbling takes place

b4.addEventListener("click", ()=>{
    console.log("b4 clicked")
}); // bubbling takes place
