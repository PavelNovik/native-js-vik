console.log('generators');

function* name(arguments) {
  //
  return {
    value: value,
    done: true / false,
  };
}

function generateSalaryWithBonus(salary) {
  return salary + (salary / 100) * 15;
}

console.log(generateSalaryWithBonus(2000));

function* generateSalaryWithBonus2(salary) {
  //
  //
  yield salary + (salary / 100) * 15;
  //
  //
  yield salary + (salary / 100) * 20;
  yield salary + (salary / 100) * 25;
  //
  // явный return завершает выполнение функции генератора
  // вернет {value: value,
  // done: true }

  yield salary + (salary / 100) * 30;
  yield salary + (salary / 100) * 35;
}
console.log(generateSalaryWithBonus2(3000));

const generator = generateSalaryWithBonus2(3000);

console.log('sss');
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

console.log('sss222');

// function* gen() {
//   let ask1 = yield '2 + 2?';
//   alert(ask1);
//   let ask2 = yield '3 * 3?';
//   alert(ask2);
// }
// let generator2 = gen();
// alert(generator2.next().value);
// alert(generator2.next(4).value);
// alert(generator2.next(9).done);
