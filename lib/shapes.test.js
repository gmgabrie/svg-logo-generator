// Shapes constructor imported
const { Triangle, Circle, Square } = require('./shapes.js');

// Test for Triangle creation
describe('Triangle function test', () => {
  it('test to see if a triangle with a yellow background is created', () => {
      const shape = new Triangle();
      shape.setColor('yellow');
      expect(shape.render()).toEqual(`<polygon points="102, 5 196, 169 8, 169" fill="yellow" />`);
    });
  });

  // Test for Square creation
describe('Square function test', () => {
    it('test to see if a square with a yellow background is created', () => {
        const shape = new Square();
        shape.setColor('yellow');
        expect(shape.render()).toEqual(`<rect x="20" y="20" width="160" height="160" fill="yellow" />`);
      });
    });

// Test for Circle creation
describe('Circle function test', () => {
    it('test to see if a circle with a yellow background is created', () => {
        const shape = new Circle();
        shape.setColor('yellow');
        expect(shape.render()).toEqual(`<circle cx="100" cy="100" r="80" fill="yellow" />`);
      });
    });