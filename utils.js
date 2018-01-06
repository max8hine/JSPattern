const hSum = a => x.reduce( (a, b) => a + b ); // array.map(hSum)
const vSum = (r, a) => r.map((b, index) => a[index] + b); // array.reduce(vSum)