class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getId() {
        return this.id;
    };

    getName() {
        return this.name;
    }

    getEmail() {
        return `<a href="mailto:${this.email}" class="text-decoration-none">${this.email}</a>`;
    }


    getRole() {
        return 'Employee';
    }
}

module.exports = Employee