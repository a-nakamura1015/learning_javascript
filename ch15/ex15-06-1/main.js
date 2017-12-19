const before = {d: new Date()};
console.log(before.d);
console.log(before.d instanceof Date);
const json = JSON.stringify(before);
console.log(json);
const after = JSON.parse(json);
console.log(after.d instanceof Date);
console.log(typeof after.d);
console.log(after.d);
after.d = new Date(after.d);
console.log(after.d instanceof Date);
console.log(after.d);

/* 実行結果
2017-12-18T22:29:03.921Z
true
{"d":"2017-12-18T22:29:03.921Z"}
false
string
2017-12-18T22:29:03.921Z
true
2017-12-18T22:29:03.921Z
*/
