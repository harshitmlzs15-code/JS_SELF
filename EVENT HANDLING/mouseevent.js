let p = document.querySelector("#box")
// function getRandomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     return `rgb(${r}, ${g}, ${b})`;
// }


p.addEventListener("mouseover", ()=>{
    p.style.backgroundColor = "red"
})
p.addEventListener("mouseout", ()=>{
    p.style.backgroundColor = "lavender"
})

window.addEventListener("mousemove", (dets)=>{
   p.style.top = dets.clientY - 100 + "px"; // works only when the position is absolute
   p.style.left = dets.clientX - 150 + "px";
})