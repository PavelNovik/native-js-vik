// const startE = function () {
//   console.log(`strat ${this.brand}`);
// };

// function Car(brand, maxS) {
//   this.brand = brand;
//   this.maxS = maxS;
//   this.startE = startE;
// }

// const car1 = new Car('bmw', 200);
// const car2 = new Car('audi', 210);

// console.log(car1.startE === car2.startE);

// class Car {
//   #corp;
//   constructor(brand, speed, corp) {
//     this.brand = brand;
//     this.speed = speed;
//     this.#corp = corp;
//   }

//   get corp() {
//     return this.#corp;
//   }
//   set corp(value) {
//     if (value.length === 1) {
//       throw new Error('Fuck you!');
//     } else {
//       this.#corp = value;
//     }
//   }
//   set brander(value) {
//     if (value.length === 1) {
//       throw new Error('Fuck you!');
//     } else {
//       this.brand = value;
//     }
//   }
//   someMethod() {
//     console.log('Some method');
//   }

//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   }
//   stopEngine = () => {
//     console.log(`Stop ${this.brand}`);
//   };
// }

// class SuperCar extends Car {
//   constructor(brand, speed, corp, canFly) {
//     super(brand, speed, corp);
//     this.canFly = canFly;
//   }
//   canCarFly() {
//     console.log('Can');
//   }
// }

// const car1 = new SuperCar('bmw', 200, 'VW', true);
// car1.canCarFly();
// car1.someMethod();
// const car1 = new Car('bmw', 200, 'VW');
// console.log(car1);

// console.log(car1.corp);
// car1.corp = 'Jili';
// console.log(car1);
// car1.brander = 'ssdasda';
// console.log(car1);
// car1.corp = 'J';
// const car2 = new Car('audi', 210);

// car1.startEngine();
// car1.stopEngine();
// car2.startEngine();

// console.log(car1.startEngine === car2.startEngine);
// console.log(car1.stopEngine === car2.stopEngine);

// setTimeout(car1.startEngine, 3000);
// setTimeout(car1.startEngine.bind(car1), 4000);
// setTimeout(car1.stopEngine, 2000);

// const car1 = {
//   brand: "bmw",
//   maxSpeed: 220,
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   },
// };

// const car2 = {
//   brand: "kia",
//   maxSpeed: 250,
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   },
// };

// function carCreator(brand, maxSpeed) {
//   return {
//     brand,
//     maxSpeed,
//     startEngine() {
//       console.log(`Start ${this.brand}`);
//     },
//   };
// }

// const car1 = carCreator("bmw", 220);
// const car2 = carCreator("kia", 250);

// console.log(car1);
// console.log(car2);
// const startEngine = function () {
//   console.log(`Start ${this.brand}`);
// };

// function Car(brand, maxSpeed) {
//   //{}
//   this.brand = brand;
//   this.maxSpeed = maxSpeed;
//   this.startEngine = startEngine;
// }

// Car.prototype.startEngine = function () {
//   console.log(`Start ${this.brand}`);
// };

// const car1 = new Car("bmw", 220);
// const car2 = new Car("kia", 250);
// console.log(car1.startEngine === car2.startEngine);

// console.log(car1);
// console.log(car2);

// car1.startEngine();
// car2.startEngine();

// class Car {
//   constructor(brand, maxSpeed) {
//     this.brand = brand;
//     this.maxSpeed = maxSpeed;
//   }
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   }
//   stopEngine = () => {
//     console.log(`Start ${this.brand}`);
//   };
// }

// const car1 = new Car("bmw", 220);
// const car2 = new Car("kia", 250);

// console.log(car1);
// console.log(car2);
// console.log(car2.startEngine === car1.startEngine);
// console.log(car2.stopEngine === car1.stopEngine);

// car1.startEngine();
// car2.startEngine();

// setTimeout(car1.startEngine(), 10000);

class Car {
  #brand;
  constructor(brand, maxSpeed) {
    //{}
    this.#brand = brand;
    this.maxSpeed = maxSpeed;
    console.log('constructor from class Car');
  }
  startEngine() {
    console.log(`Start ${this.#brand}`);
  }
  stopEngine = () => {
    console.log(`Start ${this.#brand}`);
  };
  setBrand(value) {
    this.#brand = value;
    return value;
  }
  someMethod() {
    console.log('someMethod');
  }
  getBrand() {
    return this.#brand;
  }
  get brand() {
    return this.#brand;
  }

  set brand(value) {
    this.#brand = value;
  }
  static compareCars(car1, car2) {
    return car1.maxSpeed > car2.maxSpeed
      ? `${car1.brand} faster ${car2.brand}`
      : `${car2.brand} faster ${car1.brand}`;
  }
}

const bmw = new Car('bmw', 220);
const kia = new Car('kia', 250);
// bmw.compareCars();
console.log(Car.compareCars(bmw, kia));

class SuperCar extends Car {
  constructor(brand, maxSpeed, canFly) {
    super(brand, maxSpeed);
    this.canFly = canFly;
  }
  // startFly() {
  //   console.log(`Start fly ${this.brand}`);
  // }
  startEngine() {
    super.startEngine();
  }
}

const superBmw = new SuperCar('superBmw', 320, true);

console.log(SuperCar.compareCars(superBmw, bmw));
