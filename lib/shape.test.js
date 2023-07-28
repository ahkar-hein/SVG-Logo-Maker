const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

describe('circle' , () => {
    it('Shape color should be green' , () => {
        const expectedRender = `<circle cx="150" cy="100" r="80" fill="green"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">AKH</text>`;

        const color = "blue";
        const logoName = "AKH";
        const shapeColor = "green"

        const shape = new Circle(color, logoName ,shapeColor);
        expect(shape.render()).toEqual(expectedRender)
    })
})


