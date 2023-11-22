function caesar(str, shift, action) {
    const russianAlphabet = "абвгдежзийклмнопрстуфхцчшщъыьэюя";

    function transformChar(char, shift, action) {
        const isUpperCase = char === char.toUpperCase();
        char = char.toLowerCase();
        if (russianAlphabet.includes(char)) {
            const index = (russianAlphabet.indexOf(char) + (action === "encode" ? shift : 33 - shift)) % 33;
            char = russianAlphabet[index];
            return isUpperCase ? char.toUpperCase() : char;
        }
        return char;
    }

    const transformedStr = str.split('').map(char => transformChar(char, shift, action)).join('');
    return transformedStr;
}

// Пример использования:
const messageToEncode = "эзтыхз фзъзъз";
const encodedMessage = caesar(messageToEncode, 1, "decode");
console.log(encodedMessage);