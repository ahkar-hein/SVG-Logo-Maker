const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(color, logoName, shapeColor) {
        // It passes the 'shapeColor' argument to the Shape class constructor to initialize the shapeColor property.
        super(shapeColor);
        // logoName property hold the logo text.
        this.logoName=logoName;
        // color property hold the color text.
        this.color = color;
    }
    render() {
      // Generate the SVG string for a triangle with the specified shapeColor, text color and logoname.
      return `<polygon points="150, 30 75, 170 225, 170" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.color}">${this.logoName}</text>`;
    }
}

module.exports = Triangle;