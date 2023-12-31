// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

// export function sum(...nums) {
function sum(...nums) {
  // console.log(typeof arguments);
  // console.log(nums);
  // console.log(arguments);
  // console.log(arguments.length);
  // console.log(arguments[1]);
  // console.log(arguments['0']);
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  // return nums.reduce((acc, n) => acc + n, 0);
  let res = 0;
  for (let a of arguments) {
    res += a;
  }
  return res;
}
sum(1, 2, 3, 4, 5);

// console.log(sum(1, 2, 3, 4, 5));

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

// export function getTriangleType(a, b, c) {
function getTriangleType(a, b, c) {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  // return '';
  return a + b > c && b + c > a && a + c > b
    ? a === b && b === c
      ? '10'
      : a === b || a === c || b === c
      ? '01'
      : '11'
    : '00';
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

// export function getSum(number) {
function getSum(number) {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  // return 123;
  return number
    .toString()
    .split('')
    .reduce((acc, n) => acc + +n, 0);
}

// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

// export const isEvenIndexSumGreater = (arr) => {
const isEvenIndexSumGreater = (arr) => {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  // return true;
  let even = 0;
  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    i % 2 === 0 ? (even += arr[i]) : (odd += arr[i]);
  }
  // console.log(even, odd);
};
// isEvenIndexSumGreater([1, 100, 2, 200]);
// isEvenIndexSumGreater([100, 1, 200, 2]);
// isEvenIndexSumGreater([100, 1, 200, 2, 300, 4]);
// isEvenIndexSumGreater([100, 1, 200, 2, 4]);
// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.

// export function getSquarePositiveIntegers(array) {
function getSquarePositiveIntegers(array) {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  // return [];
  // return array.filter((n) => n % 1 === 0 && n > 0).map((n) => n * n);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 1 === 0 && array[i] > 0) result.push(Math.pow(array[i], 2));
  }
  return result;
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

// export function sumFirstNumbers(N) {
function sumFirstNumbers(N) {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  // return 0;
  // return N !== 1 ? N + sumFirstNumbers(N - 1) : 1;
  let sum = 0;
  for (let i = 1; i <= N; i++) sum += i;
  return sum;
}
// console.log(sumFirstNumbers(10));
// ...и "лапку" вверх!!!!

// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

// export function getBanknoteList(amountOfMoney) {
function getBanknoteList(amountOfMoney) {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  // return [1];
  let money = amountOfMoney;
  let res = [];
  const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
  return banknotes.map((a) => {
    const count = Math.floor(money / a);
    money = money % a;
    return count;
  });

  // banknotes.map((a) => {
  //   for (let i = 0; i < Math.floor(money / a); i++) {
  //     res.push(a);
  //   }
  //   money = money % a;
  // });

  // return res;
}

// console.log(getBanknoteList(2500));
// console.log(getBanknoteList(23));

// console.log(1 % 3);
// console.log(3 % 2);
// console.log(Math.floor(10 / 11));
// console.log(23 % 500);

// console.log('console1');

// setTimeout(() => {
//   console.log('console4');
// }, 3000);

// console.log('console2');

// setTimeout(() => {
//   console.log('console3');
// }, 1000);

// console.log('1');

// setTimeout(() => {
//   console.log('2');
// });

// Promise.resolve().then(() => console.log('3'));

// Promise.resolve().then(() =>
//   setTimeout(() => {
//     console.log('4');
//   })
// );
// Promise.resolve().then(() => console.log('5'));

// setTimeout(() => {
//   console.log('6');
// });

// console.log('7');

async function first() {
  console.log(9);
  await Promise.resolve(2).then((r) => console.log(r));
  console.log(0);
  await Promise.resolve(3).then((r) => console.log(r));
}

async function second() {
  console.log(10);
  await Promise.resolve(4).then((r) => console.log(r));
  console.log(11);
  await Promise.resolve(5).then((r) => console.log(r));
}

first();
second();

const promises = Promise.resolve('new Promise');
promises.then((str) => console.log(str));
