const fs = require("fs");
const prettier = require("prettier");

//generates cards
function cardPrinter(teamCards, role) {
  let html = "";
  const roleData = (data) => {
    let labelHtml = "";
    let roleDataCard;

    switch (data.getRole()) {
      case "Manager":
        labelHtml = "Office number:";
        roleDataCard = data.officeNumber;
        break;

      case "Engineer":
        labelHtml = "Github";
        roleDataCard = `<a href="https://github.com/${data.employeeGithub}">${data.employeeGithub}</a>f`;
        break;

      case "Intern":
        labelHtml = "School";
        roleDataCard = data.internSchool;
        break;

      default:
        console.error("!!!!!!!!!!!!!switch error!!!!!!!!!!!!!");
        break;
    }
    return [labelHtml, roleDataCard];
  };

  teamObject.forEach((teamMember) => {
    if (teamMember.getRole() === role) {
      html += prettier.format(
        `
            
              `
      );
    }
  });
}
