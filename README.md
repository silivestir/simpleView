# SimpleLayout Library

The SimpleLayout library provides a flexible and easy way to create user interfaces using JavaScript and HTML custom elements. It allows you to use different layout strategies, such as linear and grid layouts, and offers a variety of components like views, surfaces, and fragments to display content. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [View](#view)
  - [SurfaceView](#surfaceview)
  - [Fragment](#fragment)
  - [LinearLayout](#linearlayout)
  - [GridLayout](#gridlayout)
- [Custom Elements](#custom-elements)
  - [LinearLayoutComponent](#linearlayoutcomponent)
  - [GridLayoutComponent](#gridlayoutcomponent)
  - [SurfaceViewComponent](#surfaceviewcomponent)
  - [FragmentComponent](#fragmentcomponent)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use the SimpleLayout library in your project, you can directly include the JavaScript file, or copy the code into your project. Here’s how to do it using a simple HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SimpleLayout Example</title>
    <script src="path/to/SimpleLayout.js" defer></script>
</head>
<body>
    <!-- Your HTML structure here -->
</body>
</html>
```

Make sure to replace `path/to/SimpleLayout.js` with the actual path to your JavaScript file.

## Usage

You can use the custom elements provided by the SimpleLayout library in your HTML directly. For example:

```html
<linear-layout orientation="vertical">
    <div>Item 1</div>
    <div>Item 2</div>
</linear-layout>

<grid-layout rows="2" columns="2">
    <div>Cell 1</div>
    <div>Cell 2</div>
    <div>Cell 3</div>
    <div>Cell 4</div>
</grid-layout>

<surface-view width="400" height="300"></surface-view>

<fragment-component>
    <p>This is a hidden fragment that can be shown or hidden.</p>
</fragment-component>
```

## Components

### View

The `View` component is a simple container that displays text content. It wraps the content in a `<div>` with a border, margin, and padding for styling.

**Example:**
```javascript
const myView = new View('Hello, world!');
myView.render(document.body);
```

### SurfaceView

The `SurfaceView` creates a canvas element that allows for drawing. You can specify its width and height. You can also clear the canvas and draw rectangles.

**Example:**
```javascript
const mySurface = new SurfaceView(300, 150);
mySurface.render(document.body);
mySurface.clear('lightgray');
mySurface.drawRect(10, 10, 50, 50, 'blue');
```

### Fragment

The `Fragment` is a content container that can be shown or hidden. It initially starts off hidden and can display any HTML content passed to it.

**Example:**
```javascript
const myFragment = new Fragment('This content is visible when shown');
myFragment.render(document.body);
myFragment.show(); // To display the content
```

### LinearLayout

The `LinearLayout` organizes its children in a single line. You can specify the orientation (either vertical or horizontal).

**Example:**
```javascript
const linearLayout = new LinearLayout('horizontal');
linearLayout.addChild(new View('First'));
linearLayout.addChild(new View('Second'));
linearLayout.render(document.body);
```

### GridLayout

The `GridLayout` organizes its children in a grid format based on the number of rows and columns specified.

**Example:**
```javascript
const gridLayout = new GridLayout(2, 2);
gridLayout.addChild(new View('Cell 1'));
gridLayout.addChild(new View('Cell 2'));
gridLayout.addChild(new View('Cell 3'));
gridLayout.addChild(new View('Cell 4'));
gridLayout.render(document.body);
```

## Custom Elements

### LinearLayoutComponent

The `<linear-layout>` custom element encapsulates the `LinearLayout` functionality. You can specify its orientation using the `orientation` attribute (default is vertical).

### GridLayoutComponent

The `<grid-layout>` custom element encapsulates the `GridLayout` functionality. You can specify the number of rows and columns with the `rows` and `columns` attributes, respectively. 

### SurfaceViewComponent

The `<surface-view>` custom element encapsulates the `SurfaceView` functionality. You can customize its `width` and `height` through attributes. 

### FragmentComponent

The `<fragment-component>` custom element encapsulates the `Fragment` functionality. It can show or hide its content using the `show()` and `hide()` methods.

## Contributing

Contributions are welcome! If you have suggestions for improvements or would like to report a bug, please fork the repository, create a feature branch, and submit a pull request.Do not hesitate to send your email to silvestiriassey@gmail.com

## License

This library is open-source and available under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

---

