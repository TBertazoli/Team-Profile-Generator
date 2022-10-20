const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

    getIcon() {
        return `<span class="material-symbols-outlined">
                    school
                 </span>`
    }

    getExtraInfo() {
        return `School: ${this.getSchool()}`;
    }
}


module.exports = Intern