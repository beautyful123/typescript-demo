"use strict";
(() => {
    function fn(name) {
        return name;
    }
    let a = fn(23123);
    console.log(a);
    class Fn2 {
        constructor(name) {
            this.name = name;
        }
    }
    let b = new Fn2('yuliwei');
    console.log(b);
})();
