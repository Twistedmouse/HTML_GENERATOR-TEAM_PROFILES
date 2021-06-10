const Manager = require("../lib/managerClass");

it("set name property to joe in the constructor", () => {
  const manager = new Manager("joe");
  expect(manager.name).toEqual("joe");
});

it("set id property to 01 in the constructor", () => {
  const engineer = new Manager("joe", 1);
  expect(engineer.id).toEqual(1);
});

it("set email property to email@email.com in the constructor", () => {
  const engineer = new Manager("joe", 1, "email@email.com");
  expect(engineer.email).toEqual("email@email.com");
});

it("set officeNumber property to 5 in the constructor", () => {
  const engineer = new Manager("joe", 1, "email@email.com", 5);
  expect(engineer.officeNumber).toEqual(5);
});

it("get name property for joe in the constructor", () => {
  const engineer = new Manager("joe");
  expect(engineer.getName()).toEqual("joe");
});

it("get Id property of 1 in the constructor", () => {
  const engineer = new Manager("joe", 1);
  expect(engineer.getId()).toEqual(1);
});

it("get email property for email@email.com in the constructor", () => {
  const engineer = new Manager("joe", 1, "email@email.com");
  expect(engineer.getEmail()).toEqual("email@email.com");
});

it("get role property for manager in the constructor", () => {
  const engineer = new Manager("joe", 1, "email@email.com");
  expect(engineer.getRole()).toEqual("Manager");
});

it("get office Number property for officeNumber in the constructor", () => {
  const engineer = new Manager("joe", 1, "email@email.com", 5);
  expect(engineer.getOfficeNumber()).toEqual(5);
});
