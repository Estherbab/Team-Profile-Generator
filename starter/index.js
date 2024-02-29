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
    message: "Do you want to add an engineer?",
    choices: ["YES", "NO"],
  },

  {
    type: "list",
    name: "menu",
    message: "Do you want to add an intern?",
    choices: ["YES", "NO"],
  },

  {
    type: "list",
    name: "menu",
    message: "Do you want to finish building the team?",
    choices: ["YES", "NO"],
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
    name: "Engineer ID",
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
    name: "Intern ID",
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
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    console.log(managerAnswers);

    const manager = new Manager(
      managerAnswers.name,
      managerAnswers.id,
      managerAnswers.email,
      managerAnswers.officenumber
    );
    wholeTeam.push(manager);

    // Another inquirer. prompt to ask for the rest of the team
    inquirer.prompt(menuQuestions).then((engineerAnswers) => {
      console.log(engineerAnswers);
      const engineer = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.github
      );
      wholeTeam.push(engineer);
    });

    //creating the TEAM.HTML file, and calling the generateManager function that needs the answers
    writeToFile("team.html", render(wholeTeam));
  });
}

generateTeam();
