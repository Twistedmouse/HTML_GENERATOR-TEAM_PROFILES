const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("generateHtml");
//NOTE: will require class paths

console.log("=======.~START TEAM HTML GENERATOR~.======= \n");

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Pease enter the team manager's name.",
  },
  {
    type: "input",
    name: "managerId",
    message: "Please enter your team manager's Id.",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Please enter your team manager's email address.",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter your team manager's office number.",
  },
];

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
        name: "employeeId",
        message: "Please enter employee Id.",
      },
      {
        when: (answers) =>
          answers.buildTeam === "Add Engineer" ||
          answers.buildTeam === "Add Intern",
        type: "input",
        name: "employeeEmail",
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
    .then((answers) => {
      answers.buildTeam === "Add Engineer" ||
        answers.buildTeam === "Add Intern";
      if (answers.buildTeam === "Finish building team.") {
        return console.log(
          "\n ==========!!!!!!!GENERATING TEAM!!!!!!!!!=========="
        );
        writeHtml(answers);
        //invoke writeHtml
      }
      employeeQuestions();
    });
}

function writeHtml(answers) {
  fs.writeFile("./dist/index.html", generateHtml(answers), function (err) {
    if (err) throw err;
    console.log(`Writing index.html...`);
    console.log(`\n ...index.html created.`);
  });
}

function init() {
  inquirer.prompt(managerQuestions).then((answers) => {
    console.log("\n");
    // console.log(answers);
    employeeQuestions();
  });
}
init();
