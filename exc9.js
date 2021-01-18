let number;
for (let i = 100; i <= 999; i++) {
  number = i;
  let digit1 = number % 10;
  let digit2 = Math.floor(number / 10) % 10;
  let digit3 = Math.floor(number / 100);
  let sum = Math.pow(digit1, 3);
  sum += Math.pow(digit2, 3);
  sum += Math.pow(digit3, 3);
  if (sum === number) {
    console.log(sum + ",");
  }
}
