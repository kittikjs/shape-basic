import { assert } from 'chai';
import sinon from 'sinon';
import Shape from '../../src/Basic';

describe('Shape', () => {
  it('Should properly initialize shape instance with no arguments', () => {
    let shape = new Shape();
    assert.instanceOf(shape, Shape);
  });

  it('Should properly initialize shape instance with arguments', () => {
    let shape = new Shape({text: 'test'});
    assert.instanceOf(shape, Shape);
    assert.equal(shape.getText(), 'test');
  });

  it('Should properly get/set from options object', () => {
    let shape = new Shape();
    assert.equal(shape.get('text'), '');
    assert.instanceOf(shape.set('animation.name', 'print'), Shape);
    assert.equal(shape.get('animation.name'), 'print');
    assert.instanceOf(shape.set('animation.name', 'test'), Shape);
    assert.equal(shape.get('animation.name'), 'test');
  });

  it('Should properly get/set text', () => {
    let shape = new Shape();
    assert.equal(shape.getText(), '');
    assert.instanceOf(shape.setText('test'), Shape);
    assert.equal(shape.getText(), 'test');
  });

  it('Should properly get/set width', () => {
    let shape = new Shape();
    assert.equal(shape.getWidth(), 15);
    assert.instanceOf(shape.setWidth(5), Shape);
    assert.equal(shape.getWidth(), 5);
  });

  it('Should properly get/set height', () => {
    let shape = new Shape();
    assert.equal(shape.getHeight(), 5);
    assert.instanceOf(shape.setHeight(15), Shape);
    assert.equal(shape.getHeight(), 15);
  });

  it('Should properly get/set x coordinate', () => {
    let shape = new Shape();
    assert.equal(shape.getX(), 10);
    assert.instanceOf(shape.setX(20), Shape);
    assert.equal(shape.getX(), 20);
  });

  it('Should properly get/set y coordinate', () => {
    let shape = new Shape();
    assert.equal(shape.getY(), 10);
    assert.instanceOf(shape.setY(20), Shape);
    assert.equal(shape.getY(), 20);
  });

  it('Should properly get/set background', () => {
    let shape = new Shape();
    assert.notOk(shape.getBackground());
    assert.instanceOf(shape.setBackground('test'), Shape);
    assert.equal(shape.getBackground(), 'test');
  });

  it('Should properly get/set foreground', () => {
    let shape = new Shape();
    assert.notOk(shape.getBackground());
    assert.instanceOf(shape.setForeground('test'), Shape);
    assert.equal(shape.getForeground(), 'test');
  });

  it('Should properly get/set animation', () => {
    let shape = new Shape();
    assert.notOk(shape.getAnimation());
    assert.instanceOf(shape.setAnimation({name: 'print'}), Shape);
    assert.deepEqual(shape.getAnimation(), {name: 'print'});
  });

  it('Should properly check if shape is animated', () => {
    let shape = new Shape();
    assert.notOk(shape.isAnimated());
    assert.instanceOf(shape.setAnimation({name: 'print'}), Shape);
    assert.ok(shape.isAnimated());
  });

  it('Should properly throw exception if render is not overridden', () => {
    let shape = new Shape();
    assert.throws(() => shape.render(), Error);
  });

  it('Should properly serialize shape to object', () => {
    let shape = new Shape();
    let obj = shape.toObject();

    assert.deepEqual(obj, {
      name: 'Shape',
      options: {
        text: '',
        width: 15,
        height: 5,
        x: 10,
        y: 10,
        alignX: 'none',
        alignY: 'none',
        background: undefined,
        foreground: undefined,
        animation: undefined
      }
    });
  });

  it('Should properly serialize shape to object with custom options', () => {
    let shape = new Shape({text: 'test', x: 0, y: 0, width: 30, height: 50, animation: {name: 'print'}});
    let obj = shape.toObject();

    assert.deepEqual(obj, {
      name: 'Shape',
      options: {
        text: 'test',
        width: 30,
        height: 50,
        x: 0,
        y: 0,
        alignX: 'none',
        alignY: 'none',
        background: undefined,
        foreground: undefined,
        animation: {
          name: 'print'
        }
      }
    });
  });

  it('Should properly serialize shape to JSON', () => {
    let shape = new Shape();
    let json = shape.toJSON();

    assert.equal(json, '{"name":"Shape","options":{"text":"","width":15,"height":5,"x":10,"y":10,"alignX":"none","alignY":"none"}}');
  });

  it('Should properly serialize shape to JSON with custom options', () => {
    let shape = new Shape({text: 'test', x: 0, y: 0, width: 30, height: 50});
    let json = shape.toJSON();

    assert.equal(json, '{"name":"Shape","options":{"text":"test","width":30,"height":50,"x":0,"y":0,"alignX":"none","alignY":"none"}}');
  });

  it('Should properly create Shape instance from static create()', () => {
    let shape = Shape.create({text: 'test'});
    assert.equal(shape.getText(), 'test');
    assert.instanceOf(shape, Shape);
  });

  it('Should properly throw error if trying to create Shape not from Object representation', () => {
    let obj = {};
    assert.throws(() => Shape.fromObject(obj), Error, 'It looks like it is not an Object representation of the shape');
  });

  it('Should properly throw error if trying to create Shape not from its representation', () => {
    let obj = {name: 'Rectangle', options: {}};
    assert.throws(() => Shape.fromObject(obj), Error, 'Rectangle is not an Object representation of the Shape');
  });

  it('Should properly create Shape instance from Object representation', () => {
    let obj = {
      name: 'Shape',
      options: {
        text: 'test',
        width: 30,
        height: 50,
        x: 0,
        y: 0,
        background: undefined,
        foreground: undefined,
        animation: {
          name: 'print',
          options: {
            interval: 100
          }
        }
      }
    };

    let shape = Shape.fromObject(obj);
    assert.instanceOf(shape, Shape);
    assert.equal(shape.getText(), 'test');
    assert.equal(shape.getWidth(), 30);
    assert.equal(shape.getHeight(), 50);
    assert.equal(shape.getX(), 0);
    assert.equal(shape.getY(), 0);
    assert.isUndefined(shape.getBackground());
    assert.isUndefined(shape.getForeground());
    assert.equal(shape.getAnimationName(), 'print');
    assert.deepEqual(shape.getAnimationOptions(), {interval: 100});
  });

  it('Should properly create Shape instance from JSON representation', () => {
    let json = '{"name":"Shape","options":{"text":"test","width":30,"height":50,"x":0,"y":0}}';
    let shape = Shape.fromJSON(json);

    assert.instanceOf(shape, Shape);
    assert.equal(shape.getText(), 'test');
    assert.equal(shape.getWidth(), 30);
    assert.equal(shape.getHeight(), 50);
    assert.equal(shape.getX(), 0);
    assert.equal(shape.getY(), 0);
    assert.isUndefined(shape.getBackground());
    assert.isUndefined(shape.getForeground());
  });
});
