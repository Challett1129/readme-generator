const inquirer = require("inquirer");
const createFile = require('./utils/write-file.js');
const generateMarkdown = require('./utils/generate-markdown.js');

// TODO: Create an array of questions for user input
const readMePrompt = () => {
    return inquirer.prompt(
    [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the required installation steps.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your project used for?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide a list of contributing members, if any'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any desired examples to test your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have, if any?',
        choices: ['None', 'MIT', 'ISC', 'MPL 2.0', 'Boost', 'Apache 2']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username'
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address'
    }
])
    .then(readmeData => {
        console.log(readmeData);
        return readmeData;
    })

};

// const mockData =  {
//   title: 'Title',
//   description: 'This is a test',
//   installation: 'run it',
//   usage: 'testing my own product',
//   contributing: 'me, myself, I ',
//   tests: 'run it',
//   license: 'NPM',
//   github: 'Challett1129',
//   email: 'collinhallett@gmail.com'
// }


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

function renderLicenseBadge(license) {
    if(data.license === 'None') {
      return ``
    }
    switch(data.license) {
      case 'MIT': 
      console.log(`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`);
      break;
      default: `error`
    }
  }
// console.log(generateMarkdown(mockData))
// TODO: Create a function to initialize app
function init() {
readMePrompt()
 .then(readmeData => {
    // renderLicenseBadge(readmeData.license);
    //  console.log(readmeData);
     return generateMarkdown(readmeData);
 })
 .then(pageContent => {
    //  console.log(pageContent);
     return createFile(pageContent);
 })
 .catch(err => {
     console.log(err);
 })
}

// Function call to initialize app
init();

  