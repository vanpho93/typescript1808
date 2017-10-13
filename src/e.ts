interface HasName {
    name: string;
}

class Animal implements HasName {
    private _age: number;
    name: string;
    constructor(name: string, age: number) {
        this.name = name;
        this._age = age;
    }

    get age() {
        return this._age;
    }
}

function callSomething(obj: HasName) {
    console.log('This is ' + obj.name)
}

const conBo = new Animal('Cow', 10);
callSomething(conBo);
conBo.name = 'Beef';
console.log(conBo.age);