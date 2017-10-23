const book = [
  "ABCDEFG",
  "HIJKLMN",
  "OPQRSTU",
  "VWXYZ"
];

const it1 = book.values();
const it2 = book.values();

/* 実行結果　※Node.jsでは未実装
const it1 = book.values();
                 ^
TypeError: book.values is not a function
8/
