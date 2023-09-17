// 1. String => "", '', ``
// 2. number => number, NaN, Infinity
// 3. undefined => undefined
// 4. null => null
// 5. boolean => true, false

// 7. symbol => Symbol
// 8. bigint => BigInt
// Примитивы

// 9. object => object, array, function
// Объекты:
// - составной (комбинированный) тип данных
// - ссылочный тип данных

console.log('hello from main.js');
console.log('ggg');
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2);

const users = [
  {
    id: 1,
    name: 'Bob',
    isStudent: true,
  },
  {
    id: 2,
    name: 'Alex',
    isStudent: true,
  },
  {
    id: 3,
    name: 'Ann',
    isStudent: true,
  },
  {
    id: 4,
    name: 'Donald',
    isStudent: true,
  },
];

const newUser = {
  id: 5,
  name: 'Farid',
  isStudent: true,
};

// Create - Read - Update - Delete (CRUD)

// const copyUsers = users.slice();
const copyUsers = users.concat();

const us = [...users, newUser];
// us[0].id = 12;
console.log(users);

console.log(us);

const changeUser = (user) =>
  user.id === 2 ? { ...user, isStudent: false } : user;

const updatedUsers = us.map(changeUser);
// const updatedUsers = us.map((user) =>
//   user.id === 2 ? { ...user, isStudent: false } : user
// );
console.log(updatedUsers);
const delUser = updatedUsers.filter((user) => user.id !== 4);
console.log(delUser);

const superUser = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

const superUserCopy = {
  ...superUser,
  company: { ...superUser.company, catchPhrase: 'hello' },
};

console.log(superUser);
console.log(superUserCopy);

const superUserCopy2 = {
  ...superUser,
  address: {
    ...superUser.address,
    geo: { ...superUser.address.geo, lat: -36, lng: 80 },
  },
};

console.log(superUserCopy2);

const superUserCopy3 = {
  ...superUser,
  email: 'brn2befree@hotmail.com',
};

console.log(superUserCopy3);
