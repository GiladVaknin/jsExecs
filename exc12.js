let sum = 0;
for (let d = 3; d < 1000; d++) {
  if (d % 3 === 0 || d % 5 === 0) sum += d;
}
console.log(sum);
