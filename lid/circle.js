const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(color, logoName,shapeColor){
        super(shapeColor);
        this.logoName = logoName;
        this.color = color;
    }
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.logoName}</text>`;
    }
}
module.exports = Circle