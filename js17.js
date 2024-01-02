// generators

// function foo(value) {
// 	//
// 	//
// 	//
// 	//
// return result
// }

// foo(1)
// foo(2)
// foo(3)
// foo(4)

// function* name(arguments) {
//   //
//
//
//
//
// }

// function* generateSalaryWithBonus(salary) {
//   console.log("start generation function");
//   // const a = yield salary + (salary / 100) * 15; //15
//   // return yield 20;
//   // console.log("inside generator", a);
//   // const b = yield salary + (salary / 100) * 20; //25
//   // console.log("inside generator", b);
//   yield salary + (salary / 100) * 20; //STOP 15
//   console.log("generation function after firs yield");
//   // console.log(a);
//   yield salary + (salary / 100) * 25; // 2 STOP
//   console.log("generation function after second yield");
//   yield salary + (salary / 100) * 30;
//   yield salary + (salary / 100) * 35;
//   // console.log("after yield");
//   // {value: undefined, done: true}
// }

// const generator = generateSalaryWithBonus(2000);

// let someValue = generator.next("string");
// console.log(someValue.value);
// someValue = generator.next(15);
// console.log(someValue);
// console.log(generator.next());
// console.log(generator.next(15));
// console.log(generator.next());
// console.log(generator.next(25));
// console.log(generator.next(30));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// generator

// function* ramdomize1() {
//   // while (true) {
//   //   let randome = yield Math.floor(Math.random() * 1000);
//   //   // yield randome;
//   // }
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* ramdomize2() {
//   yield 4;
//   yield 5;
//   yield 6;
// }

// function* multipleValues() {
//   yield* ramdomize1();
//   yield* ramdomize2();
// }

// const random = multipleValues();

// console.log(random.next().value);
// console.log(random.next().value);
// console.log(random.next().value);
// console.log(random.next().value);
// console.log(random.next().value);
// console.log(random.next().value);

import fetch from 'node-fetch';

const foo = async () => {
  const dataFromYahoo = await fetch('https://yahoo.com/?query=js');
  console.log('dataFromYahoo', dataFromYahoo.url);
};
console.log('start foo');
foo();
console.log('start foo');

const foo2 = newAsync(function* () {
  const dataFromYahoo = yield fetch('https://yahoo.com/?query=js');
  console.log('dataFromYahoo', dataFromYahoo.url);
});

function newAsync(generationFunction) {
  return function () {
    const generator = generationFunction();

    function resolve(next) {
      if (next.done) {
        return Promise.resolve(next.value);
      }

      return Promise.resolve(next.value).then((res) => {
        return resolve(generator.next(res));
      });
    }
    return resolve(generator.next());
  };
}
console.log('start foo2');
foo2();
console.log('start foo2');
