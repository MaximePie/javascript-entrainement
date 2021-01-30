class User {
    constructor(name, firstName, job = null) {
        this.name = name;
        this.firstName = firstName;
        this._job = job;
    }

    fullName() {
        this.fullName = `${this.name} ${this.firstName}`;

        return this.fullName;
    }

    get job() {
        return this._job;
    }

    set job(job) {
        return (this._job = job);
    }
}

let user = new User('Doe', 'John', 'Développeur');
//
let anotherUser = new User('Doe', 'John');
console.log(anotherUser.job);
anotherUser.job = 'Médecin';
console.log(anotherUser.job);
