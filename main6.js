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
