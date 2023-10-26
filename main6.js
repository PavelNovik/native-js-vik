const app = document.querySelector('.app');

// app.append('');

const students = [
  {
    id: 1,
    name: 'Bob',
    age: 22,
    isMarried: true,
    scores: 85,
    // к 14 задаче: friends: ["Alex", "Nick", "John", "Helen", "Ann"]
  },
  {
    id: 2,
    name: 'Alex',
    age: 21,
    isMarried: true,
    scores: 90,
  },
  {
    id: 3,
    name: 'Nick',
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    id: 4,
    name: 'John',
    age: 19,
    isMarried: false,
    scores: 100,
  },
  {
    id: 5,
    name: 'Helen',
    age: 20,
    isMarried: false,
    scores: 110,
  },
  {
    id: 6,
    name: 'Ann',
    age: 20,
    isMarried: false,
    scores: 105,
  },
];

const user = {
  name: 'Bob',
  age: 23,
  friends: ['Alex', 'Nick', 'John'],
};

const superUser = {
  name: 'Bob',
  age: 23,
  friends: [
    {
      id: 1,
      name: 'Ann',
      age: 22,
      isMarried: true,
      scores: 85,
    },
    {
      id: 2,
      name: 'Alex',
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      id: 4,
      name: 'John',
      age: 19,
      isMarried: false,
      scores: 100,
    },
  ],
};
// NB!!! Все преобразования выполняем иммьютабельно, если не сказано иное

//1. Создайте полную (глубокую) копию объекта user
let deepCopyUser = { ...user, friends: [...user.friends] };
// console.log(deepCopyUser);

//2. Создайте полную (глубокую) массива students
let deepCopyStudents = students.map((s) => ({ ...s }));
// console.log(deepCopyStudents);

//3. Создайте полную (глубокую) копию объекта superUser
let deepCopySuperUser = {
  ...superUser,
  friends: superUser.friends.map((f) => ({ ...f })),
};
// console.log(deepCopySuperUser);

//4. Отсортируйте students по успеваемости (лучший идёт первым)(sort)

// let sortedByScores = students.sort((a, b) => a.scores - b.scores);
let sortedByScores1 = students.toSorted((a, b) => a.scores - b.scores);
// console.log(sortedByScores);

//5. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = students.filter((s) => s.scores >= 100);
// console.log(bestStudents);

//6. Сформируйте массив имён студентов (map)
let studentsNames = students.map((s) => s.name);
// console.log(studentsNames);

//7. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map((s) => ({ ...s, isStudent: true }));
// console.log(trueStudents);

//8. Nick женился. Выполните соответствующие преобразование массива
// students (map)
let studentsWithMarriedNick = students.map((s) =>
  s.name === 'Nick' ? { ...s, isMarried: true } : s
);
// console.log(studentsWithMarriedNick);

// Внесите  следующие изменения в объект superUser:
// NB!!! Все преобразования выполняем иммьютабельно, если не сказано иное

//9.Удалите объект с id=1 из массива  friends
let superUserCorrect1 = {
  ...superUser,
  friends: superUser.friends.filter((f) => f.id !== 1),
};

// console.log(superUserCorrect1);

//10. поменяйте объекту с id=2 из массива  friends значение св-ва name на
// "Donald"
let superUserCorrect2 = {
  ...superUser,
  friends: superUser.friends.map((f) =>
    f.id === 2 ? { ...f, name: 'Donald' } : f
  ),
};
// console.log(superUserCorrect2);

//11. добавьте в список друзей нового друга
const newFriend = {
  id: 5,
  name: 'Nick',
  age: 27,
  isMarried: false,
  scores: 99,
};
let superUserCorrect3 = {
  ...superUser,
  friends: [...superUser.friends, newFriend],
};
// console.log(superUserCorrect3);

// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом не используя методы массивов и
// Math.max()*
let bestStudent;
// for (let i = 0; i < students.length - 1; i++) {
//   if (students[i].scores > students[i + 1].scores) {
//     bestStudent = students[i];
//     students[i] = students[i + 1];
//     students[i + 1] = bestStudent;
//   }
// }
const bestStudent2 = () => {
  let bS = students[0];
  for (let i = 1; i < students.length - 1; i++) {
    if (students[i].scores > bS.scores) {
      bS = students[i];
    }
  }
  return bS;
};

// console.log(bestStudent2());
// console.log(bestStudent);

//13. Найдите сумму баллов всех студентов (reduce)*
let scoresSum = students.reduce((acc, s) => (acc += s.scores), 0);
// console.log(scoresSum);

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
  return students.map((s) => ({
    ...s,
    friends: students.map((s) => s.name).filter((f) => f !== s.name),
  }));
};
// console.log(addFriends(students));

// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив students  и количество лучших студентов, которое надо получить в
// новом массиве. Если второго параметра нет, то по умолчанию возвращает лучшего студента
// getBestStudents(students) => {name: "Nick", age: 20, isMarried: false, scores: 120}
// getBestStudents(students, 3) => [{...}, {...}, {...}]
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]

function getBestStudents(studentsArray, quantity = 0) {
  let res = [];
  const arr = studentsArray.toSorted((a, b) => b.scores - a.scores);
  //   if (quantity > 0) {
  //     for (let i = 0; i < quantity; i++) {
  //       res.push(arr[i] ? arr[i] : null);
  //     }
  //   } else return arr[0];
  //   return res;

  return arr.concat(new Array(quantity - arr.length).fill(null));

  //   const nullArr = new Array(quantity).fill(null);
  //   return nullArr.forEach((el, i) =>
  //     i < arr.length ? (return el = arr[i]) : (el = el)
  //   );
}

console.log(getBestStudents(students, 10));
// console.log(getBestStudents(students, 1));
// console.log(getBestStudents(students));

// const students = [
//   {
//     name: "Bob",
//     age: 22,
//     isMarried: true,
//     scores: 85,
//   },
//   {
//     name: "Alex",
//     age: 21,
//     isMarried: true,
//     scores: 90,
//   },
//   {
//     name: "Nick",
//     age: 20,
//     isMarried: false,
//     scores: 120,
//   },
//   {
//     name: "John",
//     age: 19,
//     isMarried: false,
//     scores: 100,
//   },
//   {
//     name: "Helen",
//     age: 20,
//     isMarried: false,
//     scores: 110,
//   },
//   {
//     name: "Ann",
//     age: 20,
//     isMarried: false,
//     scores: 105,
//   },
// ];

// const user = {
//   name: "Bob",
//   age: 23,
//   isMarried: false,
//   friends: ["Alex", "Nick", "John"],
// };

// https://www.dev-notes.ru/articles/deep-copying-using-structured-clone/

// //1. Поверхностная копия student
// const copyUser = { ...user }; // Object
// console.log(user === copyUser);
// console.log(user.friends === copyUser.friends);

// //2. Полная (глубокая) копия student
// const deepCopyStudent = { ...user, friends: [...user.friends] };
// console.log(user === deepCopyStudent);
// console.log(user.friends === deepCopyStudent.friends);

// //3. Поверхностная копия students
// const copyStudents = [...students];
// slice()
// console.log(students === copyStudents);
// console.log(students[0] === copyStudents[0]);

// //4*. Полная (глубокая) копия students
// const deepCopyStudents = students.map((st) => ({ ...st }));
// console.log(students === deepCopyStudents);
// console.log(students[0] === deepCopyStudents[0]);
// console.log(students);
// console.log(deepCopyStudents);

// //Далее все преобразования выполняем не модифицируя исходный массив students

// //5. Отсортируйте студентов по успеваемости (лучший идёт первым)
// console.log(deepCopyStudents.sort((a, b) => b.scores - a.scores));
// //5a. Отсортируйте студентов по алфавиту
// function sortByName(a, b) {
//   switch (a.name > b.name) {
//     case true:
//       return 1;
//     case false:
//       return -1;
//     default:
//       return 0;
//   }
// }
// // const sortedByName = deepCopyStudents.sort((a, b) => a.name >= b.name ? 1 : -1);
// const sortedByName = students.sort((a, b)=> a.name.localeCompare(b.name));
// console.log(sortedByName);

// //6. Сформируйте массив студентов, у которых 100 и более баллов
// const bestStudents = students.filter((st) => st.scores >= 100);
// console.log(bestStudents);

// //6a.Сформируйте массив из трёх лучших студентов
// // const topStudents = deepCopyStudents.splice(0, 3);
// // console.log(topStudents);
// // console.log(deepCopyStudents);

// //6b. Объедините массивы deepCopyStudents и topStudents так,
// // чтоб сохранился порядок сортировки
// const newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
// console.log(newDeepCopyStudents);

// //7. Сформируйте массив холостых студентов
// const notMarriedStudents = students.filter((st) => !st.isMarried);
// console.log(notMarriedStudents);

// //8. Сформируйте массив имён студентов
// const studentsNames = students.map((st) => st.name);
// console.log(studentsNames);
// //8a. Сформируйте строку из имён студентов, разделённых
// // - пробелом
// // - запятой
// const nameWithSpace = studentsNames.join(" ");
// console.log(nameWithSpace);
// const namesWithComma = studentsNames.join(", ");
// console.log(namesWithComma);

// //9. Добавьте всем студентам свойство "isStudent" со значением true
// const trueStudents = students.map((st) => ({ ...st, isStudent: true }));
// console.log(trueStudents);

