class Age {
    constructor(age) {
        this._age = parseFloat(age);
    }

    get age() {
        if (this._age < 0 || this._age > 150 || isNaN(this._age)) {
            return null;
        }

        return this._age;
    }
}

class User {
    constructor(name, firstName, job = null, age) {
        this.name = name;
        this.firstName = firstName;
        this._job = job;
        this._age = new Age(age);
    }

    fullName() {
        this.fullName = `${this.name} ${this.firstName}`;

        return this.fullName;
    }

    get age() {
        return this._age.age;
    }

    get job() {
        return this._job;
    }

    set job(job) {
        return (this._job = job);
    }
}

let user = new User('Doe', 'John', '', 151);
console.log(user.age);
//
let anotherUser = new User('Doe', 'Jane', '', 75);
console.log(anotherUser.age);

let yetAnotherUser = new User('Doe', 'Jane', '', 'cinquante ans');
console.log(yetAnotherUser.age);
