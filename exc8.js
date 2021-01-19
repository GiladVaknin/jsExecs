let count = 0;
for (let i = 0; count < 5; i++) {
  const number = i;
  let temp = number;
  const history = [];
  while (temp != 1 && !history.includes(temp)) {
    history.push(temp);
    let sum = 0;
    while (temp > 0) {
      const digit = temp % 10;
      sum += digit ** 2;
      temp = Math.floor(temp / 10);
    }
    temp = sum;
  }
  if (temp === 1) {
    count++;
    console.log(number + " number is happy number");
  }
}
