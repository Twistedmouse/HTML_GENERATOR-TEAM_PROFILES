const inquirer = require("inquirer");
const fs = require("fs");
let employeesArray = [];
const Manager = require("./lib/managerClass");
const Engineer = require("./lib/engineerClass");
const Intern = require("./lib/internClass");

const generateHtml = require("./lib/generateHtml.js");

console.log("=======.~START TEAM HTML GENERATOR~.======= \n");

//array of questions for manager
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Pease enter the team manager's name.",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter your team manager's Id.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your team manager's email address.",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter your team manager's office number.",
  },
];

//array of questions for other employees
function employeeQuestions() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "buildTeam",
        message: "What would you like to do next?",
        choices: ["Add Engineer", "Add Intern", "Finish building team."],
      },
      {
        when: (answers) =>
          answers.buildTeam === "Add Engineer" ||
          answers.buildTeam === "Add Intern",
        type: "input",
        name: "name",
        message: "Please enter employee name.",
      },
      {
        when: (answers) =>
          answers.buildTeam === "Add Engineer" ||
          answers.buildTeam === "Add Intern",
        type: "input",
        name: "id",
        message: "Please enter employee Id.",
      },
      {
        when: (answers) =>
          answers.buildTeam === "Add Engineer" ||
          answers.buildTeam === "Add Intern",
        type: "input",
        name: "email",
        message: "Please enter employee email.",
      },
      {
        when: (answers) => answers.buildTeam === "Add Engineer",
        type: "input",
        name: "employeeGithub",
        message: "Please enter employee github.",
      },
      {
        when: (answers) => answers.buildTeam === "Add Intern",
        type: "input",
        name: "internSchool",
        message: "Please enter interns school.",
      },
    ])

    //function for when finishing employee input
    .then(function (answers) {
      if (answers.buildTeam === "Finish building team.") {
        console.log("\n ==========!!!!!!!GENERATING TEAM!!!!!!!!!==========");
        //invoke writeHtml
        generateHtml(employeesArray);
        return;
      }
      //if statements for intern/ engineer for storing answers
      if (answers.buildTeam === "Add Engineer") {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.employeeGithub
        );
        employeesArray.push(engineer);
      }
      if (answers.buildTeam === "Add Intern") {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.internSchool
        );
        employeesArray.push(intern);
      }

      console.log(employeesArray);
      employeeQuestions();
    });
}

// function writeHtml(answers) {
//   fs.writeFile("./dist/index.html", generateHtml(answers), function (err) {
//     if (err) throw err;
//     console.log(`Writing index.html... \n ...index.html created.`);
//   });
// }

// initiate and stores answers for manager then invokes employeeQuestions()
function init() {
  inquirer.prompt(managerQuestions).then((answers) => {
    console.log("\n");
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employeesArray.push(manager);

    console.log(manager);
    employeeQuestions();
  });
}
init();
