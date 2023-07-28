const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(color, logoName, shapeColor) {
        super(shapeColor);
        this.logoName=logoName;
        this.color = color;
    }
    render() {
      // Generate the SVG string for a triangle with the specified color
      return `<polygon points="150, 30 75, 170 225, 170" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.color}">${this.logoName}</text>`;
    }
}

module.exports = Triangle;