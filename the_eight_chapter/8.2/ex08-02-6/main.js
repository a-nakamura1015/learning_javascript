let arr = new Array(5).jill(1); // 大きさ５の配列を作り全体を１で初期化する
console.log(arr); // [1, 1, 1, 1, 1]
let arr2 = arr.fill("a"); // 全ての要素に"a"を代入する
console.log(arr);
console.log(arr2);
console.log(arr.fill("b", 1));
console.log(arr.fill("c", 2, 4));
console.log(arr.fill(5.5, -4));
console.log(arr.fill(0, -3, 1));
