const Employee = require("../lib/employeeClass");

it("set name property to joe in the constructor", () => {
  const employee = new Employee("joe");
  expect(employee.name).toEqual("joe");
});

it("set id property to 01 in the constructor", () => {
  const employee = new Employee("joe", 1);
  expect(employee.id).toEqual(1);
});

//get email

it("set name property to joe in the constructor", () => {
  const employee = new Employee("joe");
  expect(employee.getName()).toEqual("joe");
});
