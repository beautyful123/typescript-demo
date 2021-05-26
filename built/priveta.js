"use strict";
(() => {
    class A {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        set setAge(num) {
            this.age = num;
            console.log("age现在是" + this.age);
        }
        get setAge() {
            console.log(this.age);
            return this.age;
        }
    }
    const a = new A("于立伟", 112);
    a.name = "秦媛丽";
    a.setAge = 190;
    a.setAge;
    console.log(a);
})();
