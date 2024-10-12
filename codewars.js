// function noSpace(x) {
//   return x.split(' ').join('');
// }

// console.log(noSpace('sadasdsa fdaf    fdafaf   dffs fdsssf'));
// console.log(noSpace('sadasdsa fdaf    fdafaf   dffs fdsssf        '));

// function sumTwoSmallestNumbers(numbers) {
//   //Code here
//   numbers.sort((a, b) => a - b);
//   return numbers[0] + numbers[1];
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return args.sort((a, b) => a - b)[0];
//   }
// }

// const sif = new SmallestIntegerFinder();

// console.log(sif.findSmallestInt([1, 56, 232, 12, 8]));
// console.log(sif.findSmallestInt([78, 56, 232, 412, 228]));
// console.log(sif.findSmallestInt([78, 56, 232, 12, 0]));
// console.log(sif.findSmallestInt([34, -345, -1, 100]));

// function nextBigger(n) {
//   //your code here
//   const stringNum = n.toString().split('');
//   const l = stringNum.length;

//   for (let i = l - 1; i >= 0; i--) {
//     if (+stringNum[i] > +stringNum[i - 1]) {
//       const n = stringNum[i];
//       stringNum[i] = stringNum[i - 1];
//       stringNum[i - 1] = n;
//       break;
//     }
//   }
//   const res = +stringNum.join('');
//   return res === n ? -1 : res;
// }

// console.log(nextBigger(8410052));
// console.log(nextBigger(51835574));
// console.log(nextBigger(31130814476));

// function validatePIN(pin) {
//   //return true or false

//   const res = pin
//     .split('')
//     .map((c) => (+c || c === '0' ? c : ''))
//     .join('');
//   console.log(res);
//   return (pin.length === 4 || pin.length === 6) && pin.length === res.length;

// }

// console.log(validatePIN('1'));
// console.log(validatePIN('1234'));
// console.log(validatePIN('-1.234'));
// console.log(validatePIN('123456'));
// console.log(validatePIN('1234'));
// console.log(validatePIN('1.234'));
// console.log(validatePIN('000000'));

// function openOrSenior(data) {
//   // ...
//   return data.map(([y, h]) => (y >= 55 && h > 7 ? 'Senior' : 'Open'));
// }

// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// );
// console.log(
//   openOrSenior([
//     [3, 12],
//     [55, 1],
//     [91, -2],
//     [53, 23],
//   ])
// );
// console.log(
//   openOrSenior([
//     [59, 12],
//     [55, -1],
//     [12, -2],
//     [12, 12],
//   ])
// );

// function friend(friends) {
//   //your code here
//   return friends.filter((n) => n.length === 4);
// }

// decodeMorse = function (morseCode) {
//   // Your code here
//   // You can use MORSE_CODE[morse]
//   const morseAlph = {
//     '.-': 'a',
//     '-...': 'b',
//     '-.-.': 'c',
//     '-..': 'd',
//     '.': 'e',
//     '..-.': 'f',
//     '--.': 'g',
//     '....': 'h',
//     '..': 'i',
//     '.---': 'j',
//     '-.-': 'k',
//     '.-..': 'l',
//     '--': 'm',
//     '-.': 'n',
//     '---': 'o',
//     '.--.': 'p',
//     '--.-': 'q',
//     '.-.': 'r',
//     '...': 's',
//     '-': 't',
//     '..-': 'u',
//     '...-': 'v',
//     '.--': 'w',
//     '-..-': 'x',
//     '-.--': 'y',
//     '--..': 'z',
//     '.----': '1',
//     '..---': '2',
//     '...--': '3',
//     '....-': '4',
//     '.....': '5',
//     '-....': '6',
//     '--...': '7',
//     '---..': '8',
//     '----.': '9',
//     '-----': '0',
//   };

//   return morseCode
//     .trim()
//     .split('  ')
//     .map((w) =>
//       w
//         .trim()
//         .split(' ')
//         .map((ch) => morseAlph[ch])
//         .join('')
//     )
//     .join(' ')
//     .toUpperCase();
// };

// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
// console.log(decodeMorse('   .... . -.--   '));
// console.log(MORSE_CODE['.--']);

