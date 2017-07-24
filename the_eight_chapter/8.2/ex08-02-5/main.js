let arr = [11, 12, 13, 14];
let arr2 = arr.copyWithin(1, 2); // arr[1]の位置から置き換える。arr[2]から最後までコピーする
console.log(arr); // [11, 13, 13, 14]
console.log(arr2) // [11, 13, 13, 14] ← copyWithinはオブジェクト自身を返す
console.log(arr.copyWithin(2, 0, 2)); // [11, 13, 11, 13]
console.log(arr.copyWithin(0, -3, -1)); // [13, 11, 11, 13]
console.log(arr2); // [13, 11, 11, 13]
