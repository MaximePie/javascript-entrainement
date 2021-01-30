class User {
    fullName(name, firstName) {
        this.fullName = `${name} ${firstName}`;

        return this.fullName;
    }

    get job() {
        return this._job;
    }

    set job(job) {
        return (this._job = job);
    }
}

let user = new User();
user.fullName('Doe', 'John');
user.job = 'Développeur';
console.log(user);
console.log(user.job);
//
