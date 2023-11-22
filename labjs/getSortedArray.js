function getSortedArray(array, key) {
    if (array.length === 0) {
        return array; // Ничего не нужно сортировать, массив пуст
    }

    // Функция для сравнения объектов по указанному ключу
    function compareObjects(a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    }

    return array.slice().sort(compareObjects);
}

// Пример использования:
let array = [
    { name: 'Макар', age: 20 },
    { name: 'Роберт', age: 32 },
    { name: 'Екатерина', age: 50 },
    { name: 'Оксана', age: 24 },
    { name: 'Святослав', age: 43 }
];

array = getSortedArray(array, 'age');
console.log(array);

array = getSortedArray(array, 'name');
console.log(array);