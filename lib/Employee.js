const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

// function Employee() {
//     this.name = "";
//     this.id = 0;
//     this.email = "";
//     this.role = "";
// };

// Employee.prototype.getRole = function() {
//     this.role = 'Employee';
// };

// Employee.prototype.getName = function() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'employeeName',
//             message: `Please enter the name of the ${this.role}`
//         }
//     ]).then((answers) => {
//         this.name = answers;
//     });
// };

// Employee.prototype.getId = function() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'employeeId',
//             message: `Please enter the employee ID of the ${this.role}`
//         }
//     ]).then((answers) => {
//         this.id = answers;
//     });
// };

// Employee.prototype.getEmail = function() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'employeeEmail',
//             message: `Please enter the email address of the ${this.role}`
//         }
//     ]).then((answers) => {
//         this.email = answers;
//     });
// };


module.exports = Employee;