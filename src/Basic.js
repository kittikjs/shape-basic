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
   * @param {Number} [options.width] Shape width
   * @param {Number} [options.height] Shape height
   * @param {Number} [options.x] Absolute coordinate X
   * @param {Number} [options.y] Absolute coordinate Y
   * @param {String} [options.alignX] Set if shape is need to be aligned by X coordinates
   * @param {String} [options.alignY] Set if shape is need to be aligned by Y coordinates
   * @param {String} [options.background] Background color from {@link COLORS}
   * @param {String} [options.foreground] Foreground color from {@link COLORS}
   * @param {Object} [options.animation] Animation options for this shape
   * @param {String} [options.animation.name] Name of animation to play
   * @param {Object} [options.animation.options] Options for the specified animation
   */
  constructor(options = {}) {
    this._options = options;

    this.setText(this._options.text);
    this.setWidth(this._options.width);
    this.setHeight(this._options.height);
    this.setX(this._options.x);
    this.setY(this._options.y);
    this.setAlignX(this._options.alignX);
    this.setAlignY(this._options.alignY);
    this.setBackground(this._options.background);
    this.setForeground(this._options.foreground);
    this.setAnimation(this._options.animation);
  }

  /**
   * Get option value.
   *
   * @param {String} path Path can be set with dot-notation
   * @returns {*}
   */
  get(path) {
    return path.split('.').reduce((obj, key) => obj && obj[key], this._options);
  }

  /**
   * Set new option value.
   *
   * @param {String} path Path can be set with dot-notation
   * @param {*} value Value that need to be written to the options object
   * @returns {Shape}
   */
  set(path, value) {
    let obj = this._options;
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
    return this.get('width');
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
    return this.get('height');
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
    return this.get('x');
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
    return this.get('y');
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
   * Get align property within X coordinates.
   *
   * @returns {String}
   */
  getAlignX() {
    return this.get('alignX');
  }

  /**
   * Set align property within X coordinates.
   *
   * @param {String} [align=none] Can be left, center or right
   * @returns {Shape}
   */
  setAlignX(align = 'none') {
    if (['none', 'left', 'center', 'right'].indexOf(align) === -1) throw new Error(`Unknown align type: ${align}`);
    return this.set('alignX', align);
  }

  /**
   * Get align property within Y coordinates.
   *
   * @returns {String}
   */
  getAlignY() {
    return this.get('alignY');
  }

  /**
   * Set align property within Y coordinates.
   *
   * @param {String} [align=none] Can be top, middle or bottom
   * @returns {Shape}
   */
  setAlignY(align = 'none') {
    if (['none', 'top', 'middle', 'bottom'].indexOf(align) === -1) throw new Error(`Unknown align type: ${align}`);
    return this.set('alignY', align);
  }

  /**
   * Check if this shape must be aligned.
   *
   * @returns {Boolean}
   */
  isAligned() {
    return !(this.getAlignX() === 'none' && this.getAlignY() === 'none');
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
        text: this.getText(),
        width: this.getWidth(),
        height: this.getHeight(),
        x: this.getX(),
        y: this.getY(),
        alignX: this.getAlignX(),
        alignY: this.getAlignY(),
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
