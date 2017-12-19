const before = {d: new Date().valueOf()};
console.log(before.d);
console.log(typeof before.d);
const json = JSON.stringify(before);
console.log(json);
const after = JSON.parse(json);
console.log(after);
console.log(typeof after.d);
const d = new Date(after.d);
console.log(d);

/* 実行結果
1513636407373
number
{"d":1513636407373}
{ d: 1513636407373 }
number
2017-12-18T22:33:27.373Z
*/
