const book = [
  "ABCDEFG",
  "HIJKLMN",
  "OPQRSTU",
  "VWXYZ"
];

const it = book.values();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

/* 実行結果 ※Node.jsには未実装
const it = book.values();
                ^
TypeError: book.values is not a function
*/
