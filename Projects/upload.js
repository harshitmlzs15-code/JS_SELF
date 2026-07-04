let div = document.querySelector("#upload")
let input = document.querySelector("#file")

div.addEventListener("click", ()=>{
     input.click()
})

input.addEventListener("change", (val)=>{
   const file =  val.target.files[0];
   if(file){
      div.textContent = file.name;
   } 
   else{
      div.textContent = "no file selected";
   } 
})