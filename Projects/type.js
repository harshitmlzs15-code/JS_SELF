let h1 = document.querySelector("h1")

window.addEventListener("keydown", (val)=>{
if(val.key === " " ){
h1.innerText = "space";
h1.style.color = "#626262"
}
else if (val.key === "s" || val.key === "S"){
    h1.innerText = `I love something starts with ${val.key} : samosa`;
    h1.style.color = "yellow"
}
else{
    h1.innerText = val.key;
    h1.style.color = "#626262"
}
console.log(val )
}) 
 