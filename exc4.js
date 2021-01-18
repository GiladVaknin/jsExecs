let x = Number(prompt("Enter the first number"));
let y = Number(prompt("Enter the second number"));
let z = Number(prompt("Enter the third number"));
let a = Number(prompt("Enter the fourth number"));
let b = Number(prompt("Enter the fifth number"));
let biggestnum = 0;
if (x > y) {
  biggestnum = x;
} else {
  biggestnum = y;
}
if (biggestnum < z) {
  biggestnum = z;
}
if (biggestnum < a) {
  biggestnum = a;
}
if (biggestnum < b) {
  biggestnum = b;
}
alert(biggestnum);
