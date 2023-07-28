//import required package and files.
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');

// declared variables to store logo path and name.
const logoFilePath = './logo.svg';
// create arrays for questions.
const questions = [
    {
        type: 'input',
        name: 'logoName',
        message: 'Enter text for the logo. (No more than 3 letters)',
        // validate for no more than 3 letter by if condition.
        validate: function (input) {
            if (input.length <= 3) {
                return true;
            }
            return 'Please enter no more than 3 letters.';
        }
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter text color for the logo.',
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Select shape for Logo.',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color for the logo.',
    },
];

// prompt the question by using inquirer package.
inquirer.prompt(questions).then((answers) => {
    // store the answer into object.
    const { logoName, color, shapeType, shapeColor } = answers;
    let shape;

    switch (shapeType.toLowerCase()) {
        // If the selected shape type is 'circle', create a new instance of the Circle class with color, logoName and shapeColor as arguments to the constructor.
        case 'circle':
            shape = new Circle(color, logoName ,shapeColor);
            break;
        // If the selected shape type is 'triangle', create a new instance of the triangle class with color, logoName and shapeColor as arguments to the constructor.
        case 'triangle':
            shape = new Triangle(color, logoName, shapeColor);
            break;
        // If the selected shape type is 'square', create a new instance of the square class with color, logoName and shapeColor as arguments to the constructor.
        case 'square':
            shape = new Square(color, logoName, shapeColor);
            break;
        default:
            console.log('Invalid shape type.');
            return;
    }
    // render svg file with width 300, height 200
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
  </svg>`;

//   generate svg file with fs package.
  fs.writeFile(logoFilePath, svg, (err) => {
      if (err) {
          console.error('Error saving the SVG file:', err);
          return;
      }
      console.log('Generated logo.svg');
  });
});