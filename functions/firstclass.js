// javascript: variable storing a function whose argument is also a fn
let a = function(val){
    val();
}

let x = 0;
a(function(){ // argument wala function has no name
   while(x<201){
        console.log(`${x} butki pagal hai`);
        x++;
    }
});