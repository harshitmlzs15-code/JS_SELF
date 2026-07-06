let inp = document.querySelector("input")
let span = document.querySelector("span")

inp.addEventListener("input", (dets)=>{
    let cl =  20 - dets.target.value.length
        span.textContent = cl  // or inp.value.length will work the same
    if(cl < 0){
        span.style.color = "red";
}
else{
span.style.color = "black";
}
})