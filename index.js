const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter the title of your project:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache', 'GPL', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md file has been generated!')
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // Generate the README content based on user input
            const readmeContent = generateMarkdown(answers);

            // Write the  README content to a file
            writeToFile('README.md', readmeContent);
        });
}

function generateMarkdown(data) {
    return `
# ${data.projectTitle}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
![License](https://img.shields.io/badge/license-${data.license}-green)
This project is licensed under the ${data.license} license. Click [here](https://opensource.org/licenses/${data.license}) for more information.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
Email: ${data.email}
`;
}

// Function call to initialize app
init();