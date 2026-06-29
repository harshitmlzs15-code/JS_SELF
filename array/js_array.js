let arr = [1,3,5,8,9,10] 
arr[3] = 143 // modifies the value at index 3
arr.push(56)// adds an element at the end of the array
arr.pop() // removes the last element
arr.shift() // removes the first element
arr.unshift(69) //adds an element at the front
arr.splice(2,1)  // splice(p, v) goes to p postn and remove v values from the actual array
let newarr = arr.slice(0,3)  // slice(s,e) creates a duplicate array containing the elements from the start s to end  e postion actual arrray

console.log(arr)
console.log(newarr)

newarr.reverse() // will reverse the actual array
console.log(newarr)


