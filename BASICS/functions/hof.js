// passed inside function
function hib (val){
    return function(){
    console.log("hii");
}

};
hib()();

//passed in parameter
function hi(v){
    v();

}
hi(function(){
    console.log("hellow")
})