// function isPangram(string) {
//   //...
//   const set = new Set(
//     string
//       .toLowerCase()
//       .split(' ')
//       .join('')
//       .split('')
//       .filter((c) => c !== '.' && c !== ',' && !+c)
//   );

//   //   return set.size === 26;
//   return set;
// }

// console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
// console.log(isPangram('This is not a pangram.'));
// console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'));

// function findEvenIndex(arr) {
//   //Code goes here!
//   let res = -1;
//   let left = 0;
//   let right = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let a = 0; a < i; a++) {
//       left += arr[a];
//     }
//     for (let b = i + 1; b < arr.length; b++) {
//       right += arr[b];
//     }
//     if (left === right) {
//       res = i;
//       return res;
//     } else {
//       left = 0;
//       right = 0;
//     }
//   }
//   return res;
// }

// // console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
// // console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
// // console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
// // console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
// // console.log();

// function findUniq(arr) {
//   const set = new Set(arr);
//   // do magic
//   //   return arr[
//   //     arr.map((n, i, ar) => ar.filter((x) => x === n).length).indexOf(1)
//   //   ];
//   let res;
//   set.forEach((el) => {
//     if (arr.filter((n) => n === el).length === 1) {
//       res = arr.indexOf(el);
//     }
//   });
//   return arr[res];
// }

// console.log(findUniq([1, 0, 0]));
// console.log(findUniq([0, 1, 0]));
// console.log(findUniq([0, 0, 1]));
// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([1, 1, 2, 1, 1]));
// console.log(findUniq([3, 10, 3, 3, 3]));
// // console.log();

// function solution(str) {
//   const arr = str.split('');
//   //   console.log(arr.splice(0, 2));
//   //   console.log(arr);
//   const res = [];
//   while (arr.length > 0) {
//     if (arr.length >= 2) {
//       res.push(arr.splice(0, 2).join(''));
//     }
//     if (arr.length === 1) {
//       res.push(arr.splice(0, 1) + '_');
//     }
//   }
//   return res;
// }

// console.log(solution('abcdef'));
// console.log(solution('abcdefg'));
// console.log('');

// function pigIt(str) {
//   //Code here
//   return str
//     .split(' ')
//     .map((w) => (w !== '!' ? w.substring(1) + w[0] + 'ay' : w))
//     .join(' ');
// }

// console.log(pigIt('Pig latin is cool'));
// console.log(pigIt('This is my string'));
// console.log(pigIt('O tempora o mores !'));

// function getSum(a, b) {
//   //Good luck!
//   let res = 0;
//   if (a === b) {
//     return a;
//   }
//   let s = a > b ? b : a;
//   let f = a > b ? a : b;
//   for (let i = s; i <= f; i++) {
//     res += i;
//   }
//   return res;
// }

// console.log(getSum(0, -1));
// console.log(getSum(0, 1));
// console.log(getSum(2, 2));

// function countSheeps(sheep) {
//   // TODO
//   return sheep.map((el) => (el ? 1 : 0)).reduce((acc, e) => acc + e, 0);
// }

// console.log(
//   countSheeps([true, true, true, false, true, true, true, true, true])
// );

// function longest(s1, s2) {
//   // your code
//   const res = [];
//   new Set(
//     s1
//       .concat(s2)
//       .split('')
//       .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
//   ).forEach((k) => res.push(k));
//   return res.join('');
// }

// console.log(longest('aretheyhere', 'yestheyarehere'));

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// function basicOp(operation, value1, value2) {
//   // Code
//   switch (operation) {
//     case '+':
//       return value1 + value2;
//     case '-':
//       return value1 - value2;
//     case '*':
//       return value1 * value2;
//     case '/':
//       return value1 / value2;
//     default:
//       break;
//   }
// }

// console.log(basicOp('+', 4, 7));
// console.log(basicOp('-', 15, 18));
// console.log(basicOp('*', 5, 5));
// console.log(basicOp('/', 49, 7));

// function basicOp(operation, value1, value2)
// {
//   var cases = {
//     '+': value1 + value2,
//     '-': value1 - value2,
//     '*': value1 * value2,
//     '/': value1 / value2
//   };
//   return cases[operation]
// }
// var x = 100;

