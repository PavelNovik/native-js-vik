// startEngine2();
var car2 = 'kia';
let car = 'BMW';

function startEngine() {
  console.log(`Start engine ${car}`);
}
function startEngine2() {
  console.log(`Start engine ${car2}`);
}
const startEngine3 = function () {
  console.log(`Start engine ${car2}`);
};
// startEngine3();

// startEngine();

car = 'Audi';

// startEngine();

const counterCreator = () => {
  let count = 0;
  return () => console.log(++count);
};

const counter = counterCreator();
const counter1 = counterCreator();
const counter2 = counterCreator();
// counter();
// counter();
// counter();
// counter1();
// counter1();
// counter1();
// counter2();
// counter2();
// counter2();

// console.log(Math.pow(2, 4));

function feb(x) {
  if (x <= 1) {
    return x;
  } else return feb(x - 1) + feb(x - 2);
}

console.log(feb(6));
