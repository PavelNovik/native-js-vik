const user = {
  name: 'Pavel',
  age: 37,
  address: {
    city: {
      title: 'Sluck',
    },
  },
};
const user1 = {
  name: 'Pavel',
  age: 37,
  address: {
    city: {
      title: 'Sluck',
    },
  },
};
const users = ['Dimych', 'Natasha', 'Valera', 'Katya'];
const usersObj = {
  0: 'Dimych',
  1: 'Natasha',
  2: 'Valera',
  3: 'Katya',
};

console.log(usersObj[2]);

console.log(usersObj);
delete usersObj[1];
console.log(usersObj);

console.log(user.address.city.title);
console.log(user['address']['city']['title']);
console.log(user1.address.city.title);
console.log(user1['address']['city']['title']);
