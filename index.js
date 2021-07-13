// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown");
//const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
  },
     {
    type: 'input',
    name: 'description',
    message: 'What is the description of the project?',
  },
  {
    type: 'confirm',
    name: 'table',
    message: 'Would you like to use a table of contents?',
},
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install the project?',
},
  {
    type: 'input',
    name: 'usage',
    message: 'What is this project used for?',
},
  {
    type: 'list',
    name: 'license',
    message: "What license's do you need for this project?",
    choices: ['MIT', 'Apache', 'none']
},
  {
    type: 'input',
    name: 'contributing',
    message: 'Who is contributing on this project?',
},
  {
    type: 'input',
    name: 'test',
    message: 'Did you use any tests?',
},
  {
    type: 'input',
    name: 'question',
    message: 'Did you have any questions?',
},
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
},
  {
    type: 'input',
    name: 'link',
    message: 'What is your GitHub link?',
},
]




// TODO: Create a function to write README file
const writeToFile = (data)  => {
    return new Promise (( resolve, reject) => {
        fs.writeFileSync('./utils/README.md', generateMarkdown(data), err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok:true,
                message:'File created'
            });
        });
    });
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
  .then((generateMarkdown) => {
   writeToFile(generateMarkdown);
  
  })
  
  .catch(err => {
    console.log(err);
  })
  }


// Function call to initialize app
init();
