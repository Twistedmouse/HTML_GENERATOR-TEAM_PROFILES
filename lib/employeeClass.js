class Employee {
  constructor(name, id, email) {
    if (name === undefined) {
      throw undefined;
    }
    this.name = name;
    this.id = id;
    this.email = email;
    // add if statement so cant enter empty space
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
    return "Employee";
  }
}

module.exports = Employee;
