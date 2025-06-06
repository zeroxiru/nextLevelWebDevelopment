const {a, b, add} = require('./file2')
const {a:a3, b:b3, add:add3} = require('./file3')

console.log(a);
console.log(b);
console.log(add(11,22));

console.log(a3);
console.log(b3);
console.log(add3(11,22, 33));