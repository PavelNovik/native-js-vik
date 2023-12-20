// const foo = () => {};

// console.log(foo.__proto__.__proto__);
// console.log(Object.__proto__);
// console.log('a'.__proto__.__proto__);
// console.log(Function.__proto__ === Function.prototype);
// console.log(Function.prototype.constructor === Function);
// console.log(Function.prototype.constructor.__proto__ === Function.prototype);

// const arr = [];
// const str = 'str';
// const num = 13;

// console.log(arr.__proto__);
// console.log(str.__proto__);
// console.log(num.__proto__);

// __proto__ | prototype

// https://www.youtube.com/watch?v=b55hiUlhAzI&ab_channel=IT-KAMASUTRA

// __proto__ - есть у любого объекта, ссылка на prototype конструктора,
// с помощью которого был создан обьект

// prototype - ОБЪЕКТ. Функции конструкторы и классы.

// class Car {
//   constructor(brand, maxSpeed) {
//     this.brand = brand;
//     this.maxSpeed = maxSpeed;
//     this.state = {};
//   }
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   }
//   stopEngine = () => {
//     console.log(`Start ${this.brand}`);
//   };
//   // stopEngine2 = function () {
//   //   console.log(`Start ${this.brand}`);
//   // };
//   // weels = 4;
// }

// const car1 = new Car("bmw", 220);
// const car2 = new Car("kia", 220);

// console.log(car1.brand === car2.brand); // true
// console.log(car1.startEngine === car2.startEngine); // true
// console.log(car1.stopEngine === car2.stopEngine); // false
// console.log(car1.state === car2.state); // false
// console.log(car1 === car2); // false

// console.log(car1.__proto__ === Car.prototype);
// console.log(car1.__proto__ === car2.__proto__);

// car1.startEngine();
// car2.startEngine();

// console.log(car1);
// console.log(car2);

// const a = new String("sdf");

// console.log(a.__proto__ === String.prototype);

// const b = 42;
// console.log(b.__proto__ === Number.prototype);

// const arr = {};
// console.log(arr.__proto__ === Object.prototype);

// const foo = () => {};

// console.log(foo.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype);

// console.log(foo.__proto__.__proto__ === Object.prototype);

// console.log([].__proto__.__proto__ === Object.prototype);

// console.log(Array.__proto__ === Function.prototype);
// console.log(String.__proto__ === Function.prototype);
// console.log(Number.__proto__ === Function.prototype);
// console.log(Object.__proto__ === Function.prototype);

// console.log(Object.__proto__ === Function.prototype);
// console.log(Function.prototype.constructor === Function);

// const arr = [];
// const str = "srt";
// const number = 3452;

// console.log(arr.__proto__); // Array.prototype
// console.log(str.__proto__); // String.prototype
// console.log(number.__proto__); // Number.prototype

// class Car {
//   constructor(brand, maxSpeed) {
//     this.brand = brand;
//     this.maxSpeed = maxSpeed;
//     this.state = {};
//   }
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   }
// }

// const car1 = new Car("bmw", 220);
// const car2 = new car1.constructor("kia", 220);
// car1.__proto__ => Car.prototype.constructor => Car()

// console.log(car2);

// console.log(car1.__proto__ === Car.prototype);
// console.log(Car.__proto__ === Function.prototype);
// console.log(Function.__proto__ === Function.prototype);
// // console.log(Function.__proto__.__proto__ === Object.prototype);

// console.log(car1.__proto__ === Car.prototype);
// console.log(car1.__proto__.__proto__ === Object.prototype);
// console.log(car1.__proto__.__proto__.__proto__ === null);

// const a = new String("string");
// const c = new Number(45);
// const d = new Number(45);
// const b = "string";
// console.log(String.prototype);

class Car {
  constructor(brand) {
    this.brand = brand;
  }
  startEngine() {
    console.log(`Start ${this.brand}`);
  }
  static compareCars(car1, car2) {
    return car1.maxSpeed > car2.maxSpeed
      ? `${car1.brand} faster ${car2.brand}`
      : `${car2.brand} faster ${car1.brand}`;
  }
}

console.dir(Car);

class SuperCar extends Car {
  constructor(brand, canFly) {
    super(brand);
    this.canFly = canFly;
  }
}

// -------- Реализация наследования в функциях конструкторых -------

function Car1(brand, maxSpeed) {
  this.brand = brand;
  this.maxSpeed = maxSpeed;
}

Car1.prototype.startEngine = function () {
  console.log(`Start ${this.brand}`);
};
Car1.compareCars = function (car1, car2) {
  return car1.maxSpeed > car2.maxSpeed
    ? `${car1.brand} faster ${car2.brand}`
    : `${car2.brand} faster ${car1.brand}`;
};

function SuperCar1(brand, maxSpeed, canFly) {
  //{}
  // this.brand = brand;
  // this.maxSpeed = maxSpeed;
  Car1.call(this, brand, maxSpeed);
  this.canFly = canFly;
}
// SuperCar1.prototype = Object.create(Car1.prototype);
// SuperCar1.__proto__ = Car1;

SuperCar1.prototype.__proto__ = Car1.prototype;
// SuperCar1.prototype.constructor = SuperCar1;
SuperCar1.__proto__ = Car1;

const scar1 = new SuperCar1('bmw1', 300, true);
const scar2 = new SuperCar1('bmw2', 330, true);

console.log(scar1);

// console.log(new SuperCar1("super bmw", true).startEngine());
// console.log(SuperCar1.compareCars(scar1, scar2));
