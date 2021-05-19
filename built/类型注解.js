"use strict";
function greeters(name) {
    return "我是" + name;
}
let myName = [1, 2, 3, 4];
let num = 123;
document.body.innerHTML = greeters(myName);
function fn() {
    return 123;
}
console.log(fn());
let a;
let b;
b = "asda";
a = b;
a = b;
function fn2() { throw Error(); }
