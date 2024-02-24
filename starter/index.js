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

const ManagerQuestions = [
    {
        type: 'input',
        name: 'Name',
        message: 'What is the team Managers name?',
      },

      {
        type: 'input',
        name: 'EmployeeID',
        message: 'What is the team Managers ID?',
      },

      {
        type: 'input',
        name: 'Email',
        message: 'What is the team Managers Email?',
      },

      {
        type: 'input',
        name: 'OfficeNumber',
        message: 'What is the team Managers Office Number?',
      },

]





// function to write HTML file with 2 parameters file name and data
function writeToFile(fileName, data) {        
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}


// function to initialize program
function init() {
    inquirer.prompt(ManagerQuestions)
    .then(answers =>{
        console.log(answers)   // getting our answers from all of our questions 
        //creating the TEAM.HTML file, and calling the generateManager function that needs the answers  
        writeToFile("team.html", generateManager(answers))
    })
    }