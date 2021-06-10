//TODO: generate a webpage with teams basic info, include name, department, role, email and github.
//WHEN: promoted for team members information
//THEN: html file is generated with cards displayed in a nice format
//      task: create function for writing the html file
//WHEN: employee email is clicked
//THEN: default email program opens and populates email section
//      task: click event that links the email to default email program
//WHEN: GITHUB link is clicked
//THEN: employee github page opens on new tab
//      task: github new tab href on generated html page

//todo: :DONE: create manger, intern, employee and engineer classes
//NOTE: employees should be the parent class that manager,intern and engineer build from
//NOTE: :DONE: employee properties:
//name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'
//NOTE: :DONE:manager properties:
// officeNumber
// getRole()—overridden to return 'Manager'
//NOTE: :DONE:engineer properties:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'
//NOTE: :DONE:intern properties:
// school
// getSchool()
// getRole()—overridden to return 'Intern'

//TODO:
//:DONE: WHEN: start the application
//       THEN: i am prompted for team manager name, employee id, email and office officeNumber
//       WHEN: I enter the team manager’s name, employee ID, email address, and office number
//       THEN: I am presented with a menu with the option to add an engineer or an intern or to finish building my team

//:DONE: WHEN: i select engineer
//       THEN: prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
//       WHEN: i select Intern
//       THEN: prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
//WHEN: finish building team
//THEN: exit the app and generate html.

//TODO: :DONE: make/ run tests
//BONUS create validation to ensure that user input is in the proper format.
