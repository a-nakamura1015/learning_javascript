function* rainbow() {
  yield `red`;
  yield `orange`;
  yield `yellow`;
  yield `green`;
  yield `blue`;
  yield `lightBlue`;
  yield `parple`;
}

const it = rainbow(); /* イテレータを取得 */
console.log(it.next()); // { value: 'red', done: false }
console.log(it.next()); // { value: 'orange', done: false }
console.log(it.next()); // { value: 'yellow', done: false }
console.log(it.next()); // { value: 'green', done: false }
console.log(it.next()); // { value: 'blue', done: false }
console.log(it.next()); // { value: 'lightBlue', done: false }
console.log(it.next()); // { value: 'parple', done: false }
console.log(it.next()); // { value: undefined, done: true }
console.log(it.next()); // { value: undefined, done: true }

for (let color of rainbow()) {
  console.log(color);
}
/* 実行結果
red
orange
yellow
green
blue
lightBlue
parple
*/
