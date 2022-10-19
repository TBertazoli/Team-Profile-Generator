const inquirer = require('inquirer');

class Employee {
    constructor() {
        this.name = []
        this.email = [];
    }
    addNewEmployee() {
        inquirer
            .prompt([
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
                }
            ]).then(({ name, email }) => {                
                return this.name, this.email                
            });

        // getRole();

        // getRole() {
        //     inquirer.prompt([
        //         {
        //             type: 'list',
        //             name: 'role',
        //             message: 'What is your Role?',
        //             choices: ['Manager', 'Engineer', 'Intern'],
        // validate: choiceInput => {
        //     if (choiceInput = 'Manager') {
        //         return managerInfo();
        //     } else if (choiceInput = 'Engineer') {
        //         return engineerInfo()
        //     } else {
        //         return internInfo()
        //     }
        // }
    }
    //     }
    //    
    //     },

    //         ])
    //         .then(({ name, email }) => {
    //         return this.name, this.email;
    //     });
    // };
}

// getRole() {
//     return 'Employee';
// }



// const managerInfo = () => {
//     return inquirer.prompt([
//         {
//             type: 'number',
//             name: 'officeNumber',
//             message: 'What is your office number?'
//         },
//     ])
// }

// const getRole = () => {

// }
// addNewEmployee()

module.exports = Employee