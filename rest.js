function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const result1 = sum(1, 2, 3, 4, 5);
const result2 = sum(10, 20, 30);
const result3 = sum(2, 4, 6, 8, 10);

console.log(result1);
console.log(result2);
console.log(result3);
