// question 01: odd using while loop (1-20)

let i = 1;
let count = 0;
while(i<101){
    count+=i;
    i++;
}
console.log(count);

// ask a number from user and tell if its even or odd
let y = prompt("enter an integer");
for (let i =1; i<=y; i++){
    if(i%2==0){
        document.write(`${i} is even <br>`);
    }
    else{
        document.write(`${i} is odd <br>`);
        if(i % 7 === 0) break;
    }
}

// count number of integers between 1 to 100 are divisible by both 3 and 5;
let z = 1;
let counter = 0;
while(z<101){
    if(z%3 == 0 && z%5 == 0 ){
        document.write(`${z} <br>`)
        counter++;
    }
    z++;
}
document.write(`total numbers divisible by 3 and 5 from one to hundred are ${counter} <br>`);

