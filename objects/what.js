// blank object
let obj = {};
// initializing value in it=> format === key : value 
let details = {
    name : "Harshit Yadav",
    rollNumber : 53,
    age: 20,
    drivingLicense: false,
};


console.log(typeof(details.name))
console.log(details['rollNumber'])

// details can be accessed using obj.key or obj['key']
// . is used to access literal while [] can be used to use a variable specified for a key

let aa = "age";
console.log(details.aa) // searches for aa in object, no aa is present so undefined
console.log(details[aa]) // aa ki value i.e age ko search krta object me