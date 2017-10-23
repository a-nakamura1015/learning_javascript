function* interrogate() { /* 質問する */
  const name = yield "What is your Name?";
  const color = yield "What is your favorite colors?";
  return `It is said ${name} is favorite color is ${color}.`;
}

const it = interrogate(); /* イテレータが返る */
console.log(it.next()); /* 最初の一回は値を渡さない(渡しても無視される) */
console.log(it.next('Kaede'));
console.log(it.next('green'));
console.log(it.next());

/* 出力結果
{ value: 'What is your Name?', done: false }
{ value: 'What is your favorite colors?', done: false }
{ value: 'It is said Kaede is favorite color is green.',
  done: true }
{ value: undefined, done: true }
*/
