console.log('Hello');

const big = document.querySelector('#big');
const medium = document.querySelector('#medium');
const small = document.querySelector('#small');

big.addEventListener(
  'click',
  (e) => console.log('big', e.currentTarget, e.target),
  false
);
medium.addEventListener(
  'click',
  (e) => console.log('medium', e.currentTarget, e.target),
  true
);
small.addEventListener(
  'click',
  (e) => {
    e.stopPropagation();
    console.log('small', e.currentTarget, e.target);
  },
  false
);

// big.addEventListener('click', (e) => {
//   console.log('big', e.currentTarget);
// });
// medium.addEventListener('click', (e) => {
//   console.log('medium', e.currentTarget);
// });
// small.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('small', e.currentTarget);
// });

// big.addEventListener('click', (e) => console.log('big', e.target));
// medium.addEventListener('click', (e) => console.log('medium', e.target));
// small.addEventListener('click', (e) => console.log('small', e.target));

// big.addEventListener('click', (e) => {
//   if (e.target.id === 'big') {
//     console.log('big', e);
//     e.target.style = 'background-color: red';
//   }
// });
// medium.addEventListener('click', (e) => {
//   if (e.target.id === 'medium') {
//     console.log('medium', e);
//     e.target.style = 'background-color: white';
//   }
// });
// small.addEventListener('click', (e) => {
//   if (e.target.id === 'small') {
//     console.log('small', e);
//     e.target.style = 'background-color: black';
//   }
// });

// small.addEventListener('click', () => console.log('helllllo'));
// small.removeEventListener('click', () => console.log('helllllo'));

// big.onclick = () => console.log('clcick');
// big.onclick = null;

document.getElementById('a').addEventListener('click', (e) => {
  e.preventDefault();
  console.log(confirm('Are you shure to escape this page'));
  console.log(prompt('What new you known', 'nothing'));
});
