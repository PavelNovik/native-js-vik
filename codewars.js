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
