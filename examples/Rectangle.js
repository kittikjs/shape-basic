"use strict";

const Cursor = require('kittik-cursor');
const Shape = require('../lib/Shape');
const cursor = new Cursor().resetTTY();

// Create class that extends from Shape and implement render() method
class Rectangle extends Shape {
  render(cursor) {
    const text = this.getText();
    const width = this.getWidth();
    const height = this.getHeight();
    const x1 = this.getX();
    const y1 = this.getY();
    const x2 = x1 + width;
    const y2 = y1 + height;
    const background = this.getBackground();
    const foreground = this.getForeground();
    const filler = ' '.repeat(width);

    cursor.moveTo(x1, y1);

    for (let y = y1; y <= y2; y++) {
      cursor.background(background).foreground(foreground).write(filler);
      cursor.moveTo(x1, y);
    }

    cursor.moveTo(x1 + (width / 2 - text.length / 2), y1 + (height / 2)).write(text);

    return this;
  }
}

Rectangle.create({text: '1', x: 'left', y: 'top', background: 'dark_green', foreground: 'white'}).render(cursor);
Rectangle.create({text: '2', x: 'center', y: 'top', background: 'black', foreground: 'white'}).render(cursor);
Rectangle.create({text: '3', x: 'right', y: 'top', background: 'navy_blue', foreground: 'white'}).render(cursor);
Rectangle.create({text: '4', x: 'left', y: 'middle', background: 'dark_green', foreground: 'white'}).render(cursor);
Rectangle.create({text: '5', x: 'center', y: 'middle', background: 'black', foreground: 'white'}).render(cursor);
Rectangle.create({text: '6', x: 'right', y: 'middle', background: 'navy_blue', foreground: 'white'}).render(cursor);
Rectangle.create({text: '7', x: 'left', y: 'bottom', background: 'dark_green', foreground: 'white'}).render(cursor);
Rectangle.create({text: '8', x: 'center', y: 'bottom', background: 'black', foreground: 'white'}).render(cursor);
Rectangle.create({text: '9', x: 'right', y: 'bottom', background: 'navy_blue', foreground: 'white'}).render(cursor);

cursor.moveTo(0, process.stdout.rows - 1).flush();
