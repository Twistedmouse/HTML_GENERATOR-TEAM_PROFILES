const Engineer = require("../lib/engineerClass");

it("set name property to joe in the constructor", () => {
  const engineer = new Engineer("joe");
  expect(engineer.name).toEqual("joe");
});

it("set id property to 01 in the constructor", () => {
  const engineer = new Engineer("joe", 1);
  expect(engineer.id).toEqual(1);
});

it("set email property to email@email.com in the constructor", () => {
  const engineer = new Engineer("joe", 1, "email@email.com");
  expect(engineer.email).toEqual("email@email.com");
});

it("set github property to gitName in the constructor", () => {
  const engineer = new Engineer("joe", 1, "email@email.com", "gitName");
  expect(engineer.github).toEqual("gitName");
});

it("get name property for joe in the constructor", () => {
  const engineer = new Engineer("joe");
  expect(engineer.getName()).toEqual("joe");
});

it("get Id property of 1 in the constructor", () => {
  const engineer = new Engineer("joe", 1);
  expect(engineer.getId()).toEqual(1);
});

it("get email property for email@email.com in the constructor", () => {
  const engineer = new Engineer("joe", 1, "email@email.com");
  expect(engineer.getEmail()).toEqual("email@email.com");
});

it("get role property for engineer in the constructor", () => {
  const engineer = new Engineer("joe", 1, "email@email.com");
  expect(engineer.getRole()).toEqual("Engineer");
});

it("get github property for gitName in the constructor", () => {
  const engineer = new Engineer("joe", 1, "email@email.com", "gitName");
  expect(engineer.getGithub()).toEqual("gitName");
});
