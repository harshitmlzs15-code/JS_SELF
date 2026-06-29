// ques1: create an array with 3 fruit and print second

let arr = ["apple", "mango", "litchi"];
console.log(arr[1])
arr.unshift("pineapple");
arr.push("guava");
console.log(arr)
arr[3] = "banana";
console.log(arr)


//add two elements 
let colour = ["blue","red", "green"]
colour.splice(1,0, "black", "magenta");
//   splice can be used to add elements too
console.log(colour)

// c hose middle 3 only
let items = [1,3,4,5,6,8];
let n = items.slice(1,4);
console.log(n)

// map to square each number
let at = [7,3,15,5,69,0,8,65,4,143];

let bt = at.map((val)=>{
    return val*val;
});

console.log(bt);

// .filter to select numbers greater than 10
let ct = at.filter((val)=>{
  return val>10; //  if (val > 10) return true;
})
console.log(ct)

 // .reduce to find sum 

let dt = at.reduce((acc, val)=>{
    return acc + val
}, 0);

console.log(dt)

// .find to find a number less than 10
    let arg = [12,15,3,8,20]

    let ph = arg.find((val)=>{
        return val<10
    })

    console.log(ph)

// .some to find if any student has scored below 35

let arrg = [49, 60, 18, 90];

let vt = arrg.some((val)=>{
    return val<35;
})

console.log(vt)

// .every to check if all the numbrs are even or not
let c = arrg.every((val)=>{
    return val%2 === 0;
})

console.log(c)

// destructure an array to get first and last name

let fullname = ["harshit", "yadav"]
let [firstname, lastname] = fullname;
console.log(firstname, lastname)

// merge two arrays using spread operator

let a = [8,9]
let cv = [1,4,3]
let b = [...a, ...cv]
console.log(b)

// add India to the start using spread operator;
let countries = ["USA", "UK"]
countries = ["India", ...countries]
console.log(countries)

// clone the array properly not by reference

let arv = [1,2,3];
let vra = [...arv];

console.log(vra)
