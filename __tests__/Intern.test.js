const Intern = require("../lib/internClass");

it("set name property to joe in the constructor", () => {
  const intern = new Intern("joe");
  expect(intern.name).toEqual("joe");
});

it("set id property to 01 in the constructor", () => {
  const intern = new Intern("joe", 1);
  expect(intern.id).toEqual(1);
});

it("set email property to email@email.com in the constructor", () => {
  const intern = new Intern("joe", 1, "email@email.com");
  expect(intern.email).toEqual("email@email.com");
});

it("set school property to UWA in the constructor", () => {
  const intern = new Intern("joe", 1, "email@email.com", "school");
  expect(intern.school).toEqual("school");
});

it("get name property for joe in the constructor", () => {
  const intern = new Intern("joe");
  expect(intern.getName()).toEqual("joe");
});

it("get Id property of 1 in the constructor", () => {
  const intern = new Intern("joe", 1);
  expect(intern.getId()).toEqual(1);
});

it("get email property for email@email.com in the constructor", () => {
  const intern = new Intern("joe", 1, "email@email.com");
  expect(intern.getEmail()).toEqual("email@email.com");
});

it("get role property for intern in the constructor", () => {
  const intern = new Intern("joe", 1, "email@email.com");
  expect(intern.getRole()).toEqual("Intern");
});

it("get school property for intern in the constructor", () => {
  const intern = new Intern("joe", 1, "email@email.com", "UWA");
  expect(intern.getSchool()).toEqual("UWA");
});
