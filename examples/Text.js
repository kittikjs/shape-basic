"use strict";

const Cursor = require('kittik-cursor').Cursor;
const Shape = require('../lib/Basic').default;
const cursor = new Cursor().resetTTY();

// Create class that extends from Shape and implement render() method
class Text extends Shape {
  render(cursor) {
    const text = this.getText();
    const x = this.getX();
    const y = this.getY();

    cursor.moveTo(x, y).write(text);

    return this;
  }
}

Text.create({text: 'Hello there', x: 'center', y: 10}).render(cursor);
cursor.flush();
