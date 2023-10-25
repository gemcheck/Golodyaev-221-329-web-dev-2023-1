function minDigit(x) {
    if (x < 0 || !Number.isInteger(x)) {
        throw new Error("x должно быть неотрицательным целым числом");
    }

    if (x === 0) {
        return 0;
    }

    var min = 10; // 
    while (x > 0) {
        const digit = x % 10;
        if (digit < min) {
            min = digit;
        }
        x = Math.floor(x / 10);
    }
    return min;
}

// Пример использования:
const x = 1;
const result = minDigit(x);
console.log(`Наименьшая цифра в числе ${x} равна ${result}`);