// //10. Nick женился. Выполните преобразование массива students
// // let studentsWithMarriedNick = students.map(st => st.name === "Nick" ? {...st, isMarried: true} : st);
// const studentsWithMarriedNick = students.map((st) => {
//   if (st.name === "Nick") {
//     return { ...st, isMarried: true };
//   }
//   return st;
// });
// console.log(studentsWithMarriedNick);

// //11. Найдите Студентку по имени Ann
// const ann = students.find((st) => st.name === "Ann");
// console.log(ann);
// console.log(students);

// //12. Найдите студента с самым высоким баллом
// const bestStudent = students.reduce((acc, st) => {
//   return acc.scores > st.scores ? acc : st;
// });
// console.log(bestStudent);
// //12a. Найдите 2 студента с самым высоким баллом
// let bestStudent = students[0];
// let bestStudent2 = students[1];
// for (let i=1; i < students.length; i++) {
//     if (bestStudent.scores > bestStudent2.scores) {
//         if (students[i].scores > bestStudent2.scores) {
//             bestStudent2 = students[i];
//         }
//     }  else {
//         if (students[i].scores > bestStudent.scores) {
//             bestStudent = students[i];
//         }
//     }

// }
// let best1 = students[0]
// let best2 = students[0]

// for (let i = 0; i < students.length; i++) {
//     if (students[i].scores > best1.scores) {
//         best1 = students[i]

//     } else  if (students[i].scores > best2.scores ){
//         best2 = students[i]
//     }

// }

// //13. Найдите сумму баллов всех студентов
// const scoresSum = students.reduce((acc, st) => acc + st.scores, 0);
// console.log(scoresSum);

// // 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

// // function addFriends(students) {
// //     const studentsNames = students.map(st => st.name)
// //     function getFriendsList(student){
// //         const friendsList = studentsNames.filter(name => student.name !== name)
// //         return friendsList
// //     }
// //     const studentsWithFriends = students.map(st => {
// //         return {...st, friends: getFriendsList(st)}
// //     })
// //     return studentsWithFriends

// // }
// const addFriends = (sts) => {
//   return sts.map((st) => ({
//     ...st,
//     friends: sts.map((st) => st.name).filter((name) => name !== st.name),
//   }));
// };

// console.log(addFriends(students));

console.log('Hello');
//1. Реализуйте функцию, которая принимает параметром подстроку, число повторов и разделитель,
// а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// repeatString("yo", 3, ", ") => "yo, yo, yo"
// repeatString("yo", 0, ", ") => ""
// repeatString("yo", 1, ", ") => "yo"

const repeatString = (str, x, div) => {
  //   return (str + ' ').repeat(x).trim().replaceAll(' ', div);
  return new Array(x).fill(str).join(div);
};

// console.log(repeatString('yo', 3, ' '));
// console.log(repeatString('yo', 3, ','));
// console.log(repeatString('yo', 3, ', '));

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку,
// а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

const checkStart = (str, chr) => {
  //   return str.toLowerCase().startsWith(chr);
  return !str.toLowerCase().indexOf(chr.toLowerCase());
};
console.log(checkStart('Incubator', 'inc'));
console.log(checkStart('Incubator', 'yo'));
console.log(checkStart('Incubator', 'nc'));

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов),
// а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, n) => {
  return str.slice(0, n) + '...';
};

// console.log(truncateString('Всем студентам инкубатора желаю удачи!', 10));

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении,
// если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// getMinLengthWord(true) => null
// getMinLengthWord(undefined) => null

const getMinLengthWord = (str) => {
  return typeof str === 'string' && str
    ? str.split(' ').toSorted((a, b) => a.length - b.length)[0]
    : null;
};

console.log(getMinLengthWord('Всем студентам инкубатора желаю удачи.'));
// console.log(getMinLengthWord(''));
// console.log(getMinLengthWord(123));
// console.log(getMinLengthWord(true));
// console.log(getMinLengthWord(undefined));

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((c) => c.replace(c[0], c[0].toUpperCase()))
    .join(' ');
};

console.log(setUpperCase('всем стУдентам инкуБатора Желаю удачИ'));
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

// const isIncludes = (str, sub) => {
//   const lowStr = str.toLowerCase();
//   return !sub
//     .toLowerCase()
//     .split('')
//     .map((el) => lowStr.includes(el))
//     .includes(false);
// };

const isIncludes = (str, sub) => {
  const lowStr = str.toLowerCase();
  for (let i = 0; i < sub.length; i++) {
    if (!lowStr.includes(sub[i].toLowerCase())) {
      return false;
    }
  }
  return true;
};

console.time('you');
console.log(isIncludes('Incubator', 'Cut'));
console.timeEnd('you');
console.log(isIncludes('Incubator', 'table'));
console.log(isIncludes('Incubator', 'inbba'));
console.log(isIncludes('Incubator', 'inba'));
console.log(isIncludes('Incubator', 'Incubatorrr'));
