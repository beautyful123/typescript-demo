"use strict";
(function fn() {
    class Person {
        constructor(val) {
            this._name = val;
        }
        get name() {
            return this._name;
        }
        set name(val) {
            this._name = val;
        }
    }
    const a = new Person("yuliwei");
    a.name = "sa";
    console.log(a);
})();
