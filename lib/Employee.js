// THIS IS THE MAIN CLASS BECAUSE ALL ENGINEERS, INTERNS AND MANAGERS ARE A SUB CLASS OF EMPLOYEE

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `Name: ${this.name}`
    }

    getId() {
        return `ID Number: ${this.id}`
    }

    getEmail() {
        return `Email Address: ${this.email}`
    }
    getRole() {
        return `Employee`
    }
}

module.exports = Employee;