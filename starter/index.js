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

const managerQuestions = [
    {
        type: 'input',
        message: 'Enter team manager name:',
        name: 'Name',
      },

      {
        type: 'input',
        message: 'Enter employee ID:',
        name: 'EmployeeID',
      },

      {
        type: 'input',
        message: 'Enter your Email',
        name: 'Email',
      },

      {
        type: 'input',
        message: 'Enter your Office Number:',
        name: 'OfficeNumber',
      },
]

const managerAnswers = await inquirer.prompt(managerQuestions);             // Manager answers will generate from the users inout to the questions





// function to write HTML file with 2 parameters file name and data
function writeToFile(fileName, data) {        
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}


// function to initialize program
function generateTeam() {
    inquirer.prompt(managerQuestions)
    .then(newTeamMember =>{
        console.log("new team member")   
        //creating the TEAM.HTML file, and calling the generateManager function that needs the answers  
        writeToFile("team.html", generateTeam(newTeamMember))
    })
    }