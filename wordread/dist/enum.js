// 枚举:ts对基本类型的扩展
var egg;
(function (egg) {
    egg[egg["red"] = 1] = "red";
    egg["green"] = "\u4E8E\u7ACB\u4F1F";
})(egg || (egg = {}));
;
let a = egg.red;
let b = egg[1];
console.log(b);
