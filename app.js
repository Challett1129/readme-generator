const inquirer = require("inquirer");

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
        choices: ['None', 'NPM', 'REUSE Compliance', 'GitHub', 'Crates.io']
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

};

const mockData =  {
    title: 'Test Title',
    description: 'Description',
    installation: 'STEP 1 STEP 2',
    usage: 'useful for:',
    contributing: 'me, chuck berry, jonas',
    tests: 'example',
    license: 'NPM',
    github: 'Challett1129',
    email: 'collinhallett@gmail.com'
  }

readMePrompt()
    .then( log => {
        console.log(log);
    })
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
