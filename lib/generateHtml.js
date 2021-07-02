const fs = require("fs");
const prettier = require("prettier");

//generates cards
function cardPrinter(employeesArray, role) {
  let html = "";
  const roleData = (employee) => {
    let labelHtml = "";
    let roleDataCard;

    switch (employee.getRole()) {
      case "Manager":
        labelHtml = "Office number: ";
        roleDataCard = employee.getOfficeNumber();
        break;

      case "Engineer":
        labelHtml = "Github: ";
        roleDataCard = `<a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
        break;

      case "Intern":
        labelHtml = "School: ";
        roleDataCard = employee.getSchool();
        break;

      default:
        console.error("!!!!!!!!!!!!!switch error!!!!!!!!!!!!!");
        break;
    }
    return { labelHtml, roleDataCard };
  };

  employeesArray.forEach((employee) => {
    if (employee.getRole() === role) {
      const employeeRoleData = roleData(employee);
      html += prettier.format(
        `
        <div class="employeeCard">
               <p><strong>Name: </strong> ${employee.name}</p>
               <p><strong>Id: </strong> ${employee.id}</p>
               <p><strong>Email: </strong>${employee.email}<p>
               <p><strong>
               ${employeeRoleData.labelHtml}:</strong> 
               ${employeeRoleData.roleDataCard}
               </p>
        </div>
              `,
        { parser: "html" }
      );
    }
  });
  return html || "";
}

function generateHtml(employeesArray) {
  const html = prettier.format(
    // when have more time come back and create managerCard class for manager
    `
    <!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/dist/style.css">
    <title>Team Roster</title>
</head>
<body>
    <header class="jumbotron">
        <h1 id="myTeam">ᕙ('▿´)ᕗ My Team. ᕙ('▿´)ᕗ</h1>
    </header>
    
    <article class="cards">

        <section class="managerSection">
            <h1>Team Manager:</h1>
            
                    ${cardPrinter(employeesArray, "Manager")}
                    
                
        </section>
        <article class="cardsFlex">

            <section class="engineerSection">
                <h1>Team Engineers:</h1>
                    
                      ${cardPrinter(employeesArray, "Engineer")}
                    
            </section>
        
            <section class="internSection">
                <h1>Team Interns:</h1>
                    
                      ${cardPrinter(employeesArray, "Intern")}
                     
            </section>
            
        </article>
        

    </article>

</body>
</html>
    `,
    { parser: "html" }
  );
  try {
    fs.unlinkSync("./dist/index.html");
  } catch (error) {
    console.error(error);
  }

  try {
    fs.writeFileSync("./dist/index.html", html);
    console.log(
      "\n ==========!!!!!index.html saved to ./dist/index.html!!!!!=========="
    );
  } catch (error) {
    console.error(error);
  }
  return html;
}

module.exports = generateHtml;
