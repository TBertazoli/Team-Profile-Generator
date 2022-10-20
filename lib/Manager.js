const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    getIcon() {
        return `<span class="material-symbols-outlined">
                    coffee
                </span>`;        
    }

    getExtraInfo() {
        return `Office Number: ${this.getOfficeNumber()}`;
    }
}


module.exports = Manager