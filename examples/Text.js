"use strict";

const Cursor = require('kittik-cursor').Cursor;
const Shape = require('../lib/Basic').default;
const cursor = new Cursor().resetTTY();

class Text extends Shape {
  render(cursor) {
    const text = this.getText();
    const x = this.getPosition().x;
    const y = this.getPosition().y;
    const background = this.getBackground();
    const foreground = this.getForeground();

    if (background) cursor.background(background);
    if (foreground) cursor.foreground(foreground);

    cursor.moveTo(x, y).write(text);

    return this;
  }
}

let text = new Text({text: 'Hello there', x: 20, y: 10, align: 'center'}).render(cursor);
cursor.flush();
