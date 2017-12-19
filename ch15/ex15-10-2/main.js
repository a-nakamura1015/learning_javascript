const dates = [];
const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min; // 差

/* 2017/1/1から2020/1/1の間の日時をランダムに生成して、datesに記憶 */
for (let i = 0; i < 10; i++)
  dates.push(new Date(min + delta * Math.random()));

printDates(dates);
console.log("----");
dates.sort((a, b) => b - a); // 降順にソート
printDates(dates);
console.log("----");
dates.sort((a, b) => a - b); // 昇順にソート
printDates(dates);

function printDates(dates) {
  for (let i = 0; i < dates.length; i++) {
    const d = dates[i];
    console.log(i + ". " + d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日");
  }
}

/* 実行結果
0. 2019年3月11日
1. 2018年12月18日
2. 2017年10月13日
3. 2018年7月31日
4. 2017年7月10日
5. 2017年12月7日
6. 2018年9月4日
7. 2019年5月20日
8. 2019年5月6日
9. 2018年7月6日
----
0. 2019年5月20日
1. 2019年5月6日
2. 2019年3月11日
3. 2018年12月18日
4. 2018年9月4日
5. 2018年7月31日
6. 2018年7月6日
7. 2017年12月7日
8. 2017年10月13日
9. 2017年7月10日
----
0. 2017年7月10日
1. 2017年10月13日
2. 2017年12月7日
3. 2018年7月6日
4. 2018年7月31日
5. 2018年9月4日
6. 2018年12月18日
7. 2019年3月11日
8. 2019年5月6日
9. 2019年5月20日
*/
