let arr = [1, 2, 3, 4, 5, 6, 'apple', {name: "Shuvro"}]

for(let a of arr){ 
    console.log(a);
}
let result = arr.map(e => e + 3);
console.log(result);