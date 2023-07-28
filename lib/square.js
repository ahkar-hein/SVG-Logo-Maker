const Shape = require('./shape.js');

// create square class extends shape.js
class Square extends Shape {
    constructor(color, logoName, shapeColor){
       // It passes the 'shapeColor' argument to the Shape class constructor to initialize the shapeColor property.
        super(shapeColor);
        // logoName property hold the logo text.
        this.logoName=logoName;
        // color property hold the color text.
        this.color=color;
    }
    render() {
      // Generate the SVG string for a square with the specified color, text color and logoname
      return `<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />
<text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.color}">${this.logoName}</text>`;
    }
  }
module.exports = Square;  