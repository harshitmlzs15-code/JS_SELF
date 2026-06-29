

// let i = 1;

// while(i <= 20){

//     if(i % 3 == 0){
//         i++;
//         continue;
//     }

//     document.write(i + "<br>");
//     i++;
// }
let i = 1;
count = 0;
do{
    if(i%2!==0){
        document.write(`odd number ${i} <br>`);
        count++;
    }
    i++;
}while(count<5);
