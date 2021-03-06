class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}

this.hoge = "aaa";

Person.nextId = 0;
const 一郎 = new Person("一郎"), /* id 0 */
      二郎 = new Person("二郎"), /* id 1 */
      三郎 = new Person("三郎"), /* id 2 */
      四郎 = new Person("四郎"); /* id 3 */
const arr = [一郎, 二郎, 三郎, 四郎];

/* 1. IDを使って直接比較 */
console.log(arr.find(p => p.id === 三郎.id)); // Person { name: '三郎', id: 2 }
/* 2. this を利用。thisを定数「三郎」に指定 */
console.log(arr.find(function(p) {return p.id === this.id}, 三郎));
// Person { name: '三郎', id: 2 }
/* アロー関数ではthisは「語彙的に(lexically)」に束縛される(6章参照) */
console.log(arr.find(p => p.id === this.id, 三郎)); // undefined

console.log(arr.find(p => 
  console.log("this.hoge = " + this.hoge); 
  console.log("this = " + this);
   p.id === this.id, 三郎));
   /* 無名関数の中のthisはグローバルを指す */
   /* アロー関数の中のthisはモジュールを指す */