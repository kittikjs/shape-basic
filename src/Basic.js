/**
 * Base class for creating other shapes.
 * Each custom shape must extends from this class.
 *
 * @since 1.0.0
 * @example
 * import Shape from 'kittik-shape-basic';
 *
 * export default class Rectangle extends Shape {
 *   render(cursor) {
 *     // Implement your logic here for rendering the shape
 *   }
 * }
 */
export default class Shape {
  /**
   * @constructor
   * @param {Object} [options]
   * @param {String} [options.text] Text that will be rendered in the shape
   * @param {Number|String} [options.width] Shape width
   * @param {Number|String} [options.height] Shape height
   * @param {Number|String} [options.x] Absolute coordinate X
   * @param {Number|String} [options.y] Absolute coordinate Y
   * @param {String} [options.background] Background color
   * @param {String} [options.foreground] Foreground color
   * @param {Object} [options.animation] Animation options for this shape
   * @param {String} [options.animation.name] Name of animation to play
   * @param {Object} [options.animation.options] Options for the specified animation
   */
  constructor(options = {}) {
    this.setText(options.text);
    this.setWidth(options.width);
    this.setHeight(options.height);
    this.setX(options.x);
    this.setY(options.y);
    this.setBackground(options.background);
    this.setForeground(options.foreground);
    this.setAnimation(options.animation);
  }

  /**
   * Get option value.
   *
   * @param {String} path Path can be set with dot-notation
   * @returns {*}
   */
  get(path) {
    return path.split('.').reduce((obj, key) => obj && obj[key], this);
  }

  /**
   * Set new option value.
   *
   * @param {String} path Path can be set with dot-notation
   * @param {*} value Value that need to be written to the options object
   * @returns {Shape}
   */
  set(path, value) {
    let obj = this;
    let tags = path.split('.');
    let len = tags.length - 1;

    for (let i = 0; i < len; i++) {
      if (typeof obj[tags[i]] === 'undefined') obj[tags[i]] = {};
      obj = obj[tags[i]];
    }

    obj[tags[len]] = value;

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
    return this.set('text', text);
  }

  /**
   * Get shape width.
   *
   * @returns {Number}
   */
  getWidth() {
    const width = this.get('width');

    if (/\d+%$/.test(width)) return width.slice(0, -1) * process.stdout.columns / 100;

    return width;
  }

  /**
   * Set new shape width.
   *
   * @param {Number} [width=15] Shape width
   * @returns {Shape}
   */
  setWidth(width = 15) {
    return this.set('width', width);
  }

  /**
   * Get shape height.
   *
   * @returns {Number}
   */
  getHeight() {
    const height = this.get('height');

    if (/\d+%$/.test(height)) return height.slice(0, -1) * process.stdout.rows / 100;

    return height;
  }

  /**
   * Set new shape height.
   *
   * @param {Number} [height=5] Shape height
   * @returns {Shape}
   */
  setHeight(height = 5) {
    return this.set('height', height);
  }

  /**
   * Get X coordinate.
   *
   * @returns {Number}
   */
  getX() {
    const x = this.get('x');

    if (x === 'left') return 1;
    if (x === 'center') return process.stdout.columns / 2 - this.getWidth() / 2;
    if (x === 'right') return process.stdout.columns - this.getWidth();
    if (/\d+%$/.test(x)) return x.slice(0, -1) * process.stdout.columns / 100;

    return x;
  }

  /**
   * Set X coordinate.
   *
   * @param {Number} [x=10]
   * @returns {Shape}
   */
  setX(x = 10) {
    return this.set('x', x);
  }

  /**
   * Get Y coordinate.
   *
   * @returns {Number}
   */
  getY() {
    const y = this.get('y');

    if (y === 'top') return 1;
    if (y === 'middle') return process.stdout.rows / 2 - this.getHeight() / 2;
    if (y === 'bottom') return process.stdout.rows - this.getHeight();
    if (/\d+%$/.test(y)) return y.slice(0, -1) * process.stdout.rows / 100;

    return y;
  }

  /**
   * Set Y coordinate.
   *
   * @param {Number} [y=10]
   * @returns {Shape}
   */
  setY(y = 10) {
    return this.set('y', y);
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
    return this.set('background', background);
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
    return this.set('foreground', foreground);
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
   * @param {String} [animation.options] Animation options
   * @returns {Shape}
   */
  setAnimation(animation) {
    return this.set('animation', animation);
  }

  /**
   * Get animation name.
   *
   * @returns {String}
   */
  getAnimationName() {
    return this.get('animation.name');
  }

  /**
   * Set animation name.
   *
   * @param {String} name
   * @returns {Shape}
   */
  setAnimationName(name) {
    return this.set('animation.name', name);
  }

  /**
   * Get animation options.
   *
   * @returns {Object}
   */
  getAnimationOptions() {
    return this.get('animation.options');
  }

  /**
   * Set animation options.
   *
   * @param {Object} options
   * @returns {Shape}
   */
  setAnimationOptions(options) {
    return this.set('animation.options', options);
  }

  /**
   * Check if this shape is animated.
   *
   * @returns {Boolean}
   */
  isAnimated() {
    return !!(this.get('animation') && this.get('animation.name'));
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
   * @returns {Object}
   */
  toObject() {
    return {
      name: this.constructor.name,
      options: {
        text: this.get('text'),
        width: this.get('width'),
        height: this.get('height'),
        x: this.get('x'),
        y: this.get('y'),
        background: this.get('background'),
        foreground: this.get('foreground'),
        animation: this.get('animation')
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
