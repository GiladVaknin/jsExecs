console.log(0);
for (let i = 1; i <= 100; i++) {
  switch (i > 0) {
    case i % 15 === 0:
      console.log("FizzBuzz");
      break;
    case i % 5 === 0:
      console.log("Buzz");
      break;
    case i % 3 === 0:
      console.log("Fizz");
      break;
    default:
      console.log(i);
      break;
  }
}
