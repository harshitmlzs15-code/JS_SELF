let div = document.querySelector("#upload")
let input = document.querySelector("#file")

div.addEventListener("click", ()=>{
     input.click()
})

input.addEventListener("change", (val)=>{
   div.textContent = val.target.files[0].name;
   
})