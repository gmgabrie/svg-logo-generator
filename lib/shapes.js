// Main shape class to be used for specific shape classes
class Shape {
    constructor() {
      this.color = "";
    }
    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  
  // Triangle class
  class Triangle extends Shape {
    render() {
      return `<polygon points="102, 5 196, 169 8, 169" fill="${this.color}" />`;
    }
  }
  
  // Square class
  class Square extends Shape {
    render() {
      return `<rect x="20" y="20" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  // Circle class
  class Circle extends Shape {
    render() {
      return `<circle cx="100" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  // Exports classes (Square, Triangle, Circle)
  module.exports = { Triangle, Square, Circle };