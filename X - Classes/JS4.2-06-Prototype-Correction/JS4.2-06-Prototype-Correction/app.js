function User(name, firstName, job = null) {
    this.name = name;
    this.firstName = firstName;
    this._job = job;
}

User.prototype.fullName = function () {
    return `${this.name} ${this.firstName}`;
};

User.prototype.getJob = function () {
    return this._job;
};

User.prototype.setJob = function (job) {
    return (this._job = job);
};

let user = new User('Doe', 'John');
console.log(user);
console.log(user.fullName());
console.log(user.getJob());
user.setJob('Médecin');
console.log(user.getJob());
//
