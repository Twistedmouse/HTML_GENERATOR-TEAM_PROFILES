const Employee = require("../lib/employeeClass");

it("set name property to joe in the constructor", () => {
  const employee = new Employee("joe");
  expect(employee.name).toEqual("joe");
});

it("set id property to 01 in the constructor", () => {
  const employee = new Employee("joe", 1);
  expect(employee.id).toEqual(1);
});

it("set email property to email@email.com in the constructor", () => {
  const employee = new Employee("joe", 1, "email@email.com");
  expect(employee.email).toEqual("email@email.com");
});

it("get name property for joe in the constructor", () => {
  const employee = new Employee("joe");
  expect(employee.getName()).toEqual("joe");
});

it("get Id property of 1 in the constructor", () => {
  const employee = new Employee("joe", 1);
  expect(employee.getId()).toEqual(1);
});

it("get email property for email@email.com in the constructor", () => {
  const employee = new Employee("joe", 1, "email@email.com");
  expect(employee.getEmail()).toEqual("email@email.com");
});

it("get role property for employee in the constructor", () => {
  const employee = new Employee("joe", 1, "email@email.com");
  expect(employee.getRole()).toEqual("Employee");
});
