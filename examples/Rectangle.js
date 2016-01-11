"use strict";

const Cursor = require('kittik-cursor').Cursor;
const Shape = require('../lib/Basic').default;
const cursor = new Cursor().resetTTY();

// Create class that extends from Shape and implement render() method
class Rectangle extends Shape {
  render(cursor) {
    let text = this.getText();
    let width = this.getWidth();
    let height = this.getHeight();
    let x1 = this.getX();
    let y1 = this.getY();
    let x2 = x1 + width;
    let y2 = y1 + height;
    let background = this.getBackground();
    let foreground = this.getForeground();
    let filler = ' '.repeat(width);

    if (typeof background !== 'undefined') cursor.background(background);
    if (typeof foreground !== 'undefined') cursor.foreground(foreground);

    cursor.moveTo(x1, y1);

    for (let y = y1; y <= y2; y++) {
      cursor.write(filler);
      cursor.moveTo(x1, y);
    }

    cursor.moveTo(x1 + (width / 2 - text.length / 2), y1 + (height / 2)).write(text);

    return this;
  }
}

Rectangle.create({
  text: 'Hello there',
  x: 'center',
  y: '10%',
  width: '50%',
  height: '10%',
  background: 'dark_green',
  foreground: 'navy_blue'
}).render(cursor);

cursor.flush();
