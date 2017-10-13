"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    get age() {
        return this._age;
    }
}
function callSomething(obj) {
    console.log('This is ' + obj.name);
}
const conBo = new Animal('Cow', 10);
callSomething(conBo);
conBo.name = 'Beef';
console.log(conBo.age);
