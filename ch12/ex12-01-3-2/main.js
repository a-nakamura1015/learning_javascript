const book = [
  "ABCDEFG",
  "HIJKLMN",
  "OPQRSTU",
  "VWXYZ"
];

const it = book[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

/* 実行結果
{ value: 'ABCDEFG', done: false }
{ value: 'HIJKLMN', done: false }
{ value: 'OPQRSTU', done: false }
{ value: 'VWXYZ', done: false }
{ value: undefined, done: true }
{ value: undefined, done: true }
*/
