// [Symbol.iterator]() {
//   let i = 0;
//   const messages = this.messages;
//   return {
//     next: () => i >= messages.length ?
//     {value: undefined, done: true} : {value: messages[i++], done: false}
//   }
// } /* [Symbol.iterator]の終わり */

[Symbol.iterator]() {
  return this.messages[Symbol.iterator]();
}
