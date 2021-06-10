const Employee = require("../lib/employeeClass");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email); // super baisically replaces the this. for name,id and email
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
