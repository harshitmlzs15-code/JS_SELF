
// What is an Event?
// An event is any action that happens in the browser.

// Examples:

// Clicking a button
// Typing in an input field
// Moving the mouse
// Pressing a keyboard key
// Submitting a form
// Scrolling the page
// Loading the webpage

// Example:
// <button>Click Me</button>
// When the user clicks this button, the click event occurs.

// What is an Event Listener?
// An event listener waits for an event to happen and then executes a function.

let st1 = document.querySelector("p");
function clck(){
    st1.style.backgroundColor = "yellow";
}
st1.addEventListener("click", clck)
// st1.removeEventListener("click", clck)

// input event listener
let evi = document.querySelector("input");
evi.addEventListener("input", (evt)=>{
    if(evt.data !== null){
            console.log(evt.data)
    }
})

// change event listener
let change = document.querySelector("select")
let dev = document.querySelector("#dev")
change.addEventListener("change", (dets)=>{
    console.log(dets.target.value)
    dev.textContent = ` ${dets.target.value} device selected`
})