## Targeting nodes with selectors

```html
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```

In the above example, you could use the following selectors to refer to <!-- <div class="display"></div> -->:

```
div.display
.display
#container > .display
div#container > div.display
```

## Example

Check out this example of creating and appending a DOM element to a webpage.

```html
<!-- your HTML file: -->
<body>
  <h1>THE TITLE OF YOUR WEBPAGE</h1>
  <div id="container"></div>
</body>
```

``` javascript
// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
```

After the JavaScript code is run, our DOM tree will look like this:

``` html
<!-- The DOM -->
<body>
  <h1>THE TITLE OF YOUR WEBPAGE</h1>
  <div id="container">
    <div class="content">This is the glorious text-content!</div>
  </div>
</body>
```

To run the JS after the html file, use the *script* tag with the src attribute containing the path to the JS file, and include the defer keyword to load the file after the HTML is parsed

```html
<head>
  <script src="js-file.js" defer></script>
</head>
```



// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"];

// bracket notation with camelCase: also works
div.style["backgroundColor"];

# Events

- An event is an action occurred in the web browser e.g., a mouse click.
- Event flow has two main models: event bubbling and event capturing.
- DOM Level 2 Event specifies that the event flow has three phases: event bubbling, the event occurring at the exact element, and event capturing.
- Use *addEventListener()* to register an event that connects an event to an event listener
- The event object is accessible only within the event listener.
- Use *preventDefault()* method to prevent the default behavior of an event, but does not stop the event flow.
- Use *stopPropagation()* method to stop the flow of an event through the DOM tree, but does not cancel the browser default behavior.

# Page Load Events

- DOMContentLoaded – the browser fully loaded HTML and completed building the DOM tree. However, it hasn’t loaded external resources like stylesheets and images. In this event, you can start selecting DOM nodes or initialize the interface.
- load – the browser fully loaded the HTML and external resources like images and stylesheets.

When you leave the page, the following events fire in sequence:

- beforeunload – fires before the page and resources are unloaded. You can use this event to show a confirmation dialog to confirm if you want to leave the page. By doing this, you can prevent data loss in case the user is filling out a form and accidentally clicks a link that navigates to another page.
- unload – fires when the page has completely unloaded. You can use this event to send the analytic data or to clean up resources.

```js
document.addEventListener('DOMContentLoaded',() => {
    // handle DOMContentLoaded event
});

document.addEventListener('load',() => {
    // handle load event
});

document.addEventListener('beforeunload',() => {
    // handle beforeunload event
});

document.addEventListener('unload',() => {
    // handle unload event
});
```

# [Mouse Events](https://www.javascripttutorial.net/javascript-dom/javascript-mouse-events/)

- DOM Level 3 defines nine mouse events.
Use addEventListener() method to register a mouse event handler.
- The event.button indicates which mouse button was pressed to trigger the mouse event.
- The modifier keys: alt, shift, ctrl, and meta (Mac) can be obtained via properties of the event object passed to the mouse event handler.
- The screenX and screenY properties return the horizontal and vertical coordinates of the mouse pointer in screen coordinates.
- The clientX and clientY properties of the event object returns horizontal and vertical coordinates within the application’s client area at which the mouse event occurred.
- mousedown, mouseup, click, dblclick
- mousemove, mouseover, mouseout, mouseenter, mouseleave

# [Keyboard Events](https://www.javascripttutorial.net/javascript-dom/javascript-keyboard-events/)

```js
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Keyboard Events: Key/Code</title>
</head>
<body>
    <input type="text" id="message">

    <script>
        let textBox = document.getElementById('message');
        textBox.addEventListener('keydown', (event) => {
            console.log(`key=${event.key},code=${event.code}`);

        });
    </script>
</body>
</html>
```
key=z,code=KeyZ

- When you press a character key on the keyboard, the keydown, keypress, and keyup events are fired sequentially. However, if you press a non-character key, only the keydown and keyup events are fired.
- The keyboard event object has two important properties: key and code  properties that allow you to detect which key has been pressed.
- The key property returns the value of the key pressed while the code represents a physical key on the keyboard.

# [Event Delegation](https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/)

Having a large number of event handlers will take up memory and degrade the performance of a page.

The event delegation technique utilizes the event bubbling to handle the event at a higher level in the DOM than the element on which the event originated.

```html
<ul id="menu">
    <li><a id="home">home</a></li>
    <li><a id="dashboard">Dashboard</a></li>
    <li><a id="report">report</a></li>
</ul>
```


```js
let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'home':
            console.log('Home menu item was clicked');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            break;
        case 'report':
            console.log('Report menu item was clicked');
            break;
    }
});
```

# [Dispatch event]()

- Use the specific event constructor such as MouseEvent and call dispatchEvent() method on an element to generate an event from code.
- Use event.isTrusted to examine whether the event is generated from code or user actions.

```js
let btn = document.querySelector('.btn');

 btn.addEventListener('click', function () {
        alert('Mouse Clicked');
 });

let clickEvent = new Event('click');
btn.dispatchEvent(clickEvent);
```

To create a new event, you use the Event constructor like this:

let event = new Event(type, [,options]);


# [Custom Event](https://www.javascripttutorial.net/javascript-dom/javascript-custom-events/)

The custom events allow you to decouple the code that you want to execute after another piece of code completes. For example, you can separate the event listeners in a separate script. In addition, you can have multiple event listeners to the same custom event.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Custom Event</title>
</head>
<body>
    <div class="note">JS Custom Event</div>
    <script>
        function highlight(elem) {
            const bgColor = 'yellow';
            elem.style.backgroundColor = bgColor;

            // create the event
            let event = new CustomEvent('highlight', {
                detail: {
                    backgroundColor: bgColor
                }
            });
            // dispatch the event
            elem.dispatchEvent(event);
        }

        // Select the div element
        let div = document.querySelector('.note');

        // Add border style
        function addBorder(elem) {
            elem.style.border = "solid 1px red";
        }

        // Listen to the highlight event
        div.addEventListener('highlight', function (e) {
            addBorder(this);

            // examine the background
            console.log(e.detail);
        });

        // highlight div element
        highlight(div);
    </script>
</body>
</html>
```