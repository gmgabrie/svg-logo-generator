// import Inquirer
const inquirer = require('inquirer');

// import file system module from Node
const fs = require('fs');

function promptUser() {

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for your logo:',
    },
    {
      type: 'input',
      message: 'What color would you like to use for your logo text?',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'What shape would you like your logo to be rendered with?',
      name: 'shape',
      choices: ['Triangle', 'Square', 'Circle'],
    },
    {
        type: 'input',
        message: 'What color would you like to use for your logo shape?',
        name: 'shapeColor',
      },
  ])
}

promptUser();