let details = {
    name : "Harshit Yadav",
    rollNumber : 53,
    age: 20,
    drivingLicense: false,
};
// 
for(let key in details){
    console.log(key, ":", details[key])
    // box method as key is not an actual literal
}

console.log(Object.keys(details)) //array of keys
console.log(Object.entries(details)) // both key value pair (array of arrays)

// copying elements

let d2 = {...details}
console.log(d2)

let ob3 = Object.assign({}, details) //blank object {}
console.log(ob3)

// deep clone // spread operator dont work for nested objects so we use json,
// nested structure ka refeence transfer hota when we use spread operator 
let o3 = JSON.parse(JSON.stringify(details))

// optional chaining to handle if a nested structure actually constain a object

// computed properties: 
let role = "admin"
let data = {
    name: "harshit",
      [role] : "harshit",
    address: {
        city: "unnao",
        pin: "209861",
        location: {
            lat : 34.2,
            lgn: 65.7,
        }
    }
  
};

console.log(data?.address?.location?.lat) // correct output
console.log(data?.address?.locations?.lat) // will show undefined instead of error reading lat etc
console.log(data)
