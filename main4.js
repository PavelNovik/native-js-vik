const todoId_1 = '1';
const todoId_2 = '2';

const todolists = [
  { id: todoId_1, title: 'What to learn' },
  { id: todoId_2, title: 'What to buy' },
];

const tasks = {
  [todoId_1]: [
    { id: 11, title: 'HTML' },
    { id: 12, title: 'CSS' },
    { id: 13, title: 'JS/TS' },
  ],

  [todoId_2]: [
    { id: 21, title: 'MILK' },
    { id: 22, title: 'BREAD' },
    { id: 23, title: 'COFFEE' },
  ],
};

const newTask = {
  id: 14,
  title: 'REACT',
};

const updatedTasks = {
  ...tasks,
  [todoId_2]: [...tasks[todoId_2], newTask],
};

// console.log(updatedTasks);
// console.log(tasks);

updatedTasks[todoId_1][1] = 'Xyu';
updatedTasks[todoId_2][1] = 'Xyu';
// console.log('first object', tasks);
// console.log('-------');
// console.log('second object', updatedTasks);
const arr = [1, 1, 1, 2, 3, 4, 2, 2, 6, 8, 79, 79, 45];
console.log(
  arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc.push(num);
    }
    return acc;
  }, [])
);

const obj = arr.reduce((acc, item) => {
  if (Object.keys(acc).includes(String(item))) {
    ++acc[item];
  } else {
    acc[item] = 1;
  }
  return acc;
}, {});

console.log(
  arr.reduce((acc, item) => {
    return { ...acc, [item]: arr.filter((a) => a === item).length };
  }, {})
);

// const todoId1 = "1";
// const todoId2 = "2";

// const todoList = [
//   {
//     id: todoId1,
//     title: "what to learn",
//   },
//   {
//     id: todoId2,
//     title: "what to buy",
//   },
// ];

// console.log(todoList);

// const tasks = [
//   { id: 11, todoId: 1, task: "html" },
//   { id: 12, todoId: 1, task: "css" },
//   { id: 11, todoId: 1, task: "js/ts" },
//   { id: 21, todoId: 2, task: "bread" },
//   { id: 22, todoId: 2, task: "milk" },
//   { id: 23, todoId: 2, task: "eags" },
// ];

// const getKey = (string) => `user${string}`;

// const tasks = {
//   [todoId1]: [
//     { id: 11, task: "html" },
//     { id: 12, task: "css" },
//     { id: 11, task: "js/ts" },
//   ],
//   [todoId2]: [
//     { id: 21, task: "bread" },
//     { id: 22, task: "milk" },
//     { id: 23, task: "eags" },
//   ],
//   [10 + 12]: [1, 2, 3],
//   [getKey("Name")]: [],
//   [getKey("Id")]: [],
// };

//delete task id 22

// tasks[todoId2].filter((item) => item.id !== 22);

// add new task to todoId2 task: 'chocolate' id: 24

// const newTasks = {
//   ...tasks,
//   [todoId2]: [...tasks[todoId2], { id: 24, title: "chocolate" }],
// };

// console.log(newTasks);

// reduce

// const arr = [1, 2, 3, 4, 5, 4, 4, 4, 6, 5, 5];

// let sum = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   sum = sum + arr[i];
// }

// console.log("sum", sum);

// console.log(
//   arr.reduce((acc, number) => {
//     if (number % 2 === 0) {
//       acc.push(number);
//     }
//     return acc;
//   }, [])
// );

// console.log(arr.reduce((acc, number) => acc + number));

// const obj = arr.reduce((acc, item) => {
//   if (Object.keys(acc).includes(String(item))) {
//     ++acc[item];
//   } else {
//     acc[item] = 1;
//   }
//   return acc;
// }, {});

// console.log("obj", obj);

// console.log(
//   arr.reduce((acc, item) => {
//     return { ...acc, [item]: arr.filter((a) => a === item).length };
//   }, {})
// );
