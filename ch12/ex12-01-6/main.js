class Log {
  constructor() {
    this.messages = [];
  }
  add(message) {
    const now = Date.now(); /* 現在時刻を表す整数。15章参照 */
    console.log(`ログ追加： ${message}(${now})`);
    this.messages.push({ message, timestamp: now });
  }
  [Symbol.iterator](){
    return this.messages.values();
  }
}

const log = new Log();
log.add("海の監視初日。勤務開始");
/* しばらくして(時間の経過をsetTimeoutを使ってシュミレート)　*/
setTimeout(function() {log.add("クジラを見た");}, 3*1000); /* 3秒後 */
/* しばらくして */
setTimeout(function() {log.add("一艘の船を見た");}, 7*1000);
/* ...... */
setTimeout(function() {log.add("監視終了");}, 9*1000);

setTimeout(function() {
  console.log(`-本日の業務報告- (${new Date()})`);
  for(let entry of log) {
    const date = new Date(entry.timestamp); /* 人間が読める形式に変換(15章参照) */
    console.log(`${entry.message} (${date})`);
  }
}, 10*1000); /* 10秒後 */

/* 実行結果
ログ追加： 海の監視初日。勤務開始(1508763114917)
ログ追加： クジラを見た(1508763117941)
ログ追加： 一艘の船を見た(1508763121942)
ログ追加： 監視終了(1508763123940)
-本日の業務報告- (Mon Oct 23 2017 21:52:04 GMT+0900 (JST))
/Users/arapon/Git/learning_javascript/the_12_chapter/ex12-01-6/main.js:11
    return this.messages.values();
                         ^
TypeError: this.messages.values is not a function
*/