// function foo() {
//   const x = 10;

//   return {
//     x: 20,
//     bar: () => {
//       console.log(this.x);
//       console.log(this);
//     },
//     baz: function () {
//       console.log(this.x);
//       console.log(this);
//     },
//   };
// }

// const obj2 = foo.call({ x: 30 });
// // const obj3 = foo.bind({ x: 30 });
// // console.log(obj3);
// // obj2.bar();
// // obj2.baz();

// let y = obj2.bar;
// let z = obj2.baz;

// y();
// z();

// true + false
// 12 / "6"
// "number" + 15 + 3
// 15 + 3 + "number"
// [1] > null
// "foo" + + "bar"
// 'true' == true
// false == 'false'
// null == ''
// !!"false" == !!"true"
// [‘x’] == ‘x’
// [] + null + 1
// [1,2,3] == [1,2,3]
// console.log({} + [] + {} + [1]);
// console.log(!+[] + [] + ![]);
// console.log(new Date(0) - 0);
// console.log(new Date(0) + 0);
// console.log(typeof (new Date(0) + 0));

// function addBinary(a, b) {
//   return (a + b).toString(2);
// }

// console.log(addBinary(1, 1));

// function nbYear(p0, percent, aug, p) {
//   // your code
//   let countYears = 0;
//   while (p >= p0) {
//     p0 += Math.floor((p0 * percent) / 100 + aug);
//     countYears++;
//   }
//   return countYears;
// }
// console.log(nbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));
// console.log(nbYear(1000, 2, 50, 1200));

// function litres(time) {
//   return Math.floor(time / 2);
// }

// function solution(str, ending) {
//   // TODO: complete

//   // return str.lastIndexOf(ending);
//   return str.substring(str.length - ending.length) === ending;
// }

// console.log(solution('abcde', 'cde'));
// console.log(solution('abcde', 'abc'));

// function isTriangle(a, b, c) {
//   let ab = a + b;
//   let bc = b + c;
//   let ac = a + c;
//   return ab > c && bc > a && ac > b;
// }

// console.log(isTriangle(1, 2, 2));
// console.log(isTriangle(7, 2, 2));
// console.log('kk');

// function digitize(n) {
//   //code here
//   return n
//     .toString()
//     .split('')
//     .reverse()
//     .map((e) => +e);
// }

// console.log(digitize(35231));
// console.log(digitize(0));
// console.log();

// function greet(name) {
//   return `Hello, ${name} how are you doing today?`;
// }

12;

// function fixTheMeerkat(arr) {
//   //your code here
//   return [arr[2], arr[1], arr[0]];
// }

// function strCount(str, letter) {
//   return str.split('').filter((l) => l === letter).length;
// }

// function invert(array) {
//   return array.map((n) => -n);
// }

// function flickSwitch(arr) {
//   let flick = true;
//   return arr.map((el) => {
//     if (el === 'flick') flick = !flick;
//     return flick;
//   });
// }

// function cubeChecker(volume, side) {
//   return side !== 0 && side * side * side === volume && volume > 0;
// }

// function naughtyOrNice(data) {
//   let res = 0;
//   for (let key in data) {
//     for (let count in data[key]) {
//       data[key][count] === 'Nice' ? res++ : res--;
//     }
//   }
//   return res >= 0 ? 'Nice' : 'Naughty';
// }

