const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamMembers = [];
let addingUser = true;

const init = async () => {
    console.log(`
    =================================
    Welcome to Team Profile Generator
    =================================
    `);

    do {
        const employee = await promptUser();
        if (employee) {
            teamMembers.push(employee);
        } else {
            addingUser = false;
        }
    } while (addingUser);

    generateHtml();
}

function generateHtml() {
    teamMembers.forEach(teamMember => {
        console.log(teamMember.getId());
        console.log(teamMember.getName());
        console.log(teamMember.getEmail());
        console.log(teamMember.getRole());
        switch (teamMember.getRole()) {
            case 'Intern':
                console.log(teamMember.getSchool());
                break;
            case 'Engineer':
                console.log(teamMember.getGithub());
                break;
            case 'Manager':
                console.log(teamMember.getOfficeNumber());
                break;
        }
    })
}


init();

function promptUser() {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'add',
            message: 'Would you like to add a new employee?',
            default: false
        }
    ]).then((result) => {
        if (result.add == true) {
            return inquirer.prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: 'What is your name?',
                    validate: nameImput => {
                        if (nameImput) {
                            return true;
                        } else {
                            console.log('You need to enter your Name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'What is your email?',
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('You must enter your email')
                            return false;
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'What is your Role?',
                    choices: ['Manager', 'Engineer', 'Intern'],

                }
            ]).then((employeeData) => {
                switch (employeeData.role) {
                    case 'Intern':
                        return getIntern(employeeData);
                    case 'Manager':
                        return getManager(employeeData);
                    case 'Engineer':
                        return getEngineer(employeeData);
                }
            })
        } else {
            return false;
        }
    })
};

function getIntern(employeeData) {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'school',
            message: 'What is the name of your school?',
            validate: nameImput => {
                if (nameImput) {
                    return true;
                } else {
                    console.log('You need to enter a valid name!');
                    return false;
                }
            }
        },
    ]).then((result) => {
        return new Intern(teamMembers.length, employeeData.name, employeeData.email, result.school);
    });
}

function getManager(employeeData) {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'officeNumber',
            message: 'What is your office number?',
            validate: nameImput => {
                if (nameImput) {
                    return true;
                } else {
                    console.log('You need to enter a valid office number!');
                    return false;
                }
            }
        },
    ]).then((result) => {
        return new Manager(teamMembers.length, employeeData.name, employeeData.email, result.officeNumber);
    });
}

function getEngineer(employeeData) {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'github',
            message: 'What is the name of your github?',
            validate: nameImput => {
                if (nameImput) {
                    return true;
                } else {
                    console.log('You need to enter a valid github!');
                    return false;
                }
            }
        },
    ]).then((result) => {
        return new Engineer(teamMembers.length, employeeData.name, employeeData.email, result.github);
    })
}