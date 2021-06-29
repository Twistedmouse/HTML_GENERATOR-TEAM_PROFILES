# HTML_GENERATOR-TEAM_PROFILES

### My Task:

I was tasked to build a html gentertor using a Node.js command-line
application, for a software engineering team. It must take in the imformation
of all employees and generate an html page that displays the profile
summaries of each employee, and must include managers, engineers and interns.

### User Story:

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Acceptance Criteria:

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

---

## Installation:

First clone from my repository.

SSH key :

```
git@github.com:Twistedmouse/HTML_GENERATOR-TEAM_PROFILES.git
```

Next you will need to npm install the dependencies:

`npm install`

---

## Usage:

Change directory to the repository root path and run `node index.js`

or if your scripts are setup in your package.json:

`npm start`

---

## Walkthrough:

### Video walkthrough:

<a href="https://drive.google.com/file/d/1Sxt4KeRsbUCDiVTfFkzzN6QB6St3Jhzy/view" rel="nofollow"><img src="assets/videoplacehoder.png" alt="Watch the video" style="max-width:100%;"></a>

### Screenshots:

First you are prompted to enter manager details:

![](assets/walkT1.png)

![](assets/walkT2.png)

You are then prompted to make a choice we chose engineer:

![](assets/walkT3.png)

We enter two to demonstrate multiple cards populating without overflow or overlapping:

![](assets/walkT4.png)

Next we choose an intern:

![](assets/walkT5.png)

![](assets/walkT6.png)

And now we select that we are finished:

![](assets/walkT7.png)

Note, when generating the new idex.html the location it is saved is displayed in the terminal by default it is in the dist folder:

![](assets/walkT8.png)

![](assets/walkT9.png)

What is not mentioned is the previous index.html will be removed before making a new index.html:

![](assets/notMentioned.png)

The banner has a animated gradient to make it appear a bit more interesting, colours are easy to to change inside style.css to match business desired colour scheme:

![](assets/cssBanner.png)

![](assets/walkT10.gif)

### preview:

![](assets/walkT11.gif)

---

## Tests:

List of completed tests, test yourself with `npm run test`:

![](assets/tests.png)

---

## Technologies:

- <a href="https://nodejs.org/en/docs/" rel="nofollow">Node.js</a>
- <a href="https://www.npmjs.com/package/inquirer" rel="nofollow">Inquirer</a>
- <a href="https://www.npmjs.com/package/jest" rel="nofollow">Jest</a>
- <a href="https://prettier.io/" rel="nofollow">Prettier</a>
- JavaScript
- CSS

---

## Questions:

<p>If you have any questions, head to my <a href="https://github.com/Twistedmouse">GitHub</a> or send me an <a href="mailto:mousy93@hotmail.com">email</a>.</p>
