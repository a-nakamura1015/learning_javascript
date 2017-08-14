const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4};
for (let prop in o) {
    if (!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}: ${o[prop]}`);
}
/* 実行結果 (キーがシンボルであるプロパティはリストされない)
Arata-no-MacBook-Pro:ex09-01-1 arapon$ node main.js
a: 1
b: 2
c: 3
*/
