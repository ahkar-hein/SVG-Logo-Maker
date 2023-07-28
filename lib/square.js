const Shape = require('./shape.js');

class Square extends Shape {
    constructor(color, logoName, shapeColor){
        super(shapeColor);
        this.logoName=logoName;
        this.color=color;
    }
    render() {
      // Generate the SVG string for a square with the specified color
      return `<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />
<text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.color}">${this.logoName}</text>`;
    }
  }
module.exports = Square;  