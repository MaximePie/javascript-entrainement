class User {
    fullName(name, firstName) {
        this.fullName = `${name} ${firstName}`;

        return this.fullName;
    }
}

class Admin extends User {
    canEditArticles() {
        return true;
    }
}

let user = new User();
user.fullName('Doe', 'John');
console.log(user);

let admin = new Admin();
admin.fullName('Doe', 'Jane');
console.log(admin);
console.log(admin.canEditArticles());
