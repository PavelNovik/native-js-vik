// 'use strict';
// var name = 'Vasya';
// function foo() {
//   //   console.log(this);
// console.log(this);
// }
// // foo();

// const user = {
//   name: 'Eugen',
//   showName: () => {
//     console.log(this.name);
//     console.log(this);
//     (() => {
//       console.log(this.name);
//     })();
//   },
//   showName1() {
//     console.log(this.name);
//     console.log(this);
//     (() => {
//       console.log(this.name);
//     })();
//   },
// };

// user.showName();
// user.showName1();

// let car = {
//   brand: 'bmw',
//   showBrand() {
//     console.log(this.brand);
//   },
// };

// const newCar = car;

// car = null;
// newCar.showBrand();

// function foo() {
//     const x = 10;
//     return {
//         x: 20,
//         bar: () => {
//             console.log(this.x);
//         },
//         baz: function () {
//             console.log(this.x);
//         },
//     };
// }
//
// const obj1 = foo();
// obj1.bar();
// obj1.baz();
//
// const obj2 = foo.call({x: 30});
// let y = obj2.bar;
// let z = obj2.baz;
//
// y();
// z();
//
// obj2.bar();
// obj2.baz();

function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

console.log(sayHi.prototype);

let bound = sayHi.bind({
  name: 'Вася',
});

console.log(bound.test); // что выведет? почему?
console.log(bound.prototype); // что выведет? почему?

// function f() {
//     alert( this);
// }
//
// let user = {
//     g: f.bind(undefined).call({x:30})
// };
//
// user.g();

function User() {
  console.log(this);
}
new (User.bind({ name: 'Hello' }))();

// this

// 1. Global scope
// 2. Function -> function() | arrow f()
// 3. call, apply, bind
// 4. function Constructor

// 1. -------------------------

// "use strict";

// console.log(this);

// 2. --------------------------

// function foo() {
//   console.log(this);
// }

// foo();
// var name = "";

// const user = {
//   name: "Jenya",
//   // showName: () => {
//   //   console.log(this.name);
//   // },
//   showName() {
//     //this
//     (() => {
//       console.log(this.name);
//     })();
//   },
// };

// user.showName();

// let car = {
//   brand: "bmw",
//   showBrand() {
//     console.log(this.brand);
//   },
// };

// // car.showBrand();

// const newCar = car;
// car = null;

// newCar.showBrand();

// const car1 = {
//   brand: "bmw",
// };

// const car2 = {
//   brand: "kia",
// };

// function foo() {
//   console.log(this.brand);
// }

// car1.f = foo;
// car2.f = foo;

// car1.f();
// car2.f();

// console.log(car1);

// 3. --------------------

// const bmw = {
//   brand: "bmw",
//   showBrand() {
//     console.log(this.brand);
//   },
// };

// const kia = {
//   brand: "kia",
// };

// setTimeout(bmw.showBrand.bind(bmw), 2000);
// setTimeout(() => bmw.showBrand(), 2000);

// function setTimeout1(cb, delay) {
//   //delay
// (() => bmw.showBrand())()
// }

// bmw.showBrand.call(kia, "It's", "!");
// bmw.showBrand.apply(kia, ["It's", "!"]);
// bmw.showBrand.bind(kia, "It's", "!")();
// const foo = bmw.showBrand.bind(kia, "It's", "!");
// foo();

// 4. ----------------------

// function CarConstructor(brand) {
//   //{}
//   this.brand = brand; // {brand: 'bmw'}
//   // return {brand: 'bmw'}
// }

// const car1 = new CarConstructor("bmw");
// const car2 = new CarConstructor("kia");
// const car3 = new CarConstructor("audi");

// console.log(car1);
// console.log(car2);
// console.log(car3);

// ------------------------

// const scooter = {
//   brand: "yamaha",
// };

// const motocycle = {
//   brand: "suzuki",
// };

// const bmw = {
//   brand: "bmw",
//   showBarand() {
//     console.log(this.brand);
//   },
// };

// const foo = bmw.showBarand.bind(scooter);
// console.dir(foo);
// foo.call(motocycle);

// const dialer = {
//   name: "Toyota",
//   models: ["Yaris", "Corolla", "Prado"],
//   showModelsInDialer() {
//     this.models.forEach(function (model) {
//       console.log(`Dialer: ${this.name}, have: ${model}`);
//     });
//   },
// };

// console.log(this);

// dialer.showModelsInDialer();
// "use strict";

// function foo() {
//   //this
//   const x = 10;
//   return {
//     x: 20,
//     bar: () => {
//       console.log(this.x);
//     },
//     baz: function () {
//       console.log(this.x);
//     },
//   };
// }

// const obj1 = foo();
// // obj1.bar();
// // obj1.baz();

// const obj2 = foo.call({ x: 30 });
// let y = obj2.bar;
// let z = obj2.baz;

// // y();
// // z();

// obj2.bar(); // 30
// obj2.baz(); // 20

// function sayHi() {
//   console.log(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася",
// });

// bound(); // что выведет? почему?

function User() {
  console.log(this);
}
User.bind({ name: 'Hello' })();
