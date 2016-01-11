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

### Shape.getX() 

Get X coordinate.

**Returns**: `Number`

### Shape.setX(x) 

Set X coordinate.

**Parameters**

**x**: `Number`, Set X coordinate.

**Returns**: `Shape`

### Shape.getY() 

Get Y coordinate.

**Returns**: `Number`

### Shape.setY(y) 

Set Y coordinate.

**Parameters**

**y**: `Number`, Set Y coordinate.

**Returns**: `Shape`

### Shape.getBackground() 

Get background color.

**Returns**: `String`

### Shape.setBackground(background) 

Set new background color.

**Parameters**

**background**: `String`, Background value from cursor colors or color name

**Returns**: `Shape`

### Shape.getForeground() 

Get foreground color.

**Returns**: `String`

### Shape.setForeground(foreground) 

Set new foreground color.

**Parameters**

**foreground**: `String`, Foreground value from cursor colors or color name

**Returns**: `Shape`

### Shape.getAnimation() 

Get animation options from this shape.

**Returns**: `Object`

### Shape.setAnimation(animation, animation.in, animation.in.name, animation.in.options, animation.focus, animation.focus.name, animation.focus.options, animation.out, animation.out.name, animation.out.options) 

Set animation options to the shape.

**Parameters**

**animation**: `Object`, Set animation options to the shape.

**animation.in**: `Object`, Animation which is used for showing the shape

**animation.in.name**: `String`, Animation name for showing the shape

**animation.in.options**: `Object`, Animation options

**animation.focus**: `Object`, Animation which is used for focusing the shape

**animation.focus.name**: `String`, Animation name for focusing the shape

**animation.focus.options**: `Object`, Animation options

**animation.out**: `Object`, Animation which is used for hiding the shape

**animation.out.name**: `String`, Animation name for out the shape

**animation.out.options**: `Object`, Animation options

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










