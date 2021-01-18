let x = Number(prompt("Enter the first number"));
let y = Number(prompt("Enter the second number"));
let z = Number(prompt("Enter the third number"));
if (x > y) {
  if (x > z) {
    if (z > y) {
      alert(x + "," + z + "," + y);
    } else {
      alert(x + "," + y + "," + z);
    }
  } else {
    alert(z + "," + x + "," + y);
  }
} else {
  if (y > z) {
    if (x > z) {
      alert(y + "," + x + "," + z);
    } else {
      alert(y + "," + z + "," + x);
    }
  } else {
    alert(z + "," + y + "," + x);
  }
}
