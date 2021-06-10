const Employee = require("../lib/employeeClass");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email); // super baisically replaces the this. for name,id and email
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
