const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const template = require('./src/page-template');



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

    generateHtml()


}

function generateHtml() {
      return writeToFile(template(teamMembers));
}

const writeToFile = (html) => {
    console.log(html)
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html',html, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'HTML page created'
            });
        });
    });
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
                    type: 'text',
                    name: 'id',
                    message: 'What is your employee ID?',
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log('You must enter your ID')
                            return false;
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'What is your Role?',
                    choices: ['Engineer', 'Intern'],

                }
            ]).then((employeeData) => {
                switch (employeeData.role) {
                    case 'Intern':
                        return getIntern(employeeData);
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
        return new Intern(employeeData.id, employeeData.name, employeeData.email, result.school);
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
        return new Engineer(employeeData.id, employeeData.name, employeeData.email, result.github);
    })
}