// console.log(
//   naughtyOrNice({
//     January: {
//       1: 'Naughty',
//       2: 'Nice',
//       3: 'Naughty',
//       4: 'Nice',
//       5: 'Naughty',
//       6: 'Nice',
//       7: 'Naughty',
//       8: 'Nice',
//       9: 'Naughty',
//       10: 'Nice',
//       11: 'Naughty',
//       12: 'Nice',
//       13: 'Naughty',
//       14: 'Nice',
//       15: 'Naughty',
//       16: 'Nice',
//       17: 'Naughty',
//       18: 'Nice',
//       19: 'Naughty',
//       20: 'Nice',
//       21: 'Naughty',
//       22: 'Nice',
//       23: 'Naughty',
//       24: 'Nice',
//       25: 'Naughty',
//       26: 'Nice',
//       27: 'Naughty',
//       28: 'Nice',
//       29: 'Naughty',
//       30: 'Nice',
//       31: 'Naughty',
//     },
//     February: {
//       1: 'Nice',
//       2: 'Naughty',
//       3: 'Nice',
//       4: 'Naughty',
//       5: 'Nice',
//       6: 'Naughty',
//       7: 'Nice',
//       8: 'Naughty',
//       9: 'Nice',
//       10: 'Naughty',
//       11: 'Nice',
//       12: 'Naughty',
//       13: 'Nice',
//       14: 'Naughty',
//       15: 'Nice',
//       16: 'Naughty',
//       17: 'Nice',
//       18: 'Naughty',
//       19: 'Nice',
//       20: 'Naughty',
//       21: 'Nice',
//       22: 'Naughty',
//       23: 'Nice',
//       24: 'Naughty',
//       25: 'Nice',
//       26: 'Naughty',
//       27: 'Nice',
//       28: 'Naughty',
//       29: 'Nice',
//     },
//     March: {
//       1: 'Naughty',
//       2: 'Nice',
//       3: 'Naughty',
//       4: 'Nice',
//       5: 'Naughty',
//       6: 'Nice',
//       7: 'Naughty',
//       8: 'Nice',
//       9: 'Naughty',
//       10: 'Nice',
//       11: 'Naughty',
//       12: 'Nice',
//       13: 'Naughty',
//       14: 'Nice',
//       15: 'Naughty',
//       16: 'Nice',
//       17: 'Naughty',
//       18: 'Nice',
//       19: 'Naughty',
//       20: 'Nice',
//       21: 'Naughty',
//       22: 'Nice',
//       23: 'Naughty',
//       24: 'Nice',
//       25: 'Naughty',
//       26: 'Nice',
//       27: 'Naughty',
//       28: 'Nice',
//       29: 'Naughty',
//       30: 'Nice',
//       31: 'Naughty',
//     },
//     April: {
//       1: 'Nice',
//       2: 'Naughty',
//       3: 'Nice',
//       4: 'Naughty',
//       5: 'Nice',
//       6: 'Naughty',
//       7: 'Nice',
//       8: 'Naughty',
//       9: 'Nice',
//       10: 'Naughty',
//       11: 'Nice',
//       12: 'Naughty',
//       13: 'Nice',
//       14: 'Naughty',
//       15: 'Nice',
//       16: 'Naughty',
//       17: 'Nice',
//       18: 'Naughty',
//       19: 'Nice',
//       20: 'Naughty',
//       21: 'Nice',
//       22: 'Naughty',
//       23: 'Nice',
//       24: 'Naughty',
//       25: 'Nice',
//       26: 'Naughty',
//       27: 'Nice',
//       28: 'Naughty',
//       29: 'Nice',
//       30: 'Naughty',
//     },
//     May: {
//       1: 'Nice',
//       2: 'Naughty',
//       3: 'Nice',
//       4: 'Naughty',
//       5: 'Nice',
//       6: 'Naughty',
//       7: 'Nice',
//       8: 'Naughty',
//       9: 'Nice',
//       10: 'Naughty',
//       11: 'Nice',
//       12: 'Naughty',
//       13: 'Nice',
//       14: 'Naughty',
//       15: 'Nice',
//       16: 'Naughty',
//       17: 'Nice',
//       18: 'Naughty',
//       19: 'Nice',
//       20: 'Naughty',
//       21: 'Nice',
//       22: 'Naughty',
//       23: 'Nice',
//       24: 'Naughty',
//       25: 'Nice',
//       26: 'Naughty',
//       27: 'Nice',
//       28: 'Naughty',
//       29: 'Nice',
//       30: 'Naughty',
//       31: 'Nice',
//     },
//     June: {
//       1: 'Naughty',
//       2: 'Nice',
//       3: 'Naughty',
//       4: 'Nice',
//       5: 'Naughty',
//       6: 'Nice',
//       7: 'Naughty',
//       8: 'Nice',
//       9: 'Naughty',
//       10: 'Nice',
//       11: 'Naughty',
//       12: 'Nice',
//       13: 'Naughty',
//       14: 'Nice',
//       15: 'Naughty',
//       16: 'Nice',
//       17: 'Naughty',
//       18: 'Nice',
//       19: 'Naughty',
//       20: 'Nice',
//       21: 'Naughty',
//       22: 'Nice',
//       23: 'Naughty',
//       24: 'Nice',
//       25: 'Naughty',
//       26: 'Nice',
//       27: 'Naughty',
//       28: 'Nice',
//       29: 'Naughty',
//       30: 'Nice',
//     },
//     July: {
//       1: 'Naughty',
//       2: 'Nice',
//       3: 'Naughty',
//       4: 'Nice',
//       5: 'Naughty',
//       6: 'Nice',
//       7: 'Naughty',
//       8: 'Nice',
//       9: 'Naughty',
//       10: 'Nice',
//       11: 'Naughty',
//       12: 'Nice',
//       13: 'Naughty',
//       14: 'Nice',
//       15: 'Naughty',
//       16: 'Nice',
//       17: 'Naughty',
//       18: 'Nice',
//       19: 'Naughty',
//       20: 'Nice',
//       21: 'Naughty',
//       22: 'Nice',
//       23: 'Naughty',
//       24: 'Nice',
//       25: 'Naughty',
//       26: 'Nice',
//       27: 'Naughty',
//       28: 'Nice',
//       29: 'Naughty',
//       30: 'Nice',
//       31: 'Naughty',
//     },
//     August: {
//       1: 'Nice',
//       2: 'Naughty',
//       3: 'Nice',
//       4: 'Naughty',
//       5: 'Nice',
//       6: 'Naughty',
//       7: 'Nice',
//       8: 'Naughty',
//       9: 'Nice',
//       10: 'Naughty',
//       11: 'Nice',
//       12: 'Naughty',
//       13: 'Nice',
//       14: 'Naughty',
//       15: 'Nice',
//       16: 'Naughty',
//       17: 'Nice',
//       18: 'Naughty',
//       19: 'Nice',
//       20: 'Naughty',
//       21: 'Nice',
//       22: 'Naughty',
//       23: 'Nice',
//       24: 'Naughty',
//       25: 'Nice',
//       26: 'Naughty',
//       27: 'Nice',
//       28: 'Naughty',
//       29: 'Nice',
//       30: 'Naughty',
//       31: 'Nice',
//     },
//     September: {
//       1: 'Naughty',
//       2: 'Nice',
//       3: 'Naughty',
//       4: 'Nice',
//       5: 'Naughty',
//       6: 'Nice',
//       7: 'Naughty',
//       8: 'Nice',
//       9: 'Naughty',
//       10: 'Nice',
//       11: 'Naughty',
//       12: 'Nice',
//       13: 'Naughty',
//       14: 'Nice',
//       15: 'Naughty',
//       16: 'Nice',
//       17: 'Naughty',
//       18: 'Nice',
//       19: 'Naughty',
//       20: 'Nice',
//       21: 'Naughty',
//       22: 'Nice',
//       23: 'Naughty',
//       24: 'Nice',
//       25: 'Naughty',
//       26: 'Nice',
//       27: 'Naughty',
//       28: 'Nice',
//       29: 'Naughty',
//       30: 'Nice',
//     },
//     October: {
//       1: 'Naughty',
//       2: 'Nice',
//       3: 'Naughty',
//       4: 'Nice',
//       5: 'Naughty',
//       6: 'Nice',
//       7: 'Naughty',
//       8: 'Nice',
//       9: 'Naughty',
//       10: 'Nice',
//       11: 'Naughty',
//       12: 'Nice',
//       13: 'Naughty',
//       14: 'Nice',
//       15: 'Naughty',
//       16: 'Nice',
//       17: 'Naughty',
//       18: 'Nice',
//       19: 'Naughty',
//       20: 'Nice',
//       21: 'Naughty',
//       22: 'Nice',
//       23: 'Naughty',
//       24: 'Nice',
//       25: 'Naughty',
//       26: 'Nice',
//       27: 'Naughty',
//       28: 'Nice',
//       29: 'Naughty',
//       30: 'Nice',
//       31: 'Naughty',
//     },
//     November: {
//       1: 'Nice',
//       2: 'Naughty',
//       3: 'Nice',
//       4: 'Naughty',
//       5: 'Nice',
//       6: 'Naughty',
//       7: 'Nice',
//       8: 'Naughty',
//       9: 'Nice',
//       10: 'Naughty',
//       11: 'Nice',
//       12: 'Naughty',
//       13: 'Nice',
//       14: 'Naughty',
//       15: 'Nice',
//       16: 'Naughty',
//       17: 'Nice',
//       18: 'Naughty',
//       19: 'Nice',
//       20: 'Naughty',
//       21: 'Nice',
//       22: 'Naughty',
//       23: 'Nice',
//       24: 'Naughty',
//       25: 'Nice',
//       26: 'Naughty',
//       27: 'Nice',
//       28: 'Naughty',
//       29: 'Nice',
//       30: 'Naughty',
//     },
//     December: {
//       1: 'Nice',
//       2: 'Naughty',
//       3: 'Nice',
//       4: 'Naughty',
//       5: 'Nice',
//       6: 'Naughty',
//       7: 'Nice',
//       8: 'Naughty',
//       9: 'Nice',
//       10: 'Naughty',
//       11: 'Nice',
//       12: 'Naughty',
//       13: 'Nice',
//       14: 'Naughty',
//       15: 'Nice',
//       16: 'Naughty',
//       17: 'Nice',
//       18: 'Naughty',
//       19: 'Nice',
//       20: 'Naughty',
//       21: 'Nice',
//       22: 'Naughty',
//       23: 'Nice',
//       24: 'Naughty',
//       25: 'Nice',
//       26: 'Naughty',
//       27: 'Nice',
//       28: 'Naughty',
//       29: 'Nice',
//       30: 'Naughty',
//       31: 'Nice',
//     },
//   })
// );

