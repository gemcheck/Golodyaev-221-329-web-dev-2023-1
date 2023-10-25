function pow(x, n) {
    if (!(Number.isInteger(n) && n > 0)) {
        throw new Error("Степень должна быть натуральным числом");
    }
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
  
const x = 5;
const n = 3;
console.log(`${x} в степени ${n} равно ${pow(x, n)}`);