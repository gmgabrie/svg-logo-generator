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
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
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
  svgInfo += `<text x="100" y="110" text-anchor="middle" font-family="${answers.textFont}" font-size="${answers.textSize}" font-style="${answers.textItalic}" font-weight="${answers.textBold}" text-decoration="${answers.textUnderline}" fill="${answers.textColor}">${answers.text}</text>`;
  svgInfo += "</g>";
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
      type: 'list',
      message: 'Would font would you like your text to be?',
      name: 'textFont',
      choices: [
        { name: 'Helvetica', value:'Helvetica' },
        { name: 'Arial', value:'Arial' },
        { name: 'Comic Sans MS', value:'Comic Sans MS' },
      ]
    },
    {
      type: 'input',
      message: 'What color would you like to use for your logo text (color name or hex code)?',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Would size would you like your text to be?',
      name: 'textSize',
      choices: [
        { name: 'Small', value:'30' },
        { name: 'Medium', value:'40'},
        { name: 'Large', value:'50'},
        { name: 'X-Large', value:'65'},
      ]
    },
    {
      type: 'list',
      message: 'Would you like your text to be bold?',
      name: 'textBold',
      choices: [
        { name: 'Yes', value:'bold' },
        { name: 'No', value:''}
      ]
    },
    {
      type: 'list',
      message: 'Would you like your text to be italicized?',
      name: 'textItalic',
      choices: [
        { name: 'Yes', value:'italic' },
        { name: 'No', value:''}
      ]
    },
    {
      type: 'list',
      message: 'Would you like your text to be underlined?',
      name: 'textUnderline',
      choices: [
        { name: 'Yes', value:'underline' },
        { name: 'No', value:''}
      ]
    },
    {
      type: 'list',
      message: 'What shape would you like to have used for your logo?',
      name: 'shape',
      choices: ['Triangle', 'Square', 'Circle'],
    },
    {
        type: 'input',
        message: 'What color would you like to use for your logo shape (color name or hex code)?',
        name: 'shapeColor',
      },
  ])
  .then((answers) => {
    // Error handling for text prompt (user must enter 3 characters or less for logo to generate)
    if (answers.text.length > 3) {
      console.log("Must enter a value of no more than 3 characters");
  
      promptUser();
    } 
    else {
      // Calling write file function to generate SVG file
      writeToFile("logo.svg", answers);
    }
  });
}

promptUser();