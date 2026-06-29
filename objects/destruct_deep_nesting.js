// nested structure: object inside object ....
let data = {
    name: "harshit",
    address: {
        city: "unnao",
        pin: "209861",
        location: {
            lat : 34.2,
            lgn: 65.7,
        }
    }
};

// deep accessing: accessing a nested object using . . . 
console.log(data.address.location.lat)

// destructuring: to avoid using deep accessing for n number of times we use this

let {lat, lgn} = data.address.location;
console.log(lgn)