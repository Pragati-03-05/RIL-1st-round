// Import stylesheets
import './style.css';

// Write Javascript code!
let ob = {
  Company: 'AJIO',
  Address: 'BLR',
  contact: +91 - 999999999,
  mentor: {
    HTML: 'AJIO',
    CSS: 'AJIO',
    JavaScript: 'AJIO',
    obj2: {
      name: 'Test',
      age: {
        firstage: 25,
      },
    },
  },
};
let res = {};
let r = '';
function test(ob, x) {
  for (let i in ob) {
    if (typeof ob[i] === 'object') {
      r = x ? `${x}.` + i : i;
      test(ob[i], r);
    } else {
      res[x ? `${x}.` + i : i] = ob[i];
    }
  }
  return res;
}
console.log('result is', test(ob, ''));
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
