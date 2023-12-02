function sum(a, b, c) {
  return a + b + c;
}

// console.log(sum.length);

const currSum = (a) => (b) => (c) => a + b + c;

// console.log(currSum(1)(2)(3));

const currPartSum = (fn) => {
  const curr = (...args) => {
    console.log(args);
    if (args.length >= fn.length) {
      console.log('first fn');
      return fn(...args);
    } else {
      return function (...args2) {
        console.log('second fn');
        return curr(...args, ...args2);
      };
    }
  };
  return curr;
};

const res = currPartSum(sum);

// console.log(res(1)(2)(3));
// console.log(res(1, 2, 3));
// console.log(res(1, 2)(3));
// console.log(res(1)(2, 3));

const fA = res(1);
const sA = fA(2);
console.log(sA(3));
