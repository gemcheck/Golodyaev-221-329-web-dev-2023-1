function fibb(n) {
    if (n < 0 || n > 1000 || !Number.isInteger(n)) {
        throw new Error("n должно быть целым числом в диапазоне [0, 1000]");
    }

    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}

// Пример использования:
const n = 4;

