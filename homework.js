/**1 Рекурсивное суммирование
 Задача: напишите рекурсивную функцию для вычисления суммы заданных
положительных целых чисел a и b без прямого использования оператора +.*/
const num1 = 5;
const num2 = 3;

const sumWithoutPlus = (a, b) => {
  return b === 0 ? a : sumWithoutPlus(a + 1, b - 1);
};
const result = sumWithoutPlus(num1, num2);
console.log(result); // Выводит: 8

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**2Дано натуральное число N. Выведите слово YES, если число N является точной степенью двойки,
 или слово NO в противном случае.
 Операцией возведения в степень пользоваться нельзя!*/
// Пример использования:
const number = 16;
const number1 = 18;

const isPowerOfTwo = (num) => {
  return num === 2 ? 'YES' : num % 2 === 0 ? isPowerOfTwo(num / 2) : 'NO';
};
const result2 = isPowerOfTwo(number);
const result22 = isPowerOfTwo(number1);
console.log(result2); // Выводит: YES
console.log(result22); // Выводит: NO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**3Напишите функцию, которая принимает строку и возвращает ее перевернутую версию.
// Например, если функция вызывается с аргументом “hello”, она должна вернуть “olleh”.*/
// Пример использования
let input = 'hello';
const reverseString = (a) => {
  return a.length - 1 ? reverseString(a.slice(1)) + a[0] : a;
};
let reversed = reverseString(input);
console.log(reversed);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**4Вычислите экспоненту числа*/
// Пример использования
let base = 2;
let exponent = 3;
const calculateExponent = (b, e) => {
  return e === 0 ? 1 : b * calculateExponent(b, e - 1);
};
let result3 = calculateExponent(base, exponent);
console.log(`${base} в степени ${exponent} равно ${result3}`); //2 в степени 3 равно 8
