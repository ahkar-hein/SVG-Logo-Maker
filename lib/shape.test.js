// import circle, triangle and square file.
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

// describe to test circle class
describe('Circle' , () => {
    it('Circle shape color should be green' , () => {
        // expected output render
        const expectedRender = `<circle cx="150" cy="100" r="80" fill="green"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">AKH</text>`;
        
        // declare the varibles and store the color, logoName and ShapeColor for testing. 
        const color = "blue";
        const logoName = "AKH";
        const shapeColor = "green"

        // create an instance of the Circle class with the specified 'color', 'logoName', and 'shapeColor'.
        const shape = new Circle(color, logoName ,shapeColor);
        // calling the 'render()' method on the Circle instance matches the 'expectedRender' value.
        expect(shape.render()).toEqual(expectedRender)
    })
})

// describe to test triangle class
describe('Triangle' , () => {
    it('Triangle shape color should be green' , () => {
        // expected output render
        const expectedRender = `<polygon points="150, 30 75, 170 225, 170" fill="green" />
<text x="150" y="125" font-size="30" text-anchor="middle" fill="blue">AKH</text>`;

        // declare the varibles and store the color, logoName and ShapeColor for testing.
        const color = "blue";
        const logoName = "AKH";
        const shapeColor = "green"

        // create an instance of the triangle class with the specified 'color', 'logoName', and 'shapeColor'.
        const shape = new Triangle(color, logoName ,shapeColor);
        // calling the 'render()' method on the triangle instance matches the 'expectedRender' value.
        expect(shape.render()).toEqual(expectedRender)
    })
})

// describe to test square class
describe('Square' , () => {
    it('Square shape color should be green' , () => {
        // expected output render
        const expectedRender = `<rect x="50" y="50" width="200" height="200" fill="green" />
<text x="150" y="145" font-size="60" text-anchor="middle" fill="blue">AKH</text>`;;

        // declare the varibles and store the color, logoName and ShapeColor for testing.
        const color = "blue";
        const logoName = "AKH";
        const shapeColor = "green"
        // create an instance of the square class with the specified 'color', 'logoName', and 'shapeColor'.
        const shape = new Square(color, logoName ,shapeColor);
        // calling the 'render()' method on the square instance matches the 'expectedRender' value.
        expect(shape.render()).toEqual(expectedRender)
    })
})


