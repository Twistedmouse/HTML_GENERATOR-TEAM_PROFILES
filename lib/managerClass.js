const Employee = require("../lib/employeeClass");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email); // super baisically replaces the this. for name,id and email
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
