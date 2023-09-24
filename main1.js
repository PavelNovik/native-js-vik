const students = [
  {
    name: 'Bob',
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: 'Alex',
    age: 21,
    isMarried: true,
    scores: 89,
  },
  {
    name: 'Nick',
    age: 20,
    isMarried: false,
    scores: 120,
    // isStudent: true
  },
  {
    name: 'John',
    age: 19,
    isMarried: false,
    scores: 100,
  },
];

const names = students.map((s) => s.name);

const names1 = [];
students.forEach((s) => {
  names1.push(s.name);
});

console.log(names);
console.log(names1);

const getStudentsName = (array) => {
  const result = [];
  const getValueForResultArray = (el) => el.name;

  for (let i = 0; i < array.length; i++) {
    result[i] = getValueForResultArray(array[i]);
  }
  return result;
};

console.log(getStudentsName(students));

const getUpdatedUsers = (array) => {
  const result = [];
  const getValueForResultArray = (el) => ({ ...el, isStudent: true });
  for (let i = 0; i < array.length; i++) {
    result.push(getValueForResultArray(array[i]));
  }
  return result;
};

console.log(getUpdatedUsers(students));

const getFilteredStudents = (array, func) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (func(array[i]) === true) {
      result.push(array[i]);
    }
  }
  return result;
};

console.log(getFilteredStudents(students, (st) => st.scores >= 100));
console.log(students.filter((st) => st.scores >= 100));

// this - контекст вызова; тот, кто будет использовать в качестве метода; тот кто стоит перед точкой

function getFilteredStudentsWithContext(func) {
  const result = [];
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    result.push(func(this[i]));
  }
  return result;
}
Array.prototype.myMap = getFilteredStudentsWithContext;

console.log(students.myMap((el) => el.name));

console.log(students.__proto__ === Array.prototype);
console.dir(students);

const student = {
  name: 'Dave',
  age: 29,
  isMarried: false,
  scores: 110,
};
const student1 = {
  name: 'Kally',
  age: 29,
  isMarried: false,
  scores: 110,
};
const student2 = {
  name: 'Billy',
  age: 29,
  isMarried: false,
  scores: 110,
};

console.log(students.push(student));
console.log(students);

const myPush = (array, el) => {
  array[array.length] = el;
  return array.length;
};

console.log(myPush(students, student1));
console.log(students);

const myPush2 = (arr, el) => {
  arr = [...arr, el];
  return arr.length;
};

console.log(myPush2(students, student2));
console.log(students);

const mySlice = (arr, start = 0, end = arr.length) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
};

const arrrr = [1, 2, 3, 4, 5, 6];

console.log(mySlice(arrrr));
console.log(mySlice(arrrr, 1, 3));

console.group(mySlice(arrrr), mySlice(arrrr, 1, 3));
