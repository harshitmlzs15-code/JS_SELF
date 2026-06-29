// create an object for a student with name age and isenrolled
let student = {
    name: "rohanitya",
    age : 33,
    isEnrolled: false
}
// key can be boolean number, string etc

console.log(student.isEnrolled)

let v = {
    "first-name": "rohanitya",
    age: 65,
}
console.log(v["first-name"]) // . can't be used for a string / containgin -
let l = "age";
console.log(v[l])

let {"first-name": firstname} = v; // the name contains a - sign so we have to specify in which name we are copying it
console.log(firstname)

console.log(Object.entries(student))

Object.entries(student).forEach((val)=>{
    console.log(val[0] + ":" + val[1])
})


// deep clone obj1 safely
const obj1 = {
    info: {
        score: 90
    }
}
let newo = JSON.parse(JSON.stringify(obj1))


// use a varible to dynamically assign a property

const key = "role";

let ob = {
    name: "harshit",
    [key]: "admin",
}
