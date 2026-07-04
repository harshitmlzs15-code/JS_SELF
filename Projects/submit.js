
let form = document.querySelector("form")

let input = document.querySelectorAll(".frm")

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}


form.addEventListener("submit", (val)=>
{
    val.preventDefault();

    if(input[0].value === "" ||
        input[1].value === "" ||
        input[2].value === ""){
           window.alert("please fill all the fields")
        }
else{
    let card = document.createElement("div")

    card.classList.add("profile")
    card.style.backgroundColor = getRandomColor();
    
    
        let img = document.createElement("div")
        img.classList.add("imge")

        let vale =  document.createElement("img")    
        if(input[3].value === ""){
            vale.src = "https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg"
        }
        else{
            vale.src = input[3].value 
        }
        img.appendChild(vale);


    let h3 = document.createElement("h3")
     h3.classList.add("name")
     h3.textContent = `${input[0].value}`
     

    let h4 = document.createElement("h4")
    h4.classList.add("prof")
    h4.textContent = `${input[1].value}`
     
    let p = document.createElement("p")
    p.classList.add("about")
    p.textContent = `${input[2].value}`


  card.appendChild(img)
  card.appendChild(h3)
  card.appendChild(h4)
  card.appendChild(p)


  document.querySelector("#cards").appendChild(card)
 
//   input.forEach((val)=>{
//     input[0].value = "",
//      input[1].value = "",
//       input[2].value = "",
//        input[3].value = ""    
//   })

// form reset using loop
// input.forEach((field) => {
//     field.value = "";
// });
form.reset();
}
})