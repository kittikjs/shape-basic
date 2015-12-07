/**
 * Base class for creating other shapes.
 * Each custom shape must extends from this class.
 *
 * @since 1.0.0
 * @version 1.0.0
 * @example
 * import Shape from 'kittik-shape-basic';
 *
 * export default class Rectangle extends Shape {
 *   constructor(...args) {
 *     super(...args);
 *   }
 *
 *   render(cursor) {
 *     // Implement your logic here for rendering the shape
 *   }
 * }
 */
export default class Shape {
  _options = {};

  /**
   * Constructor is responsible for initializing base properties.
   * Don't forgot to call `super(...args)` when extending from this class.
   *
   * @constructor
   * @param {Object} [options]
   * @param {String} [options.text] Text that will be rendered in shape
   * @param {Number} [options.width] Shape width
   * @param {Number} [options.height] Shape height
   * @param {Number} [options.x] Absolute coordinate X
   * @param {Number} [options.y] Absolute coordinate Y
   * @param {String} [options.background] Background color from {@link COLORS}
   * @param {String} [options.foreground] Foreground color from {@link COLORS}
   * @param {Object} [options.animation] Animation options for this shape
   */
  constructor(options = {}) {
    let {text, width, height, x, y, background, foreground, animation} = options;

    this.setText(text);
    this.setWidth(width);
    this.setHeight(height);
    this.setPosition(x, y);
    this.setBackground(background);
    this.setForeground(foreground);
    this.setAnimation(animation);
  }

  /**
   * Get option value.
   *
   * @param {String} path Path can be set with dot-notation
   * @returns {*}
   */
  get(path) {
    return path.split('.').reduce((obj, key) => obj[key], this._options);
  }

  /**
   * Set new option value.
   *
   * @param {String} path
   * @param {*} value
   * @returns {Shape}
   */
  set(path, value) {
    this._options[path] = value;
    return this;
  }

  /**
   * Get text content from this shape.
   *
   * @returns {String}
   */
  getText() {
    return this.get('text');
  }

  /**
   * Set new text content to this shape.
   *
   * @param {String} [text=''] New text
   * @returns {Shape}
   */
  setText(text = '') {
    this.set('text', text);
    return this;
  }

  /**
   * Get shape width.
   *
   * @returns {Number}
   */
  getWidth() {
    return this.get('width');
  }

  /**
   * Set new shape width.
   *
   * @param {Number} [width=15] Shape width
   * @returns {Shape}
   */
  setWidth(width = 15) {
    this.set('width', width);
    return this;
  }

  /**
   * Get shape height.
   *
   * @returns {Number}
   */
  getHeight() {
    return this.get('height');
  }

  /**
   * Set new shape height.
   *
   * @param {Number} [height=5] Shape height
   * @returns {Shape}
   */
  setHeight(height = 5) {
    this.set('height', height);
    return this;
  }

  /**
   * Get current position of shape.
   *
   * @returns {{x: Number, y: Number}}
   */
  getPosition() {
    return {x: this.get('x'), y: this.get('y')};
  }

  /**
   * Set new shape position.
   *
   * @param {Number} [x=10] Absolute coordinate X
   * @param {Number} [y=10] Absolute coordinate Y
   * @returns {Shape}
   */
  setPosition(x = 10, y = 10) {
    this.set('x', x);
    this.set('y', y);
    return this;
  }

  /**
   * Get background color.
   *
   * @returns {String}
   */
  getBackground() {
    return this.get('background');
  }

  /**
   * Set new background color.
   *
   * @param {String} background Background color from {@link COLORS}
   * @returns {Shape}
   */
  setBackground(background) {
    this.set('background', background);
    return this;
  }

  /**
   * Get foreground color.
   *
   * @returns {String}
   */
  getForeground() {
    return this.get('foreground');
  }

  /**
   * Set new foreground color.
   *
   * @param {String} foreground Foreground color from {@link COLORS}
   * @returns {Shape}
   */
  setForeground(foreground) {
    this.set('foreground', foreground);
    return this;
  }

  /**
   * Get animation options from this shape.
   *
   * @returns {Object}
   */
  getAnimation() {
    return this.get('animation');
  }

  /**
   * Set animation options to the shape.
   *
   * @param {Object} animation
   * @param {String} animation.name Animation name
   * @returns {Shape}
   */
  setAnimation(animation) {
    this.set('animation', animation);
    return this;
  }

  /**
   * Check if this shape is animated.
   *
   * @returns {Boolean}
   */
  isAnimated() {
    return !!this.get('animation');
  }

  /**
   * Base render method that must be implemented in childes.
   *
   * @abstract
   * @param {Cursor} cursor Cursor instance which you can use for render the shape
   * @throws {Error} Throws error if method will not be overridden
   */
  render(cursor) {
    throw new Error('render() method must be implemented');
  }

  /**
   * Returns Object representation of the shape.
   * This representation consists of all options fields.
   *
   * @returns {{name: String, options: {text: String, width: Number, height: Number, x: Number, y: Number, background: String, foreground: String}}}
   */
  toObject() {
    return {
      name: this.constructor.name,
      options: {
        text: this.getText(),
        width: this.getWidth(),
        height: this.getHeight(),
        x: this.getPosition().x,
        y: this.getPosition().y,
        background: this.getBackground(),
        foreground: this.getForeground(),
        animation: this.getAnimation()
      }
    };
  }

  /**
   * Returns JSON representation of the shape.
   *
   * @returns {String}
   */
  toJSON() {
    return JSON.stringify(this.toObject());
  }

  /**
   * Wrapper around `new Shape()`.
   *
   * @static
   * @param {*} args
   * @returns {Shape}
   */
  static create(...args) {
    return new this(...args);
  }

  /**
   * Creates new Shape instance from Object representation.
   *
   * @static
   * @param {Object} obj Object that you got from {@link Shape.toObject}
   * @returns {Shape}
   */
  static fromObject(obj) {
    if (!obj.name || !obj.options) throw new Error('It looks like it is not an Object representation of the shape');
    if (obj.name !== this.name) throw new Error(`${obj.name} is not an Object representation of the ${this.name}`);

    return this.create(obj.options);
  }

  /**
   * Creates new Shape instance from JSON representation.
   *
   * @static
   * @param {String} json JSON string that you got from {@link Shape.toJSON}
   * @returns {Shape}
   */
  static fromJSON(json) {
    let obj = JSON.parse(json);
    return this.fromObject(obj);
  }
}
