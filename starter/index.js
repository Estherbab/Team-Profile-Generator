const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Array that will contain all the employee objects
const wholeTeam = [];

// When the user starts the application they will be prompted to enter the team managers details
const managerQuestions = [
  {
    type: "input",
    message: "Enter team manager name:",
    name: "Name",
  },

  {
    type: "input",
    message: "Enter employee ID:",
    name: "EmployeeID",
  },

  {
    type: "input",
    message: "Enter your Email",
    name: "Email",
  },

  {
    type: "input",
    message: "Enter your Office Number:",
    name: "OfficeNumber",
  },
];
// const managerAnswers = inquirer.prompt(managerQuestions);             // Manager answers will generate from the users input to the questions

// The menuquestions will be displayed after the user enters the managers details and the options below will be displayed
const menuQuestions = [
  {
    type: "list",
    name: "menu",
    message: "Do you want to add an engineer, intern or finish?",
    choices: ["Engineer", "Intern", "Finish"],
  },
];

// When the user selects Engineer from the menu an array of the questions below will be displayed, user prompted to answer them.
const engineerQuestions = [
  {
    type: "input",
    message: "Enter engineer name:",
    name: "Name",
  },

  {
    type: "input",
    message: "Enter engineer ID:",
    name: "EngineerID",
  },

  {
    type: "input",
    message: "Enter engineer email:",
    name: "Email",
  },

  {
    type: "input",
    message: "Enter Github usernam:",
    name: "Github",
  },
];

// When the user selects intern from the menu an array of the questions below will be displayed, user prompted to answer them.
const internQuestions = [
  {
    type: "input",
    message: "Enter intern name:",
    name: "Name",
  },

  {
    type: "input",
    message: "Enter intern ID:",
    name: "InternID",
  },

  {
    type: "input",
    message: "Enter intern email:",
    name: "Email",
  },

  {
    type: "input",
    message: "Enter school name:",
    name: "School",
  },
];

// function to write HTML file with 2 parameters file name and data
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// function to initialize program
function generateTeam() {
  // Inquirer.prompt to ask the Manager Questions when the application starts
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    console.log(managerAnswers);

    const manager = new Manager(
      managerAnswers.Name,
      managerAnswers.EmployeeID,
      managerAnswers.Email,
      managerAnswers.OfficeNumber
    );
    wholeTeam.push(manager);
    displayMenu();

    //Inquirer.prompt to finish building the team

    //creating the TEAM.HTML file, and calling the render function and passing in an array containing all the employee objects
    // Render function generates and returns a block of HTML with template divs for each employee
  });
}

function displayMenu() {
  // Another inquirer. prompt to display the menu options after the user has answered the engineer questions
  inquirer.prompt(menuQuestions).then((menuAnswers) => {
    console.log(menuAnswers.menu);

    if (menuAnswers.menu === "Engineer") {
      displayEngineer();
    } else if (menuAnswers.menu === "Intern") {
      displayIntern();
    } else {
      writeToFile("team.html", render(wholeTeam));
    }
  });
}

function displayEngineer() {
  // Inquirer.prompt to ask the Engineer Questions after user has selected Engineer from the menu options
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    console.log(engineerAnswers);
    const engineer = new Engineer(
      engineerAnswers.Name,
      engineerAnswers.EngineerID,
      engineerAnswers.Email,
      engineerAnswers.Github,
    );
    wholeTeam.push(engineer);

    displayMenu();
  });
}

function displayIntern() {
  //Inquirer.prompt to ask the Intern Questions after user has selected Intern from the menu options
  inquirer.prompt(internQuestions).then((internAnswers) => {
    console.log(internAnswers);
    const intern = new Intern(
      internAnswers.name,
      internAnswers.id,
      internAnswers.email,
      internAnswers.school
    );
    wholeTeam.push(intern);

    displayMenu();
  });
}

generateTeam();
