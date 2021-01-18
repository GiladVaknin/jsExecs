let a = 460;
let b = 900;
let lower, gcd;
if (a > b) lower = b;
else lower = a;
for (let i = 0; i <= lower; i++) {
  if (a % i === 0 && b % i === 0) gcd = i;
}
console.log(gcd);
