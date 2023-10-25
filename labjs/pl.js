function pl(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("n должно быть неотрицательным целым числом");
    }

    if (n % 10 == 1 && n != 11) {
        return 'запись';
    } else if (n % 10 >= 2 && n % 10 <= 4 && n != 12 && n != 13 && n != 14) {
        return 'записи';
    } else {
        return 'записей';
    }

}

var n = 25;
while (n != 0) {
    console.log(`В результате выполнения запроса было найдено ${n} ${pl(n)}`);
    n = n - 1;
}