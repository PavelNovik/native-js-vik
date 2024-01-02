// publisher/subscriber

promise.then(function subscriber() {}); // резолв промиса
store.subscribe(function subscriber() {}); // стейт изменился
button.addEventListener('click', function subscriber() {}); // произошел клик
setTimeout(function subscriber() {}, 1000); // прошла секунда
useEffect(function subscriber() {}, []); // первый рендер

{
  /* <AppButton onClick={function subscriber() {}} /> */
}

button.addEventListener('click', axios.get1);
button.addEventListener('click', deleteFromList);

const button = {
  subscribers: {
    click: [],
    doubleClick: [],
    mouseIn: [],
    mouseOut: [],
  },
  addEventListener(eventNane, subscriber) {
    this.subscribers[eventNane] = this.subscribers[eventNane].filter(
      (sub) => sub != subscriber
    );
  },
  removeEventListener(eventNane, subscriber) {
    this.subscribers[eventNane].shift();
  },
  click() {
    this.subscribers['click'].forEach((subscriber) => subscriber());
  },
};

const consoleLog = () => {
  console.log('click');
};

button.addEventListener('click', consoleLog);

button.removeEventListener('click', consoleLog);
