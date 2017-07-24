let arr = [11, 12, 13, 14, 15];
let arr2 = arr.slice(3); // arr(3)から後ろ
console.log(arr2); // [14, 15]
console.log(arr); // [11, 12, 13, 14, 15]
arr2 = arr.slice(2, 4); // arr[2]からarr[4]の一つ前まで
console.log(arr2); // [13, 14]
arr2 = arr.slice(-2); // 最後から２番目以降
console.log(arr2); // [14, 15]
arr2 = arr.slice(1, -2); //arr[1]から、最後から２番目の一つ前まで
console.log(arr2); // [12, 13]
arr2 = arr.slice(-2, -1);
console.log(arr2); // [14]
