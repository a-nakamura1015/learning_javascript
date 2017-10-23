const book = [
  "ABCDEFG",
  "HIJKLMN",
  "OPQRSTU",
  "VWXYZ"
];

const it = book.values();
let current = it.next();
while(!current.done) {
  console.log(current.value);
  current = it.next();
}
/*　実行結果　※Node.jsでは未実装
const it = book.values();
                ^
TypeError: book.values is not a function
*/