// function bubble(arr) {
//   let res = [];
//   let s = true;
//   let x;

//   while (s) {
//     // s = true;
//     console.log('iter');
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         s = false;
//         x = arr[i + 1];
//         arr[i + 1] = arr[i];
//         arr[i] = x;
//         res = [...res, [...arr]];
//       }
//     }
//     console.log(s);
//   }

//   return res;
// }

// console.log(bubble([1, 2, 4, 3]));
// console.log(bubble([2, 1, 4, 3]));
// console.log(bubble([1, 4, 3, 6, 7, 9, 2, 5, 8]));
// console.log('Hello muther fucker!');

// function moveTen(s) {
//   return s
//     .split('')
//     .map((a) => {
//       num = a.charCodeAt() + 10;

//       return num <= 122
//         ? String.fromCharCode(num)
//         : String.fromCharCode(num - 26);
//     })
//     .join('');
// }

// console.log(moveTen('codewars'));
console.log('Bomb has been planted!');

const map1 = [
  ['CT', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', 'B'],
];
function bombHasBeenPlanted(map, time) {}

console.log(bombHasBeenPlanted(map1, 7));

console.log('Matryoska');

function matryoshka(lst) {
  // Can the lists be nested?
}

// console.log('Contamination string');

// function contamination(text, char) {
//   return text.length !== 0 ? char.repeat(text.length) : '';
// }
// console.log(contamination('_3ebzgh4', '&'));
// console.log(contamination('//case', ' '));

// console.log('Formatting data for 2 digit after point');

// function twoDecimalPlaces(n) {
//   return +n.toFixed(2);
// }
// console.log(twoDecimalPlaces(4.659725356));
// console.log(twoDecimalPlaces(173735326.3783732637948948));
// console.log(twoDecimalPlaces(4.653725356));

// console.log('The smallest power higher than a given a value');

// function findNextPower(val, pow_) {
//   let a = 1;
//   while (Math.pow(a, pow_) <= val) {
//     a++;
//   }
//   return Math.pow(a, pow_);
// }

// console.log(findNextPower(8, 3));
// console.log(findNextPower(12385, 3));
// console.log(findNextPower(1245678, 5));
// console.log(findNextPower(1245678, 6));
// console.log(findNextPower(4782969, 7));
