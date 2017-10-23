function* abc() {
  yield 'a';
  yield 'b';
  return 'c';
}

const it = abc();
console.log(it.next());
console.log(it.next());
console.log(it.next());
/* 実行結果
{ value: 'a', done: false }
{ value: 'b', done: false }
{ value: 'c', done: true }
*/
