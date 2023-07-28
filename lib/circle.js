// import shape.js
const Shape = require('./shape.js');

// create circle class extends shape.js
class Circle extends Shape {
    constructor(color, logoName,shapeColor){
        // It passes the 'shapeColor' argument to the Shape class constructor to initialize the shapeColor property.
        super(shapeColor);
        // logoName property hold the logo text.
        this.logoName = logoName;
        // color property hold the color text.
        this.color = color;
    }
    
    render() {
        // Generate the SVG string for a cirlce with the specified color, text color and logoname
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.logoName}</text>`;
    }
}
// export cirlce.
module.exports = Circle