function bmiCalc(){
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
   let y =  Number((weight/(height*height)).toFixed(2));
   let result = "";
//to fixed returns a string so we have to typecast it to a number using Number
   if(y<18.5) result =  `Your BMI is: ${y} i.e. underweight`;
   if(y>=18.5 && y<=24.9) result = `Your BMI is: ${y} i.e. normal`;
   if(y>=25 && y<=29.9) result = `Your BMI is: ${y} i.e. overweight`;
   if(y>=30 && y<=34.9) result = `Your BMI is: ${y} i.e. obesity class I`;
   if(y>=35 && y<=39.9) result = `Your BMI is: ${y} i.e. obesity class II`;
   if(y>=40) result = `Your BMI is: ${y} i.e. obesity class III`;

   document.getElementById("result").innerHTML = result;
}
// w = prompt("enter you weight in kgs");
// h = prompt("enter you height in meters");




