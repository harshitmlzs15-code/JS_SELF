// document.querySelector("#hu").textContent = "harshit baba ki jai";

let v = document.querySelectorAll("li")

v.forEach((val)=>{
    console.log(val.textContent)
})

/* another method: for(let i = 0; i<v.length; i++){
 console.log(v[i].textContent);
}*/

let img = document.querySelector("img")
console.log(img.getAttribute("src")) // img.src will work too
img.setAttribute("src", "https://i.pinimg.com/736x/2b/70/34/2b70345c083b9e3f0939ed3082205047.jpg")
img.setAttribute("width", "100%")


let div = document.querySelector("div")
div.title = "hellowww"  // div.setAttribute("name", "value")

// remove the disabled attribute from a button
let btn = document.querySelector("#btn");
btn.removeAttribute("disabled")
// btn.toggleAttribute("disabled")

let li = document.createElement("li")
li.innerText = "new task"

document.querySelector("ul").appendChild(li);

let im = document.createElement("img")
im.src = "https://i.pinimg.com/1200x/36/b4/a8/36b4a8f2d6e1514daf02700dbdc579b1.jpg"

document.querySelector("div").prepend(im)

// let n = document.querySelector("li")
// n.remove();

let ulo = document.querySelector("ul")
let lio = document.querySelector("li")

ulo.removeChild(lio)

let liv = document.querySelectorAll("ul li:nth-child(2n)")

liv.forEach((val)=>{
val.classList.add("highlight")
}
)

console.log(liv);

// toggle calss on click
btn.addEventListener("click", () => {
    btn.classList.toggle("active");
});


let p = document.querySelectorAll("p")
p.forEach((val)=>{
    val.style.fontSize = "24px";
})