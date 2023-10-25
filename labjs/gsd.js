function nod(a, b) {
    if (a < 0 || b < 0) {
        throw new Error("Числа должны быть неотрицательными!");
    }
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const a = 16;
const b = 20;
console.log(`Наибольший общий делитель ${a} и ${b} равен ${nod(a, b)}`);