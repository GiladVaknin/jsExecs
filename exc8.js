const number = 19;
// let temp = number;
// let sum = 0;
// while (temp > 0) {
//   const digit = temp % 10;
//   sum += digit ** 2;
//   temp = Math.floor(temp / 10);
// }
// console.log(sum);
// /
let temp = number;

while (temp != 1) {
  let sum = 0;
  console.log(temp);
  while (temp > 0) {
    const digit = temp % 10;
    sum += digit ** 2;
    temp = Math.floor(temp / 10);
  }
  temp = sum;
}
console.log("number is happy number");
