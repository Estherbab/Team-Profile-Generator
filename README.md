# Team-Profile-Generator

## Description
In this challenge I will be creating a team profile generator by using the starter code given to convert it into a working Node.js command-line application. The application will start off by taking in information about employees in a software engineering team(Managers, Engineers and Interns) then will generate a HTML webpage that displays all the summaries for each employee.


Live link to deployed application [link to deployed application]().

---


## Table of Contents 



* [Classes](#classes)
* [Manager](#manager)
* [Menu](#menu)
* [Engineer](#engineer)
* [Intern](#intern)
* [Generatehtml](#generatehtml)
* [Usage](#usage)
* [Technologies](#technologies)
* [Credits](#credits)
* [License](#license)


---

## Classes
The screenshots below shows the Employee class which is the parent and the children classes(manager, engineer and intern). The manager, engineer, and intern classes will inherit all the behaviours that have been built into the parent class(Employee). The screenshots also show the code that is written to export the Manager, Engineer and Intern Classes.

Employee Class (Parent)
![the following image shows the webpages functionality](starter/assets/images/employee%20class.png)
Engineer Class (Child)
![the following image shows the webpages functionality](starter/assets/images/engineer%20class.png)
Manager Class (Child)
![the following image shows the webpages functionality](starter/assets/images/manager%20class.png)
Intern Class (Child)
![the following image shows the webpages functionality](starter/assets/images/intern%20class.png)



---

## Manager
The screenshot below shows the team manager array of questions that will be displayed once the application starts, the second screenshot shows the inquirer.prompt that will prompt the questions to be displayed and answered in the terminal.

![the following image shows the webpages functionality](starter/assets/images/manager%20questions%20array.png)
![the following image shows the webpages functionality](starter/assets/images/manager%20inquirer%20prompt.png)








---

## Menu

The screenshots below shows the menu questions that will appear as soon as the user finishes answering the manager questions. The menu questions are displayed in list form with the user selecting either engineer, intern or finish building the team. The second screenshot shows the function to prompt and display each of the menu options which is written using an if statement.

![the following image shows the webpages functionality](starter/assets/images/menu%20array.png)
![the following image shows the webpages functionality](starter/assets/images/display%20menu.png)


---

## Engineer

The screenshot below shows the engineer array of questions that will be displayed when the user selects engineer from the menu options. The display engineer function is to display all the questions in the array and the inquirer.prompt is to prompt the user to answer each question in the terminal.

![the following image shows the webpages functionality](starter/assets/images/engineer%20array.png)
![the following image shows the webpages functionality](starter/assets/images/engineer%20prompt.png)


---

## Intern

The screenshot below shows the intern array questions that will be displayed when the user selects intern from the display menu options. The intern array questions will be displayed and the inquirer.prompt will prompt the user to answer the questions in the terminal

![the following image shows the webpages functionality](starter/assets/images/intern%20array.png)
![the following image shows the webpages functionality](starter/assets/images/intern%20prompt.png)


---

## GenerateHTML

This screenshot shows the HTML template generated after the user fills in all the questions for manager, enginner and intern and finishes building the team. The second screenshot shows the preview of the HTML generated team when viewed on a live server.


![HTML generated questions](starter/assets/images/html%20generated%20questions.png)
![Team Profile Screenshot](starter/assets/images/Team%20profile%20generator%20final.png)





---
## Usage
* run `npm i` in terminal to install all the dependencies needed
* `npm run test` to run the tests and see if they all pass
* `node index.js` to start the questions in the terminal





## Technologies
* Bootstrap
* Inquirer
* Javascript
* Jest
* Node Js



## Credits

* Esther Babirye
* TA Kayvon



## License
MIT License

Copyright (c) 2024 estherbab

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



---



---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
