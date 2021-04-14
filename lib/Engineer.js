// EXTEND FROM EMPLOYEE
const Employee = require('./Employee');

// extending employee parameters to engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGitHub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;