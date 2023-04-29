// import Inquirer
const inquirer = require('inquirer');

// import file system module from Node
const fs = require('fs');

// import shape classes from shape.js file
const {Triangle, Square, Circle } = require('./lib/shapes');

// Function to write SVG file to file system based on user inputs
function writeToFile(fileName, answers) {
  let svgInfo = "";
  svgInfo =
    '<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgInfo += "<g>";
  svgInfo += `${answers.shape}`;

  let shapeSelection;
  if (answers.shape === "Triangle") {
    shapeSelection = new Triangle();
    svgInfo += `<polygon points="102, 5 196, 169 8, 169" fill="${answers.shapeColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeSelection = new Square();
    svgInfo += `<rect x="20" y="20" width="160" height="160" fill="${answers.shapeColor}"/>`;
  } else {
    shapeSelection = new Circle();
    svgInfo += `<circle cx="100" cy="100" r="80" fill="${answers.shapeColor}"/>`;
  }

  // add text properties to svg object
  svgInfo += `<text x="100" y="110" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  // Closing </g> tag
  svgInfo += "</g>";
  // Closing </svg> tag
  svgInfo += "</svg>";

  // Use file system module to write the SVG file and indicate if successful or 
  fs.writeFile(fileName, svgInfo, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

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
  .then((answers) => {
    // Error handling for text prompt (user must enter 3 characters or less for logo to generate)
    if (answers.text.length > 3) {
      console.log("Must enter a value of no more than 3 characters");
      promptUser();
    } else {
      // Calling write file function to generate SVG file
      writeToFile("logo.svg", answers);
    }
  });
}

promptUser();