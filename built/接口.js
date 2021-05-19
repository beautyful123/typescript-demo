"use strict";
function greeterr(person) {
    return "Hello ," + person.firstName + "  " + person.lastName;
}
let users = { firstName: '于立伟', lastName: '杰克逊' };
console.log(greeterr(users));
