# 🌐 HTML DOM Complete Reference

> A practical and beginner-friendly guide to the **HTML Document Object Model (DOM)**, its objects, properties, methods, collections, browser APIs, and CSS manipulation using JavaScript.

📚 **Reference:** documentation — HTML DOM Complete Reference


---

## 📑 Table of Contents

* [1. What is DOM?](#1-what-is-dom)
* [2. DOM Tree](#2-dom-tree)
* [3. DOM and JavaScript](#3-dom-and-javascript)
* [4. Attribute Object](#4-attribute-object)
* [5. Console Object](#5-console-object)
* [6. Document Object](#6-document-object)
* [7. Element Properties](#7-element-properties)
* [8. Element Methods](#8-element-methods)
* [9. HTMLCollection](#9-htmlcollection)
* [10. Geolocation Object](#10-geolocation-object)
* [11. History Object](#11-history-object)
* [12. Location Object](#12-location-object)
* [13. Navigator Object](#13-navigator-object)
* [14. Screen Object](#14-screen-object)
* [15. Style Object](#15-style-object)
* [16. Selecting DOM Elements](#16-selecting-dom-elements)
* [17. Creating DOM Elements](#17-creating-dom-elements)
* [18. Modifying DOM Elements](#18-modifying-dom-elements)
* [19. Adding and Removing Elements](#19-adding-and-removing-elements)
* [20. DOM Events](#20-dom-events)
* [21. DOM Traversal](#21-dom-traversal)
* [22. DOM Measurements](#22-dom-measurements)
* [23. innerHTML vs innerText vs textContent](#23-innerhtml-vs-innertext-vs-textcontent)
* [24. Common DOM Methods](#24-common-dom-methods)
* [25. Practical Example](#25-practical-example)
* [26. Important DOM Concepts](#26-important-dom-concepts)
* [27. Learning Roadmap](#27-learning-roadmap)

---

# 1. What is DOM?

**DOM** stands for **Document Object Model**.

It is a programming interface that represents an HTML document as a **tree of objects/nodes**.

The browser converts HTML like:

```html
<html>
  <body>
    <h1>Hello</h1>
    <p>Welcome</p>
  </body>
</html>
```

into a structure similar to:

```text
Document
   |
   └── html
       |
       └── body
           |
           ├── h1
           │   └── "Hello"
           │
           └── p
               └── "Welcome"
```

JavaScript can then interact with this tree.

For example:

```javascript
document.querySelector("h1").textContent = "Hello World";
```

The DOM allows JavaScript to:

* Read HTML
* Change HTML
* Change CSS
* Add elements
* Remove elements
* Change attributes
* Handle events
* Respond to user interactions

---

# 2. DOM Tree

Consider:

```html
<div id="container">
    <h1>Hello</h1>
    <p>Welcome</p>
</div>
```

The DOM tree looks approximately like:

```text
Document
   |
   └── div
       |
       ├── h1
       │   └── "Hello"
       |
       └── p
           └── "Welcome"
```

Important terminology:

| Term      | Meaning                                              |
| --------- | ---------------------------------------------------- |
| Document  | Entire HTML document                                 |
| Element   | HTML element such as `div`, `p`, `h1`                |
| Node      | Generic DOM object                                   |
| Parent    | Element containing another node                      |
| Child     | Node inside another node                             |
| Sibling   | Nodes at the same level                              |
| Text Node | Actual text inside an element                        |
| Attribute | Additional information such as `id`, `class`, `href` |

---

# 3. DOM and JavaScript

JavaScript uses the `document` object to interact with HTML.

Example:

```html
<p id="demo">Hello</p>

<script>
    const element = document.getElementById("demo");

    element.textContent = "Hello World";
</script>
```

Before:

```text
Hello
```

After:

```text
Hello World
```

The basic relationship is:

```text
Browser
   |
   ├── Window
   │
   └── Document
          |
          └── HTML DOM Tree
                 |
                 ├── Elements
                 ├── Attributes
                 └── Text Nodes
```

---

# 4. Attribute Object

An HTML attribute provides additional information about an element.

Example:

```html
<input id="username" type="text" class="input">
```

Attributes:

```text
id = username
type = text
class = input
```

## Important Attribute Methods

### getNamedItem()

Gets an attribute from an attribute collection.

```javascript
element.attributes.getNamedItem("id");
```

---

### item()

Gets an attribute by index.

```javascript
element.attributes.item(0);
```

---

### removeNamedItem()

Removes a named attribute.

```javascript
element.attributes.removeNamedItem("class");
```

---

# 5. Console Object

The `console` object is primarily used for debugging.

## console.log()

```javascript
console.log("Hello");
```

---

## console.error()

```javascript
console.error("Something went wrong");
```

---

## console.warn()

```javascript
console.warn("Warning!");
```

---

## console.info()

```javascript
console.info("Information");
```

---

## console.table()

Displays data as a table.

```javascript
console.table([
    { name: "John", age: 20 },
    { name: "Mike", age: 25 }
]);
```

---

## console.clear()

Clears the console.

```javascript
console.clear();
```

---

## console.count()

Counts how many times a particular label has been called.

```javascript
console.count("button");
console.count("button");
```

Output:

```text
button: 1
button: 2
```

---

## console.group()

Creates a group.

```javascript
console.group("User");

console.log("Name: John");
console.log("Age: 25");

console.groupEnd();
```

---

## console.time()

Starts a timer.

```javascript
console.time("test");

for (let i = 0; i < 1000000; i++) {}

console.timeEnd("test");
```

---

## console.trace()

Displays the call stack.

```javascript
console.trace();
```

---

# 6. Document Object

The `document` object represents the HTML page.

Example:

```javascript
console.log(document);
```

## Important Document Properties

### document.body

Returns the `<body>` element.

```javascript
console.log(document.body);
```

---

### document.head

Returns the `<head>` element.

```javascript
console.log(document.head);
```

---

### document.documentElement

Returns the `<html>` element.

```javascript
console.log(document.documentElement);
```

---

### document.title

Gets or changes the page title.

```javascript
console.log(document.title);
```

Change it:

```javascript
document.title = "My Website";
```

---

### document.URL

Returns the current page URL.

```javascript
console.log(document.URL);
```

---

### document.domain

Returns the domain.

```javascript
console.log(document.domain);
```

---

### document.referrer

Returns the URL of the page that referred the user.

```javascript
console.log(document.referrer);
```

---

### document.readyState

Returns the document loading state.

Possible values include:

```text
loading
interactive
complete
```

Example:

```javascript
console.log(document.readyState);
```

---

### document.characterSet

Returns the character encoding.

```javascript
console.log(document.characterSet);
```

Usually:

```text
UTF-8
```

---

### document.activeElement

Returns the element currently receiving focus.

```javascript
console.log(document.activeElement);
```

---

# 7. Element Properties

Once you select an element:

```javascript
const element = document.querySelector("#box");
```

you can access many properties.

---

## attributes

Returns the element's attributes.

```javascript
console.log(element.attributes);
```

---

## className

Gets or changes the class.

```javascript
element.className = "container";
```

---

## classList

Provides methods for working with classes.

```javascript
element.classList.add("active");
```

```javascript
element.classList.remove("active");
```

```javascript
element.classList.toggle("active");
```

```javascript
element.classList.contains("active");
```

---

## children

Returns child elements.

```javascript
console.log(element.children);
```

Unlike `childNodes`, it does not include text nodes.

---

## childNodes

Returns all child nodes.

```javascript
console.log(element.childNodes);
```

It can include:

* Elements
* Text nodes
* Comments

---

## childElementCount

Returns the number of child elements.

```javascript
console.log(element.childElementCount);
```

---

## firstChild

Returns the first child node.

```javascript
console.log(element.firstChild);
```

---

## firstElementChild

Returns the first child element.

```javascript
console.log(element.firstElementChild);
```

---

## lastChild

```javascript
console.log(element.lastChild);
```

---

## lastElementChild

```javascript
console.log(element.lastElementChild);
```

---

## parentNode

Returns the parent node.

```javascript
console.log(element.parentNode);
```

---

## parentElement

Returns the parent element.

```javascript
console.log(element.parentElement);
```

---

## nextSibling

Returns the next node.

```javascript
console.log(element.nextSibling);
```

---

## nextElementSibling

Returns the next element.

```javascript
console.log(element.nextElementSibling);
```

---

## previousSibling

```javascript
console.log(element.previousSibling);
```

---

## previousElementSibling

```javascript
console.log(element.previousElementSibling);
```

---

# 8. Element Methods

## addEventListener()

Adds an event listener.

```javascript
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

---

## click()

Programmatically clicks an element.

```javascript
button.click();
```

---

## focus()

Gives focus to an element.

```javascript
input.focus();
```

---

## blur()

Removes focus.

```javascript
input.blur();
```

---

## getAttribute()

Gets an attribute.

```javascript
const value = element.getAttribute("id");
```

---

## setAttribute()

Sets an attribute.

```javascript
element.setAttribute("title", "Hello");
```

---

## removeAttribute()

Removes an attribute.

```javascript
element.removeAttribute("title");
```

---

## hasAttribute()

Checks whether an attribute exists.

```javascript
element.hasAttribute("id");
```

---

## contains()

Checks whether an element contains another node.

```javascript
parent.contains(child);
```

---

## cloneNode()

Copies an element.

```javascript
const copy = element.cloneNode(true);
```

`true` means clone descendants as well.

---

## appendChild()

Adds a node at the end.

```javascript
parent.appendChild(child);
```

---

## insertBefore()

Inserts a node before another node.

```javascript
parent.insertBefore(newElement, existingElement);
```

---

## removeChild()

Removes a child.

```javascript
parent.removeChild(child);
```

---

## replaceChild()

Replaces a child.

```javascript
parent.replaceChild(newElement, oldElement);
```

---

# 9. HTMLCollection

An `HTMLCollection` represents a collection of HTML elements.

Example:

```javascript
const divs = document.getElementsByTagName("div");
```

You can access:

```javascript
console.log(divs.length);
```

---

## length

Returns the number of elements.

```javascript
console.log(divs.length);
```

---

## item()

Gets an element by index.

```javascript
divs.item(0);
```

---

## namedItem()

Gets an element by ID or name.

```javascript
divs.namedItem("container");
```

---

# 10. Geolocation Object

The Geolocation API can request the user's geographical position.

Example:

```javascript
navigator.geolocation.getCurrentPosition(
    (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    }
);
```

Important information can include:

```text
latitude
longitude
altitude
accuracy
heading
speed
```

⚠️ The browser normally requires user permission.

---

# 11. History Object

The `history` object represents the browser session history.

```javascript
console.log(history);
```

## history.back()

Moves backward.

```javascript
history.back();
```

Equivalent conceptually to clicking the browser Back button.

---

## history.forward()

Moves forward.

```javascript
history.forward();
```

---

## history.go()

Moves a specified number of pages.

```javascript
history.go(-2);
```

Moves two entries backward.

```javascript
history.go(2);
```

Moves two entries forward.

---

## history.length

Returns the number of entries in the session history.

```javascript
console.log(history.length);
```

---

# 12. Location Object

The `location` object represents the current URL.

Example URL:

```text
https://example.com/products?id=10#details
```

---

## location.href

Complete URL.

```javascript
console.log(location.href);
```

---

## location.protocol

```javascript
console.log(location.protocol);
```

Output:

```text
https:
```

---

## location.hostname

```javascript
console.log(location.hostname);
```

Output:

```text
example.com
```

---

## location.port

```javascript
console.log(location.port);
```

---

## location.pathname

```javascript
console.log(location.pathname);
```

Example:

```text
/products
```

---

## location.search

Gets the query string.

```javascript
console.log(location.search);
```

Example:

```text
?id=10
```

---

## location.hash

Gets the URL fragment.

```javascript
console.log(location.hash);
```

Example:

```text
#details
```

---

## location.origin

Returns:

```text
protocol + hostname + port
```

Example:

```text
https://example.com
```

---

## location.assign()

Loads a new URL.

```javascript
location.assign("https://example.com");
```

---

## location.replace()

Replaces the current page.

```javascript
location.replace("https://example.com");
```

The current page is not kept as a normal history entry.

---

## location.reload()

Reloads the page.

```javascript
location.reload();
```

---

# 13. Navigator Object

The `navigator` object provides information about the browser environment.

```javascript
console.log(navigator);
```

## Important Properties

### navigator.language

```javascript
console.log(navigator.language);
```

---

### navigator.onLine

Checks whether the browser reports an online connection.

```javascript
console.log(navigator.onLine);
```

---

### navigator.cookieEnabled

Checks whether cookies are enabled.

```javascript
console.log(navigator.cookieEnabled);
```

---

### navigator.userAgent

Returns the browser's user-agent string.

```javascript
console.log(navigator.userAgent);
```

---

### navigator.platform

Returns platform information.

```javascript
console.log(navigator.platform);
```

---

### navigator.geolocation

Provides access to geolocation functionality.

```javascript
navigator.geolocation
```

---

# 14. Screen Object

The `screen` object provides information about the user's screen.

```javascript
console.log(screen);
```

## screen.width

```javascript
console.log(screen.width);
```

---

## screen.height

```javascript
console.log(screen.height);
```

---

## screen.availWidth

Available screen width.

```javascript
console.log(screen.availWidth);
```

---

## screen.availHeight

Available screen height.

```javascript
console.log(screen.availHeight);
```

---

## screen.colorDepth

Color depth.

```javascript
console.log(screen.colorDepth);
```

---

## screen.pixelDepth

Pixel depth.

```javascript
console.log(screen.pixelDepth);
```

---

# 15. Style Object

JavaScript can modify CSS through the `style` property.

HTML:

```html
<div id="box">Hello</div>
```

JavaScript:

```javascript
const box = document.getElementById("box");

box.style.color = "red";
box.style.backgroundColor = "black";
box.style.fontSize = "30px";
```

---

## Common Style Properties

### color

```javascript
element.style.color = "red";
```

### backgroundColor

```javascript
element.style.backgroundColor = "blue";
```

### width

```javascript
element.style.width = "200px";
```

### height

```javascript
element.style.height = "100px";
```

### margin

```javascript
element.style.margin = "20px";
```

### padding

```javascript
element.style.padding = "10px";
```

### display

```javascript
element.style.display = "none";
```

### opacity

```javascript
element.style.opacity = "0.5";
```

### border

```javascript
element.style.border = "1px solid black";
```

### borderRadius

```javascript
element.style.borderRadius = "10px";
```

---

# 16. Selecting DOM Elements

Selecting elements is one of the most important DOM operations.

---

## getElementById()

```javascript
const element = document.getElementById("box");
```

Selects one element by ID.

---

## getElementsByClassName()

```javascript
const elements =
    document.getElementsByClassName("box");
```

Returns an `HTMLCollection`.

---

## getElementsByTagName()

```javascript
const paragraphs =
    document.getElementsByTagName("p");
```

---

## getElementsByName()

```javascript
const inputs =
    document.getElementsByName("username");
```

---

## querySelector()

Returns the **first matching element**.

```javascript
const element =
    document.querySelector(".box");
```

CSS selectors can be used:

```javascript
document.querySelector("#box");

document.querySelector(".box");

document.querySelector("p");

document.querySelector("div p");

document.querySelector("input[type='text']");
```

---

## querySelectorAll()

Returns all matching elements.

```javascript
const elements =
    document.querySelectorAll(".box");
```

Example:

```javascript
elements.forEach((element) => {
    console.log(element);
});
```

---

# 17. Creating DOM Elements

Use:

```javascript
document.createElement()
```

Example:

```javascript
const paragraph =
    document.createElement("p");

paragraph.textContent = "Hello World";
```

At this point the element exists in JavaScript but is not yet visible.

Add it:

```javascript
document.body.appendChild(paragraph);
```

---

# 18. Modifying DOM Elements

## Change text

```javascript
element.textContent = "New Text";
```

---

## Change HTML

```javascript
element.innerHTML =
    "<strong>Hello</strong>";
```

---

## Change class

```javascript
element.className = "active";
```

---

## Change attributes

```javascript
element.setAttribute(
    "data-id",
    "100"
);
```

---

## Change CSS

```javascript
element.style.color = "red";
```

---

# 19. Adding and Removing Elements

## appendChild()

```javascript
parent.appendChild(child);
```

---

## prepend()

Adds something at the beginning.

```javascript
parent.prepend(child);
```

---

## append()

Can add nodes or strings.

```javascript
parent.append("Hello");
```

---

## remove()

Removes an element.

```javascript
element.remove();
```

---

## insertBefore()

```javascript
parent.insertBefore(
    newElement,
    existingElement
);
```

---

## replaceChild()

```javascript
parent.replaceChild(
    newElement,
    oldElement
);
```

---

# 20. DOM Events

Events allow JavaScript to react to user actions.

Common events:

```text
click
dblclick
mousedown
mouseup
mousemove
mouseenter
mouseleave
keydown
keyup
input
change
submit
focus
blur
load
scroll
resize
```

Example:

```javascript
const button =
    document.querySelector("#btn");

button.addEventListener(
    "click",
    () => {
        console.log("Button clicked");
    }
);
```

---

## Event Object

```javascript
button.addEventListener(
    "click",
    (event) => {
        console.log(event);
    }
);
```

The event object provides information about the event.

For example:

```javascript
event.target
event.type
event.currentTarget
```

---

# 21. DOM Traversal

DOM traversal means moving through the DOM tree.

Example:

```html
<div>
    <p>Hello</p>
</div>
```

JavaScript:

```javascript
const p = document.querySelector("p");
```

Parent:

```javascript
p.parentElement;
```

First child:

```javascript
p.parentElement.firstElementChild;
```

Next sibling:

```javascript
p.nextElementSibling;
```

Previous sibling:

```javascript
p.previousElementSibling;
```

Children:

```javascript
p.parentElement.children;
```

---

# 22. DOM Measurements

The DOM provides properties for calculating dimensions and positions.

---

## clientWidth

Visible width including padding.

```javascript
element.clientWidth;
```

---

## clientHeight

Visible height including padding.

```javascript
element.clientHeight;
```

---

## offsetWidth

Element width including borders.

```javascript
element.offsetWidth;
```

---

## offsetHeight

Element height including borders.

```javascript
element.offsetHeight;
```

---

## offsetTop

Distance from its offset parent.

```javascript
element.offsetTop;
```

---

## offsetLeft

```javascript
element.offsetLeft;
```

---

## scrollWidth

Total scrollable width.

```javascript
element.scrollWidth;
```

---

## scrollHeight

Total scrollable height.

```javascript
element.scrollHeight;
```

---

## scrollTop

Vertical scroll position.

```javascript
element.scrollTop;
```

---

## scrollLeft

Horizontal scroll position.

```javascript
element.scrollLeft;
```

---

## getBoundingClientRect()

Gets the element's position and dimensions relative to the viewport.

```javascript
const rect =
    element.getBoundingClientRect();

console.log(rect);
```

Useful properties include:

```javascript
rect.top
rect.left
rect.right
rect.bottom
rect.width
rect.height
```

---

# 23. innerHTML vs innerText vs textContent

This is a very important interview topic.

Suppose:

```html
<div id="box">
    Hello
    <strong>World</strong>
</div>
```

---

## innerHTML

Returns HTML markup.

```javascript
box.innerHTML;
```

Possible result:

```html
Hello
<strong>World</strong>
```

It can also insert HTML:

```javascript
box.innerHTML =
    "<strong>Hello</strong>";
```

⚠️ Be careful when inserting untrusted user input because unsafe HTML can create security problems such as XSS.

---

## innerText

Works with rendered text.

```javascript
box.innerText;
```

It is affected by CSS and layout.

---

## textContent

Returns text content from the node and descendants.

```javascript
box.textContent;
```

For inserting plain text, `textContent` is generally safer than `innerHTML`.

---

# 24. Common DOM Methods

| Method                     | Purpose                    |
| -------------------------- | -------------------------- |
| `getElementById()`         | Select element by ID       |
| `getElementsByClassName()` | Select elements by class   |
| `getElementsByTagName()`   | Select elements by tag     |
| `querySelector()`          | Select first CSS match     |
| `querySelectorAll()`       | Select all CSS matches     |
| `createElement()`          | Create an element          |
| `createTextNode()`         | Create text node           |
| `appendChild()`            | Add child                  |
| `removeChild()`            | Remove child               |
| `replaceChild()`           | Replace child              |
| `insertBefore()`           | Insert before another node |
| `cloneNode()`              | Clone node                 |
| `getAttribute()`           | Get attribute              |
| `setAttribute()`           | Set attribute              |
| `removeAttribute()`        | Remove attribute           |
| `addEventListener()`       | Add event listener         |
| `removeEventListener()`    | Remove event listener      |
| `focus()`                  | Focus element              |
| `blur()`                   | Remove focus               |
| `click()`                  | Trigger click              |
| `contains()`               | Check descendant           |
| `getBoundingClientRect()`  | Get position/dimensions    |

---

# 25. Practical Example

HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>

<body>

    <h1 id="title">Hello</h1>

    <button id="button">
        Change Text
    </button>

    <script src="script.js"></script>

</body>
</html>
```

JavaScript:

```javascript
const title =
    document.getElementById("title");

const button =
    document.getElementById("button");

button.addEventListener("click", () => {

    title.textContent =
        "DOM Updated Successfully!";

    title.style.color = "blue";

});
```

Flow:

```text
HTML
 ↓
Browser parses HTML
 ↓
DOM Tree created
 ↓
JavaScript selects elements
 ↓
Event listener registered
 ↓
User clicks button
 ↓
Event fires
 ↓
JavaScript modifies DOM
 ↓
Browser updates the page
```

---

# 26. Important DOM Concepts

## DOM vs HTML

HTML is the markup:

```html
<h1>Hello</h1>
```

DOM is the browser's object representation of that HTML.

```text
HTML
 ↓
Browser Parser
 ↓
DOM
 ↓
JavaScript
 ↓
DOM Modification
 ↓
Updated UI
```

---

## DOM vs BOM

### DOM

Deals primarily with the webpage/document.

```javascript
document
```

Examples:

```javascript
document.body
document.title
document.querySelector()
```

### BOM

**Browser Object Model** deals with browser/window-level functionality.

```javascript
window
```

Examples:

```javascript
window.location
window.history
window.navigator
window.screen
```

A simplified structure:

```text
Window
│
├── document
│   └── DOM
│
├── location
├── history
├── navigator
├── screen
├── localStorage
├── sessionStorage
└── console
```

---

# 27. Learning Roadmap

A good order for learning DOM is:

```text
1. What is DOM?
       ↓
2. DOM Tree
       ↓
3. Nodes and Elements
       ↓
4. document object
       ↓
5. Selecting Elements
       ↓
6. Reading Properties
       ↓
7. Changing Text
       ↓
8. Changing HTML
       ↓
9. Attributes
       ↓
10. classList
       ↓
11. CSS manipulation
       ↓
12. Creating Elements
       ↓
13. Removing Elements
       ↓
14. DOM Traversal
       ↓
15. Events
       ↓
16. Event Object
       ↓
17. Event Bubbling
       ↓
18. Event Capturing
       ↓
19. Event Delegation
       ↓
20. DOM Measurements
       ↓
21. Browser APIs
       ↓
22. Advanced DOM
```

---

# 🚀 Important Interview Topics

If you are preparing for a JavaScript/React/Next.js interview, pay special attention to:

### Beginner

* What is DOM?
* DOM tree
* Nodes vs elements
* `document`
* `getElementById()`
* `querySelector()`
* `querySelectorAll()`
* `innerHTML`
* `innerText`
* `textContent`
* `classList`
* `setAttribute()`
* `getAttribute()`

### Intermediate

* `children` vs `childNodes`
* `parentNode` vs `parentElement`
* `firstChild` vs `firstElementChild`
* `nextSibling` vs `nextElementSibling`
* `appendChild()`
* `removeChild()`
* `replaceChild()`
* `cloneNode()`
* DOM traversal
* DOM events
* Event object

### Advanced

* Event bubbling
* Event capturing
* Event delegation
* `preventDefault()`
* `stopPropagation()`
* DOM performance
* Reflow and repaint
* `DocumentFragment`
* MutationObserver
* IntersectionObserver
* ResizeObserver
* Shadow DOM
* Browser rendering pipeline

---

# 🧠 Quick DOM Cheat Sheet

```javascript
// Select
document.getElementById("id");
document.querySelector(".class");
document.querySelectorAll(".class");

// Read
element.textContent;
element.innerText;
element.innerHTML;

// Attributes
element.getAttribute("id");
element.setAttribute("title", "Hello");
element.removeAttribute("title");

// Classes
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.contains("active");

// Create
const div = document.createElement("div");

// Add
parent.appendChild(div);
parent.append(div);
parent.prepend(div);

// Remove
element.remove();
parent.removeChild(element);

// Replace
parent.replaceChild(newElement, oldElement);

// Events
element.addEventListener("click", handler);
element.removeEventListener("click", handler);

// Traversal
element.parentElement;
element.children;
element.firstElementChild;
element.lastElementChild;
element.nextElementSibling;
element.previousElementSibling;

// Dimensions
element.clientWidth;
element.clientHeight;
element.offsetWidth;
element.offsetHeight;
element.scrollWidth;
element.scrollHeight;

// Position
element.getBoundingClientRect();
```

---

# 🎯 Final Mental Model

Remember the DOM using this model:

```text
                    WINDOW
                      │
          ┌───────────┼───────────┐
          │           │           │
       DOCUMENT    LOCATION    HISTORY
          │
      HTML DOM
          │
       <html>
          │
     ┌────┴────┐
   <head>    <body>
               │
          ┌────┴─────┐
         <h1>       <div>
          │           │
        Text       Elements
```

The most important idea is:

> **HTML creates the document, the browser converts it into the DOM, and JavaScript uses the DOM APIs to read, modify, create, delete, and respond to elements.**

---

## 📚 Reference

This README is based on the topic structure and reference material from the **GeeksforGeeks HTML DOM Complete Reference**, including its sections on DOM objects, document methods/properties, element APIs, collections, browser objects, and style properties.
