let a = [10, 29, 30, 64, 3, 2, 4];
//sort
a.sort(function(a,b){ 
    return a-b; // a-b means ascending and b-a means descending
})
console.log(a)

//for each
// this method will go to each elemtent of the arr and will perform the designated operation;

a.forEach(function(val){
     console.log(val*5);
})
// it neither creates a duplicate array nor modifies the actual array, it just perfoms an operation on each element of the existing element and display it, it doesnt return anything.
console.log(a);

//map
// it returns undefined for unmet condn or for actual array if nothing is returned
// wherever you see a map just imagine a newarr of actual arr size with all elements as undefined and just replace each element with the value that satisfies the condn

let newarr = a.map(function(val){
    if(val>5) return val;
    else return val-5;
})
console.log(newarr)

// filter
// this also creates a newarr which may or maynt be equal to actual arr size;
// it just accepts those elements which meet the condn and leave the rest no undefined nothing
// returns a boolean value

let nb = newarr.filter(function(val){
    if(val>0) return false; // [], {}, nonzero val true, "", 0 false
    else return true;
})
console.log(nb);

// reduce : it returns a single value that can be either object, number, string or arry
let ans = nb.reduce((acc, val)=>{ // arrow function
    return acc + val;
}, 0)
console.log(ans)

//.find : returns the first element satisfying a cond
// .some : returns true even if a single eleemnts meets a condn
// .every : returns truee iff all the elements present satisfy a codn

// destructing : instead of creating elements again and again to store elemtns we can create an arr of containers and store the value

let bt = [10,4,5,6,3,2,12];
let [x,y] = bt;
console.log(x,y);
// if we have to skip an element we can do that too

let [n,m, ,j] = bt; //op: 10,4,6
console.log(n,m,j)
