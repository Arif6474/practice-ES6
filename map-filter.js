const numbers = [25, 20, 15, 30, 57, 10];
const output = numbers.map(num => num * 5);
// console.log(output);
const oddNumbers = numbers.filter(x => 
    x % 2 !== 0
);
console.log(oddNumbers);