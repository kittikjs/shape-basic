# Global





* * *

## Class: exports



## Class: Shape



## Class: Shape


### Shape.get(path) 

Get option value.

**Parameters**

**path**: `String`, Path can be set with dot-notation

**Returns**: `*`

### Shape.set(path, value) 

Set new option value.

**Parameters**

**path**: `String`, Path can be set with dot-notation

**value**: `*`, Value that need to be written to the options object

**Returns**: `Shape`

### Shape.getText() 

Get text content from this shape.

**Returns**: `String`

### Shape.setText(text) 

Set new text content to this shape.

**Parameters**

**text**: `String`, New text

**Returns**: `Shape`

### Shape.getWidth() 

Get shape width.

**Returns**: `Number`

### Shape.setWidth(width) 

Set new shape width.

**Parameters**

**width**: `Number`, Shape width

**Returns**: `Shape`

### Shape.getHeight() 

Get shape height.

**Returns**: `Number`

### Shape.setHeight(height) 

Set new shape height.

**Parameters**

**height**: `Number`, Shape height

**Returns**: `Shape`

### Shape.getPosition() 

Get current position of shape.

**Returns**: `Object`

### Shape.setPosition(x, y) 

Set new shape position.

**Parameters**

**x**: `Number`, Absolute coordinate X

**y**: `Number`, Absolute coordinate Y

**Returns**: `Shape`

### Shape.getBackground() 

Get background color.

**Returns**: `String`

### Shape.setBackground(background) 

Set new background color.

**Parameters**

**background**: `String`, Background color from COLORS

**Returns**: `Shape`

### Shape.getForeground() 

Get foreground color.

**Returns**: `String`

### Shape.setForeground(foreground) 

Set new foreground color.

**Parameters**

**foreground**: `String`, Foreground color from COLORS

**Returns**: `Shape`

### Shape.getAnimation() 

Get animation options from this shape.

**Returns**: `Object`

### Shape.setAnimation(animation, animation.name) 

Set animation options to the shape.

**Parameters**

**animation**: `Object`, Set animation options to the shape.

**animation.name**: `String`, Animation name

**Returns**: `Shape`

### Shape.isAnimated() 

Check if this shape is animated.

**Returns**: `Boolean`

### Shape.render(cursor) 

Base render method that must be implemented in childes.

**Parameters**

**cursor**: `Cursor`, Cursor instance which you can use for render the shape


### Shape.toObject() 

Returns Object representation of the shape.
This representation consists of all options fields.

**Returns**: `Object`

### Shape.toJSON() 

Returns JSON representation of the shape.

**Returns**: `String`

### Shape.create(args) 

Wrapper around `new Shape()`.

**Parameters**

**args**: `*`, Wrapper around `new Shape()`.

**Returns**: `Shape`

### Shape.fromObject(obj) 

Creates new Shape instance from Object representation.

**Parameters**

**obj**: `Object`, Object that you got from Shape.toObject

**Returns**: `Shape`

### Shape.fromJSON(json) 

Creates new Shape instance from JSON representation.

**Parameters**

**json**: `String`, JSON string that you got from Shape.toJSON

**Returns**: `Shape`



* * *










