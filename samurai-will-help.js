// const user = {
//   name: 'Alex',
//   showName() {
//     console.log(this.name);
//   },
// };

// const user2 = {
//   name: 'Hanna',
//   showName: user.showName(),
// };

// const user3 = {
//   name: 'John',
//   showName: user2.showName,
// };

// user2.showName;

// console.log(typeof user2.showName);

// function foo(a, b, c, d) {
//   console.log(a, b, c, d);
//   console.log(this);
// }

// foo.call({ name: 'Vasya' }, 1, 2, 3, 4);
// foo.apply({ name: 'Vasya' }, [9, 8, 7, 6]);

// const ddd = foo.bind({ name: 'Pawel' }, 4, 5);
// ddd(6, 7);
// foo.bind({ name: 'Pawel' })();

// function User(name, age) {
//   (this.name = name), (this.age = age);
// }

// const userz = new User('John', 37);

// console.log(userz);

// function User() {
//   console.log(this);
// }
// new (User.bind({ name: 'Hello' }))();
// new User({ name: 'Hello' });

// function foo2() {
//   console.log(this);
// }
// foo2();

// const foo = (name) => {
//   // console.log(this);
//   this.name = name;
//   console.log(this.name);
// };
// foo('alex');

// const user1 = {
//   name: 'Alex',
//   hi() {
//     console.log(this.name);
//   },
// };
// user1.hi();

// const user2 = {
//   name: 'Alexia',
//   hi: () => {
//     console.log(this.name);
//   },
// };

// Prototype

const hanna = {
  name: 'Hanna',
  age: 33,
  showName() {
    console.log(this.name);
  },
};

const alex = {
  name: 'Alex',
};

alex.__proto__ = hanna;

alex.showName();
console.log(alex.age);
