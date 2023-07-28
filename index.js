const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');

const logoFilePath = './logo.svg';
const questions = [
    {
        type: 'input',
        name: 'logoName',
        message: 'Enter text for the logo. (No more than 3 letters)',
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

inquirer.prompt(questions).then((answers) => {
    const { logoName, color, shapeType, shapeColor } = answers;
    let shape;

    switch (shapeType.toLowerCase()) {
        case 'circle':
            shape = new Circle(color, logoName ,shapeColor);
            break;
        case 'triangle':
            shape = new Triangle(color, logoName, shapeColor);
            break;
        case 'square':
            shape = new Square(color, logoName, shapeColor);
            break;
        default:
            console.log('Invalid shape type.');
            return;
    }
});