"use strict";
class Dog {
    constructor(name, age) {
        console.log("构造函数执行");
        this.name = name;
        this.age = age;
    }
}
let d1 = new Dog("王八三", 123);
console.log(d1);
