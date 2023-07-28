const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

describe('Circle' , () => {
    it('Circle shape color should be green' , () => {
        const expectedRender = `<circle cx="150" cy="100" r="80" fill="green"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">AKH</text>`;

        const color = "blue";
        const logoName = "AKH";
        const shapeColor = "green"

        const shape = new Circle(color, logoName ,shapeColor);
        expect(shape.render()).toEqual(expectedRender)
    })
})

describe('Triangle' , () => {
    it('Triangle shape color should be green' , () => {
        const expectedRender = `<polygon points="150, 30 75, 170 225, 170" fill="green" />
<text x="150" y="125" font-size="30" text-anchor="middle" fill="blue">AKH</text>`;

        const color = "blue";
        const logoName = "AKH";
        const shapeColor = "green"

        const shape = new Triangle(color, logoName ,shapeColor);
        expect(shape.render()).toEqual(expectedRender)
    })
})

describe('Square' , () => {
    it('Square shape color should be green' , () => {
        const expectedRender = `<rect x="50" y="50" width="200" height="200" fill="green" />
<text x="150" y="145" font-size="60" text-anchor="middle" fill="blue">AKH</text>`;;

        const color = "blue";
        const logoName = "AKH";
        const shapeColor = "green"

        const shape = new Square(color, logoName ,shapeColor);
        expect(shape.render()).toEqual(expectedRender)
    })
})


