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

  teamCards.forEach((teamMember) => {
    if (teamMember.getRole() === role) {
      html += prettier.format(
        `
        <section class="managerSection">
        <h1>Team Manager:</h1>
            <div class="managerCard">
               <p><strong>Name: </strong> ${teamMember.name}</p>
               <p><strong>Id: </strong> ${teamMember.id}</p>
               <p><strong>Email: </strong>${teamMember.email}<p>
               <p><strong>
               ${roleData(teamMember)[0]}:</strong> 
               ${roleData(teamMember)[1]}</p>
              `,
        { parser: "html" }
      );
    }
  });
  return html || "";
}

function generateHtml(teamCards) {
  const html = prettier.format(
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
                <div class="managerCard">
                    ${cardPrinter(teamCards, "Manager")}
                <div>
        </section>
        <article class="cardsFlex">

            <section class="engineerSection">
                <h1>Team Engineers:</h1>
                    <div class="engineerCard">
                      ${cardPrinter(teamCards, "Engineer")}
                    </div>
                    
            </section>
        
            <section class="internSection">
                <h1>Team Interns:</h1>
                    <div class="internCard">
                      ${cardPrinter(teamCards, "Intern")}
                    </div>  
                    
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
