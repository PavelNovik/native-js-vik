const users = ['Alex', 'Olha', 'Maxim', 'oleg', 'игорь', 'bob'];

function bubbleSort(arr) {
  let c = 0;
  let n = arr.length;
  let swapped = true;
  while (swapped) {
    swapped = false;
    c++;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        c++;
      }
    }
    n--;
  }
  console.log(c);
  return arr;
}
// const num = [45, 12, 55, 2, 47];
const num = [1000, 47, 435, 56, 4, 10, -1];
bubbleSort(num);
// console.log(users.sort());
// console.log(users);
// console.log(users.toSorted());

// const num = [45, 12, 55, 2, 47];
// console.log(num.sort());
// console.log(num.sort((a, b) => a - b));

// const compareFunc = (a, b) => a - b;
// const compareFunc = (a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return +1;
//   }
// };

// console.log(num.sort(compareFunc));

// const compareFunc = (a, b) => {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return +1;
//   }
// };

// console.log(users.sort(compareFunc));

// const students = [
//   {
//     name: 'Bob',
//     age: 22,
//     isMarried: true,
//     scores: 121,
//   },
//   {
//     name: 'Alex',
//     age: 24,
//     isMarried: true,
//     scores: 89,
//   },
//   {
//     name: 'Olya',
//     age: 21,
//     isMarried: true,
//     scores: 91,
//   },
//   {
//     name: 'Nick',
//     age: 29,
//     isMarried: false,
//     scores: 91,
//   },
//   {
//     name: 'John',
//     age: 33,
//     isMarried: true,
//     scores: 90,
//   },
//   {
//     name: 'alex',
//     age: 22,
//     isMarried: true,
//     scores: 45,
//   },
// ];

// const compareFuncObj = (a, b) => {
//   if (a.scores < b.scores) {
//     return -1;
//   } else if (a.scores > b.scores) {
//     return 1;
//   } else if (a.age < b.age) {
//     return -1;
//   } else if (a.age > b.age) {
//     return 1;
//   }
// };

// // chat GPT
// function compareFuncObj2(a, b) {
//   if (a.scores !== b.scores) {
//     return a.scores - b.scores;
//   } else {
//     return a.age - b.age;
//   }
// }

// console.log(students.sort(compareFuncObj2));

// from lesson
// sorting, bubbleSorting

// const users = ["Alex", "Olha", "Maxim", "oleg", "bob"];
// const sortedUsers = users.sort();

// console.log(users === sortedUsers);

// const numbers = [1000, 47, 56, 4, 10, -1, 435];

// console.log(numbers.sort());

// const compareFunction = (a, b) => {
//   if (a > b) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(
//   numbers.sort((a, b) => {
//     if (a > b) {
//       return 3244;
//     }
//     if (a < b) {
//       return -453;
//     }
//     // return false;
//   })
// );

// const compareFunction = (a, b) => a - b;

// console.log(numbers.sort(compareFunction));

// const compareFunction = (a, b) => {
//   if (a.toLowerCase() > b.toLowerCase()) {
//     return 1;
//   } else {
//     return -1;
//   }
// };

// const users = ["Alex", "Olha", "Maxim", "oleg", "bob"];
// const sortedUsers = users.sort(compareFunction);
// console.log(sortedUsers);

const students = [
  {
    name: 'Bob',
    age: 22,
    isMarried: true,
    scores: 121,
  },
  {
    name: 'Alex',
    age: 24,
    isMarried: true,
    scores: 89,
  },
  {
    name: 'Olya',
    age: 21,
    isMarried: true,
    scores: 91,
  },
  {
    name: 'Nick',
    age: 29,
    isMarried: false,
    scores: 91,
  },
  {
    name: 'John',
    age: 33,
    isMarried: true,
    scores: 90,
  },
  {
    name: 'John',
    age: 33,
    isMarried: true,
    scores: 44,
  },
  {
    name: 'alex',
    age: 22,
    isMarried: true,
    scores: 45,
  },
];

const compareFunctionAge = (a, b) => {
  if (a.age - b.age) {
    return 1;
  } else if (b.age - a.age) {
    return -1;
  }
  return 0;
};

const compareFunctionScore = (a, b) => {
  if (a.scores - b.scores) {
    return 1;
  } else if (b.scores - a.scores) {
    return -1;
  }
  return 0;
};
// console.log(students);
// console.log(students.toSorted(compareFunctionAge));
// console.log(
//   students.toSorted(compareFunctionAge).toSorted(compareFunctionScore)
// );

// const compareFuncObj = (a, b) => {
//   if (a.age < b.age) {
//     return -1;
//   } else if (a.age > b.age) {
//     return 1;
//   } else if (a.scores < b.scores) {
//     return -1;
//   } else if (a.scores > b.scores) {
//     return 1;
//   }
// };

// // console.log(students.toSorted(compareFuncObj));

// function foo(a, b) {
//   if (a.age !== b.age) {
//     return a.age - b.age;
//   } else {
//     return a.scores - b.scores;
//   }
// }

// console.log(students.toSorted(foo));

// 1m = 10dm
// 1m(2) = 1m * 1m = 10dm * 10dm = 100dm(2)
// 36m(2) = 3600dm(2) // 360000

const numbers = [-1, 4, 10, 435, 1000, 47, 56];

let count = 0;

for (let j = 0; j <= numbers.length - 1; j++) {
  count++;
  let isSorlet = true;
  for (let i = 0; i <= numbers.length - 1 - j; i++) {
    count++;
    if (numbers[i] > numbers[i + 1]) {
      // let temp = numbers[i];
      // numbers[i] = numbers[i + 1];
      // numbers[i + 1] = temp;
      [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]];
      isSorlet = false;
    }
  }
  if (isSorlet) break;
}

// const [id, setId] = useState();

console.log(numbers);
console.log(count);
// 72
// 64
// 56
// 35
