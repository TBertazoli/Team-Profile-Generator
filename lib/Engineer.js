const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }

    getIcon() {
        return `<span class="material-symbols-outlined">
                    developer_mode
                </span>`
    }

    getExtraInfo() {
        return `GitHub: <a href="https://github.com/${this.getGithub()}" class="text-decoration-none">${this.getGithub()}</a>`;
    }
}


module.exports = Engineer