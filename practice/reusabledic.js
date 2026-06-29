function calculateDiscount(){
    let percent = Number(document.getElementById("discount").value) // . value returns a string
    let MRP = Number(document.getElementById("mrp").value)
    let result =  Number(((percent/100)*MRP).toFixed(2));
    document.getElementById("result").innerHTML = result;
    return result;
}
// the above fn should return a value if it is being used in another function else it'll just return nothing i.e undefined

function resetFields(){
    document.getElementById("discount").value = "" // . value returns a string
    document.getElementById("mrp").value = ""
    let result = ""
    document.getElementById("result").innerHTML = result;
}

function calculateFinalPrice(){
    let discount = calculateDiscount();
       let MRP = Number(document.getElementById("mrp").value)

    document.getElementById("result").innerHTML = (MRP - discount).toFixed(2);
}


