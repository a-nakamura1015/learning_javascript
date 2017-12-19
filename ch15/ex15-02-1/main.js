let d = new Date(); /* 現在の日付 */
console.log(d); //

/* JavaScriptでは月が0から始まることに注意。0=1月、1=2月、… */
d = new Date(2017, 0);
console.log(d);
d = new Date(2017, 1);
console.log(d);
d = new Date(2017, 1, 14);
console.log(d);
d = new Date(2017, 1, 14, 13);
console.log(d);
d = new Date(2017, 1, 14, 13, 30);
console.log(d);
d = new Date(2017, 1, 14, 13, 30, 5);
console.log(d);
d = new Date(2017, 1, 14, 13, 30, 5, 500);
console.log(d);

// UNIXエボックのタイムスタンプから経過した日時を生成
d = new Date(0);
console.log(d);
d = new Date(1000);
console.log(d);
d = new Date(1463443200000);
console.log(d);

// UNIXエボック以前の日時を取得するため、負の日時を指定
d = new Date(-365*24*60*60*1000);
console.log(d);

// 日時を表す文字越(英語表現)を指定(現地時刻になる)
d = new Date('June 14, 1903');
console.log(d);
d = new Date('June 14, 1903 GMT-0000');
console.log(d);
d = new Date('2020年7月10日');
console.log(d);

/* 実行結果 
2017-12-18T22:18:41.481Z
2016-12-31T15:00:00.000Z
2017-01-31T15:00:00.000Z
2017-02-13T15:00:00.000Z
2017-02-14T04:00:00.000Z
2017-02-14T04:30:00.000Z
2017-02-14T04:30:05.000Z
2017-02-14T04:30:05.500Z
1970-01-01T00:00:00.000Z
1970-01-01T00:00:01.000Z
2016-05-17T00:00:00.000Z
1969-01-01T00:00:00.000Z
1903-06-13T15:00:00.000Z
1903-06-14T00:00:00.000Z
Invalid Date
*/
