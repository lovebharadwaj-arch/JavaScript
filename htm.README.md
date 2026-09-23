# HTML — Complete Documentation & Learning Guide

> A detailed HTML learning guide covering HTML fundamentals, elements, attributes, forms, tables, multimedia, semantic HTML, accessibility, APIs, and advanced concepts.

**Reference:** [W3Schools HTML Tutorial](https://www.w3schools.com/Html/)

---

## 📚 Table of Contents

* [1. What is HTML?](#1-what-is-html)
* [2. HTML vs CSS vs JavaScript](#2-html-vs-css-vs-javascript)
* [3. HTML Document Structure](#3-html-document-structure)
* [4. HTML Elements](#4-html-elements)
* [5. HTML Attributes](#5-html-attributes)
* [6. Headings](#6-headings)
* [7. Paragraphs](#7-paragraphs)
* [8. Text Formatting](#8-text-formatting)
* [9. Comments](#9-comments)
* [10. Colors](#10-colors)
* [11. Links](#11-links)
* [12. Images](#12-images)
* [13. Favicon](#13-favicon)
* [14. Page Title](#14-page-title)
* [15. Tables](#15-tables)
* [16. Lists](#16-lists)
* [17. Block and Inline Elements](#17-block-and-inline-elements)
* [18. div](#18-div)
* [19. class](#19-class)
* [20. id](#20-id)
* [21. Buttons](#21-buttons)
* [22. Iframes](#22-iframes)
* [23. JavaScript in HTML](#23-javascript-in-html)
* [24. File Paths](#24-file-paths)
* [25. HTML head](#25-html-head)
* [26. HTML Layout](#26-html-layout)
* [27. Responsive HTML](#27-responsive-html)
* [28. Computer Code Elements](#28-computer-code-elements)
* [29. Semantic HTML](#29-semantic-html)
* [30. HTML Style Guide](#30-html-style-guide)
* [31. HTML Entities](#31-html-entities)
* [32. HTML Symbols](#32-html-symbols)
* [33. Emojis](#33-emojis)
* [34. Character Sets](#34-character-sets)
* [35. URL Encoding](#35-url-encoding)
* [36. HTML vs XHTML](#36-html-vs-xhtml)
* [37. HTML Forms](#37-html-forms)
* [38. Form Attributes](#38-form-attributes)
* [39. Form Elements](#39-form-elements)
* [40. Input Types](#40-input-types)
* [41. Input Attributes](#41-input-attributes)
* [42. Input Form Attributes](#42-input-form-attributes)
* [43. HTML Canvas](#43-html-canvas)
* [44. SVG](#44-svg)
* [45. HTML Audio](#45-html-audio)
* [46. HTML Video](#46-html-video)
* [47. HTML Media](#47-html-media)
* [48. HTML Web APIs](#48-html-web-apis)
* [49. Geolocation](#49-geolocation)
* [50. Drag and Drop](#50-drag-and-drop)
* [51. Web Storage](#51-web-storage)
* [52. Web Workers](#52-web-workers)
* [53. Server-Sent Events](#53-server-sent-events)
* [54. Accessibility](#54-accessibility)
* [55. HTML Best Practices](#55-html-best-practices)
* [56. Complete HTML Example](#56-complete-html-example)
* [57. HTML Learning Roadmap](#57-html-learning-roadmap)

---

# 1. What is HTML?

HTML stands for:

> **HyperText Markup Language**

HTML is the standard markup language used to create and structure web pages.

HTML describes the **structure** of a webpage using elements.

For example:

```html
<h1>Hello World</h1>
<p>This is my first webpage.</p>
```

The browser reads these elements and displays the content accordingly.

### HTML is NOT a programming language

HTML is a **markup language**.

It describes:

* headings
* paragraphs
* links
* images
* tables
* forms
* buttons
* page structure
* semantic meaning

---

# 2. HTML vs CSS vs JavaScript

A modern website generally uses three major technologies.

```text
HTML
 │
 ├── Structure
 │
 ▼
CSS
 │
 ├── Presentation / Styling
 │
 ▼
JavaScript
 │
 └── Behaviour / Interactivity
```

### HTML

Responsible for structure.

```html
<h1>My Website</h1>
<p>Welcome to my website.</p>
```

### CSS

Responsible for appearance.

```css
h1 {
    color: blue;
    font-size: 40px;
}
```

### JavaScript

Responsible for behaviour.

```javascript
function sayHello() {
    alert("Hello!");
}
```

---

# 3. HTML Document Structure

A basic HTML document looks like this:

```html
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>My Website</title>
</head>

<body>

    <h1>Hello World</h1>

    <p>Welcome to my website.</p>

</body>

</html>
```

## Explanation

### `<!DOCTYPE html>`

Defines the document as HTML5.

### `<html>`

Root element of the document.

### `<head>`

Contains metadata and resources.

Examples:

```html
<title>
<meta>
<link>
<style>
<script>
```

### `<body>`

Contains content visible on the webpage.

---

# 4. HTML Elements

An HTML element generally consists of:

```text
Opening Tag
    ↓
<h1>
    ↓
Content
    ↓
Hello World
    ↓
Closing Tag
    ↓
</h1>
```

Example:

```html
<h1>Hello World</h1>
```

Another example:

```html
<p>This is a paragraph.</p>
```

## Empty Elements

Some elements don't have closing tags.

Examples:

```html
<br>
<hr>
<img>
<input>
<meta>
<link>
```

Example:

```html
<p>Hello<br>World</p>
```

---

# 5. HTML Attributes

Attributes provide additional information about an HTML element.

Syntax:

```html
<tag attribute="value">
```

Example:

```html
<a href="https://example.com">Visit Website</a>
```

Here:

```text
href = attribute
https://example.com = value
```

Another example:

```html
<img src="image.jpg" alt="Profile Image">
```

Attributes commonly used:

```text
id
class
href
src
alt
title
style
name
value
type
placeholder
required
disabled
```

---

# 6. Headings

HTML provides six heading levels.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

Hierarchy:

```text
h1
 ├── h2
 │    ├── h3
 │    └── h3
 └── h2
```

`<h1>` represents the most important heading.

Use headings according to document structure, not merely to make text larger.

---

# 7. Paragraphs

Paragraphs are created using `<p>`.

```html
<p>This is a paragraph.</p>
```

Multiple paragraphs:

```html
<p>First paragraph.</p>
<p>Second paragraph.</p>
<p>Third paragraph.</p>
```

## Line Break

Use `<br>`:

```html
<p>
    Hello<br>
    World
</p>
```

## Horizontal Rule

```html
<hr>
```

---

# 8. Text Formatting

HTML provides several elements for formatting and semantic emphasis.

### Bold

```html
<b>Bold text</b>
```

### Strong Importance

```html
<strong>Important text</strong>
```

### Italic

```html
<i>Italic text</i>
```

### Emphasized

```html
<em>Emphasized text</em>
```

### Marked Text

```html
<mark>Highlighted text</mark>
```

### Small Text

```html
<small>Small text</small>
```

### Deleted Text

```html
<del>Deleted text</del>
```

### Inserted Text

```html
<ins>Inserted text</ins>
```

### Subscript

```html
H<sub>2</sub>O
```

### Superscript

```html
x<sup>2</sup>
```

---

# 9. Comments

HTML comments are ignored by the browser.

Syntax:

```html
<!-- This is a comment -->
```

Example:

```html
<!-- Navigation -->
<nav>
    <a href="/">Home</a>
</nav>
```

Comments are useful for:

* documentation
* explaining sections
* temporarily disabling HTML
* organizing large files

---

# 10. Colors

HTML can work with CSS colors.

Example:

```html
<p style="color:red;">Red Text</p>
```

## RGB

```css
color: rgb(255, 0, 0);
```

## HEX

```css
color: #ff0000;
```

## HSL

```css
color: hsl(0, 100%, 50%);
```

Modern applications usually separate CSS from HTML.

Instead of:

```html
<p style="color:red;">Hello</p>
```

Prefer:

```html
<p class="error">Hello</p>
```

```css
.error {
    color: red;
}
```

---

# 11. Links

Links are created using `<a>`.

```html
<a href="https://example.com">Visit Website</a>
```

## Open in New Tab

```html
<a href="https://example.com" target="_blank">
    Visit Website
</a>
```

For external links, you may also use:

```html
<a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Visit Website
</a>
```

## Email Link

```html
<a href="mailto:test@example.com">
    Send Email
</a>
```

## Telephone Link

```html
<a href="tel:+911234567890">
    Call Us
</a>
```

---

# 12. Images

Images are displayed using `<img>`.

```html
<img src="image.jpg" alt="A beautiful landscape">
```

Important attributes:

```text
src
alt
width
height
loading
```

Example:

```html
<img
    src="profile.jpg"
    alt="Profile picture"
    width="300"
    height="300"
>
```

## Why `alt` matters

`alt` provides alternative text when:

* image cannot load
* screen readers read the page
* accessibility tools interpret the page

---

# 13. Favicon

A favicon is the small icon shown in the browser tab.

Example:

```html
<head>

    <link
        rel="icon"
        type="image/x-icon"
        href="/favicon.ico"
    >

</head>
```

---

# 14. Page Title

Use `<title>` inside `<head>`.

```html
<head>
    <title>My Portfolio</title>
</head>
```

The title appears in the browser tab.

It is also important for SEO and usability.

---

# 15. Tables

HTML tables represent tabular data.

Basic example:

```html
<table>

    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

    <tr>
        <td>John</td>
        <td>25</td>
    </tr>

    <tr>
        <td>Sarah</td>
        <td>30</td>
    </tr>

</table>
```

### Important elements

| Element     | Purpose        |
| ----------- | -------------- |
| `<table>`   | Table          |
| `<tr>`      | Table row      |
| `<th>`      | Header cell    |
| `<td>`      | Data cell      |
| `<caption>` | Table title    |
| `<thead>`   | Header section |
| `<tbody>`   | Body section   |
| `<tfoot>`   | Footer section |

Example:

```html
<table>

    <caption>Employees</caption>

    <thead>
        <tr>
            <th>Name</th>
            <th>Department</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>John</td>
            <td>Engineering</td>
        </tr>
    </tbody>

</table>
```

---

# 16. Lists

HTML supports several types of lists.

## Unordered List

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

Output conceptually:

```text
• HTML
• CSS
• JavaScript
```

## Ordered List

```html
<ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ol>
```

Output:

```text
1. HTML
2. CSS
3. JavaScript
```

## Description List

```html
<dl>

    <dt>HTML</dt>
    <dd>Markup language for web pages.</dd>

    <dt>CSS</dt>
    <dd>Styles web pages.</dd>

</dl>
```

---

# 17. Block and Inline Elements

HTML elements can behave as block-level or inline content.

## Block Elements

Usually start on a new line and occupy available horizontal space.

Examples:

```html
<div>
<p>
<h1>
<section>
<header>
<footer>
<article>
<nav>
```

## Inline Elements

Usually occupy only the space needed by their content.

Examples:

```html
<span>
<a>
<strong>
<em>
<img>
```

Example:

```html
<p>
    Hello
    <span>World</span>
</p>
```

---

# 18. div

`<div>` is a generic block-level container.

Example:

```html
<div>
    <h2>Profile</h2>
    <p>This is my profile.</p>
</div>
```

It is commonly used for grouping content and creating layouts.

However, when a semantic element is appropriate, prefer it over a generic `<div>`.

---

# 19. class

The `class` attribute identifies one or more elements as belonging to a particular class.

```html
<p class="message">Hello</p>
```

CSS:

```css
.message {
    color: blue;
}
```

Multiple elements can share the same class:

```html
<p class="message">Hello</p>
<p class="message">Welcome</p>
```

---

# 20. id

The `id` attribute identifies a specific element.

```html
<div id="header">
    Website Header
</div>
```

An ID should generally be unique within a document.

## CSS

```css
#header {
    background: black;
}
```

## JavaScript

```javascript
const header = document.getElementById("header");
```

---

# 21. Buttons

Create a button using:

```html
<button>Click Me</button>
```

Button types inside forms:

```html
<button type="submit">Submit</button>

<button type="button">Click</button>

<button type="reset">Reset</button>
```

Always choose the appropriate button type, especially inside forms.

---

# 22. Iframes

An `<iframe>` embeds another document/page.

Example:

```html
<iframe
    src="https://example.com"
    width="600"
    height="400">
</iframe>
```

Common uses:

* maps
* videos
* embedded documents
* external content

Be careful when embedding third-party content.

---

# 23. JavaScript in HTML

JavaScript can be added using `<script>`.

```html
<script>
    console.log("Hello World");
</script>
```

External JavaScript:

```html
<script src="script.js"></script>
```

## `defer`

A common approach is:

```html
<script src="script.js" defer></script>
```

`defer` tells the browser to download the script while parsing the HTML and execute it after the document has been parsed.

This is useful because the HTML parser does not have to stop immediately to execute the external script.

---

# 24. File Paths

HTML commonly uses relative and absolute paths.

## Same Directory

```html
<img src="image.jpg">
```

## Subdirectory

```html
<img src="images/image.jpg">
```

## Parent Directory

```html
<img src="../image.jpg">
```

## Absolute URL

```html
<img src="https://example.com/image.jpg">
```

A common project structure:

```text
project/
│
├── index.html
├── about.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── images/
    └── logo.png
```

---

# 25. HTML head

The `<head>` contains metadata and resources.

Example:

```html
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="description"
        content="My personal portfolio website"
    >

    <title>My Portfolio</title>

    <link rel="stylesheet" href="style.css">

</head>
```

Common `<head>` elements:

```html
<title>
<meta>
<link>
<style>
<script>
<base>
```

---

# 26. HTML Layout

A semantic page layout can look like:

```text
┌───────────────────────────┐
│          HEADER           │
├───────────────────────────┤
│          NAVBAR           │
├─────────────┬─────────────┤
│             │             │
│   SIDEBAR   │    MAIN     │
│             │   CONTENT   │
│             │             │
├─────────────┴─────────────┤
│          FOOTER           │
└───────────────────────────┘
```

HTML:

```html
<header>
    Website Header
</header>

<nav>
    Navigation
</nav>

<main>

    <aside>
        Sidebar
    </aside>

    <section>
        Main Content
    </section>

</main>

<footer>
    Footer
</footer>
```

CSS is normally responsible for the actual layout.

---

# 27. Responsive HTML

Responsive websites adapt to different screen sizes.

A crucial viewport declaration is:

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```

Responsive design usually combines:

```text
HTML
+
CSS
+
Media Queries
+
Flexible Layouts
+
Responsive Images
```

Example:

```css
.container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
}
```

---

# 28. Computer Code Elements

HTML provides elements for displaying programming-related content.

## `<code>`

```html
<p>
    Use <code>console.log()</code> to print output.
</p>
```

## `<pre>`

Preserves whitespace.

```html
<pre>
Hello
    World
        HTML
</pre>
```

## `<kbd>`

Represents keyboard input.

```html
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd></p>
```

## `<samp>`

Represents sample output.

```html
<samp>
Error: File not found
</samp>
```

## `<var>`

Represents a variable.

```html
<var>x</var> = 10
```

---

# 29. Semantic HTML

Semantic elements describe the meaning of their content.

Important semantic elements:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
<figure>
<figcaption>
<details>
<summary>
<time>
```

Example:

```html
<header>

    <h1>My Blog</h1>

    <nav>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
    </nav>

</header>

<main>

    <article>

        <h2>Learning HTML</h2>

        <p>
            HTML provides the structure of a webpage.
        </p>

    </article>

    <aside>
        Related Articles
    </aside>

</main>

<footer>
    Copyright 2026
</footer>
```

Semantic HTML improves:

* accessibility
* maintainability
* document structure
* search-engine understanding

---

# 30. HTML Style Guide

Good HTML should be:

* readable
* consistent
* semantic
* properly indented
* accessible
* maintainable

Prefer:

```html
<section>
    <h2>About Us</h2>

    <p>
        We build web applications.
    </p>
</section>
```

Instead of writing everything on one line.

Use meaningful names:

```html
<div class="user-profile">
```

instead of:

```html
<div class="x1">
```

---

# 31. HTML Entities

Reserved characters can be represented using entities.

Examples:

```html
&lt;    <
&gt;    >
&amp;   &
&quot;  "
&apos;  '
&nbsp;  non-breaking space
```

Example:

```html
<p>
    5 &lt; 10
</p>
```

Output:

```text
5 < 10
```

---

# 32. HTML Symbols

HTML supports many symbols using entities or Unicode.

Examples:

```html
&copy;
&reg;
&euro;
&pound;
&yen;
```

Example:

```html
<footer>
    &copy; 2026 My Website
</footer>
```

---

# 33. Emojis

HTML documents can display Unicode emojis.

Example:

```html
<p>Learning HTML 🚀</p>
```

For reliable Unicode handling:

```html
<meta charset="UTF-8">
```

---

# 34. Character Sets

Character encoding determines how characters are represented.

The standard declaration is:

```html
<meta charset="UTF-8">
```

UTF-8 supports a very large range of characters, including:

```text
English
Hindi
Chinese
Arabic
Emoji
Symbols
```

---

# 35. URL Encoding

URLs cannot safely contain every character directly.

Special characters can be percent-encoded.

For example:

```text
space
```

can be represented as:

```text
%20
```

Example concept:

```text
hello world
```

becomes:

```text
hello%20world
```

JavaScript provides functions such as:

```javascript
encodeURIComponent()
decodeURIComponent()
```

---

# 36. HTML vs XHTML

HTML is designed with flexibility and modern web development in mind.

XHTML applies stricter XML-style rules.

Example XHTML-style requirements include:

* properly nested elements
* closed elements
* lowercase element names
* quoted attributes
* well-formed markup

Modern web development generally uses HTML5.

---

# 37. HTML Forms

Forms collect user input.

Basic form:

```html
<form>

    <label for="name">Name:</label>

    <input
        type="text"
        id="name"
        name="name"
    >

    <button type="submit">
        Submit
    </button>

</form>
```

Forms are used for:

* login
* registration
* search
* checkout
* contact forms
* surveys
* data submission

---

# 38. Form Attributes

Important `<form>` attributes include:

```text
action
method
target
autocomplete
novalidate
enctype
```

Example:

```html
<form
    action="/submit"
    method="post"
>
```

### `action`

Specifies where form data should be sent.

### `method`

Common methods:

```text
GET
POST
```

Example:

```html
<form action="/login" method="post">
```

---

# 39. Form Elements

Common form elements:

```html
<input>
<label>
<select>
<option>
<textarea>
<button>
<fieldset>
<legend>
<datalist>
<output>
```

Example:

```html
<label for="country">
    Country
</label>

<select id="country" name="country">

    <option value="india">
        India
    </option>

    <option value="usa">
        USA
    </option>

</select>
```

---

# 40. Input Types

HTML provides many input types.

```html
<input type="text">

<input type="password">

<input type="email">

<input type="number">

<input type="date">

<input type="time">

<input type="datetime-local">

<input type="checkbox">

<input type="radio">

<input type="file">

<input type="color">

<input type="range">

<input type="search">

<input type="tel">

<input type="url">

<input type="submit">

<input type="reset">

<input type="hidden">
```

Example:

```html
<label for="email">Email</label>

<input
    type="email"
    id="email"
    name="email"
    required
>
```

---

# 41. Input Attributes

Common input attributes:

```text
id
name
value
placeholder
required
disabled
readonly
min
max
step
maxlength
minlength
pattern
autocomplete
checked
multiple
accept
```

Example:

```html
<input
    type="text"
    name="username"
    placeholder="Enter username"
    minlength="3"
    maxlength="20"
    required
>
```

---

# 42. Input Form Attributes

Input elements can also have attributes that control form submission.

Example:

```html
<input
    type="text"
    name="username"
    form="loginForm"
>
```

This allows an input to be associated with a form even when it is not physically nested inside it.

---

# 43. HTML Canvas

`<canvas>` provides a drawing area controlled primarily through JavaScript.

HTML:

```html
<canvas
    id="myCanvas"
    width="500"
    height="300">
</canvas>
```

JavaScript:

```javascript
const canvas = document.getElementById("myCanvas");

const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";

ctx.fillRect(50, 50, 200, 100);
```

Canvas can be used for:

* games
* charts
* drawings
* image manipulation
* animations

---

# 44. SVG

SVG stands for:

> Scalable Vector Graphics

Example:

```html
<svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
>

    <circle
        cx="100"
        cy="100"
        r="80"
        fill="blue"
    />

</svg>
```

SVG is useful for:

* icons
* logos
* diagrams
* vector graphics
* scalable illustrations

---

# 45. HTML Audio

Audio can be embedded using `<audio>`.

```html
<audio controls>

    <source
        src="music.mp3"
        type="audio/mpeg"
    >

    Your browser does not support audio.

</audio>
```

Common attributes:

```text
controls
autoplay
muted
loop
preload
```

---

# 46. HTML Video

Video can be embedded using `<video>`.

```html
<video
    width="640"
    height="360"
    controls
>

    <source
        src="video.mp4"
        type="video/mp4"
    >

    Your browser does not support video.

</video>
```

Common attributes:

```text
controls
autoplay
muted
loop
poster
width
height
preload
```

---

# 47. HTML Media

HTML supports several forms of media.

Common elements:

```html
<audio>
<video>
<source>
<track>
<iframe>
```

For multiple media formats:

```html
<video controls>

    <source
        src="video.mp4"
        type="video/mp4"
    >

    <source
        src="video.webm"
        type="video/webm"
    >

</video>
```

The browser can select a supported format.

---

# 48. HTML Web APIs

Modern browsers expose APIs that allow webpages to interact with browser capabilities.

Examples include:

```text
Geolocation
Web Storage
Web Workers
Drag and Drop
Server-Sent Events
Canvas
History API
Fetch API
WebSockets
Notifications
```

These APIs are generally accessed through JavaScript.

---

# 49. Geolocation

The Geolocation API can request the user's location.

Example:

```javascript
navigator.geolocation.getCurrentPosition(
    position => {

        console.log(
            position.coords.latitude
        );

        console.log(
            position.coords.longitude
        );

    }
);
```

The browser normally asks the user for permission.

---

# 50. Drag and Drop

HTML supports drag-and-drop interactions.

Example:

```html
<div
    draggable="true"
>
    Drag Me
</div>
```

JavaScript event handlers can be used to implement drag-and-drop functionality.

Common events include:

```text
drag
dragstart
dragend
dragover
drop
```

---

# 51. Web Storage

Web Storage allows browser-side data storage.

Two common storage mechanisms are:

```text
localStorage
sessionStorage
```

## localStorage

Data remains available across browser sessions.

```javascript
localStorage.setItem(
    "username",
    "John"
);
```

Read:

```javascript
const username =
    localStorage.getItem("username");
```

Delete:

```javascript
localStorage.removeItem("username");
```

Clear:

```javascript
localStorage.clear();
```

## sessionStorage

Data is associated with the current browser session.

```javascript
sessionStorage.setItem(
    "theme",
    "dark"
);
```

---

# 52. Web Workers

Web Workers allow JavaScript to execute work in a background thread.

Main JavaScript:

```javascript
const worker =
    new Worker("worker.js");
```

Worker:

```javascript
self.onmessage = function(event) {

    const result =
        event.data * 2;

    self.postMessage(result);

};
```

Useful for CPU-intensive tasks that should not block the main UI thread.

---

# 53. Server-Sent Events

Server-Sent Events allow a server to push events to a browser over an HTTP connection.

Client example:

```javascript
const events =
    new EventSource("/events");

events.onmessage = function(event) {

    console.log(event.data);

};
```

SSE is useful for:

* live notifications
* live feeds
* status updates
* streaming server updates

---

# 54. Accessibility

Accessibility means designing websites that can be used by people with different abilities and assistive technologies.

Important practices:

### Use semantic HTML

Prefer:

```html
<nav>
```

over:

```html
<div class="navigation">
```

when the content is navigation.

### Use labels

```html
<label for="email">
    Email
</label>

<input
    id="email"
    type="email"
>
```

### Use meaningful alt text

```html
<img
    src="profile.jpg"
    alt="John's profile photograph"
>
```

### Use buttons for actions

Prefer:

```html
<button>Delete</button>
```

rather than:

```html
<div onclick="deleteItem()">
    Delete
</div>
```

### Maintain heading hierarchy

```text
h1
 ├── h2
 │    └── h3
 └── h2
```

---

# 55. HTML Best Practices

## 1. Use HTML5

Start documents with:

```html
<!DOCTYPE html>
```

## 2. Set character encoding

```html
<meta charset="UTF-8">
```

## 3. Set viewport

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```

## 4. Use semantic elements

Prefer:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

when appropriate.

## 5. Use meaningful attributes

Good:

```html
<img
    src="profile.jpg"
    alt="User profile photo"
>
```

Bad:

```html
<img src="x.jpg">
```

## 6. Keep HTML readable

Use proper indentation.

## 7. Separate concerns

HTML:

```text
Structure
```

CSS:

```text
Presentation
```

JavaScript:

```text
Behaviour
```

## 8. Validate your HTML

Check for:

* invalid nesting
* missing attributes
* incorrect syntax
* accessibility problems

---

# 56. Complete HTML Example

Here is a complete example combining many concepts:

```html
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="description"
        content="My personal portfolio website"
    >

    <title>My Portfolio</title>

    <link
        rel="icon"
        href="images/favicon.ico"
    >

    <link
        rel="stylesheet"
        href="css/style.css"
    >

</head>

<body>

    <header>

        <h1>Love's Portfolio</h1>

        <nav>

            <a href="#home">
                Home
            </a>

            <a href="#about">
                About
            </a>

            <a href="#projects">
                Projects
            </a>

            <a href="#contact">
                Contact
            </a>

        </nav>

    </header>


    <main>

        <section id="home">

            <h2>Welcome</h2>

            <p>
                Welcome to my portfolio website.
            </p>

            <img
                src="images/profile.jpg"
                alt="Profile photograph"
                width="200"
            >

        </section>


        <section id="about">

            <h2>About Me</h2>

            <p>
                I am a web developer learning
                modern web technologies.
            </p>

        </section>


        <section id="projects">

            <h2>Projects</h2>

            <article>

                <h3>Project One</h3>

                <p>
                    A web application built using
                    HTML, CSS and JavaScript.
                </p>

                <a href="#">
                    View Project
                </a>

            </article>

        </section>


        <section id="contact">

            <h2>Contact Me</h2>

            <form
                action="/submit"
                method="post"
            >

                <div>

                    <label for="name">
                        Name
                    </label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                    >

                </div>


                <div>

                    <label for="email">
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    >

                </div>


                <div>

                    <label for="message">
                        Message
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                    ></textarea>

                </div>


                <button type="submit">
                    Send Message
                </button>

            </form>

        </section>

    </main>


    <footer>

        <p>
            &copy; 2026 My Portfolio
        </p>

    </footer>


    <script
        src="js/script.js"
        defer
    ></script>

</body>

</html>
```

---

# 57. HTML Learning Roadmap

If you are learning HTML from **beginner → advanced**, follow this order.

## Phase 1 — Fundamentals

Learn:

```text
HTML Introduction
HTML Editors
HTML Basic
HTML Elements
HTML Attributes
HTML Headings
HTML Paragraphs
HTML Styles
HTML Formatting
HTML Comments
```

Goal:

> Be able to create a basic webpage from scratch.

---

## Phase 2 — Core HTML

Learn:

```text
Colors
CSS connection
Links
Images
Favicon
Page Title
Tables
Lists
Block & Inline
div
class
id
Buttons
```

Goal:

> Build a structured multi-section website.

---

## Phase 3 — Semantic HTML

Learn:

```text
header
nav
main
section
article
aside
footer
figure
figcaption
details
summary
```

Goal:

> Build accessible and meaningful HTML structures.

---

## Phase 4 — Forms

Learn:

```text
form
label
input
select
option
textarea
button
fieldset
legend
datalist
input types
validation attributes
form attributes
```

Goal:

> Build complete login, registration, search and contact forms.

---

## Phase 5 — Multimedia

Learn:

```text
Images
Audio
Video
iframe
SVG
Canvas
```

Goal:

> Build media-rich websites.

---

## Phase 6 — Advanced HTML

Learn:

```text
Semantic HTML
Accessibility
HTML entities
Symbols
Emojis
Character encoding
URL encoding
Responsive HTML
HTML APIs
```

Goal:

> Understand how HTML works in professional web applications.

---

## Phase 7 — Browser APIs

Learn:

```text
Geolocation
Drag & Drop
Web Storage
Web Workers
Server-Sent Events
Canvas
```

Then learn the JavaScript APIs that interact with them.

---

# 🧠 HTML Mental Model

Think about HTML like building a house.

```text
HTML
│
├── Foundation
│   └── <!DOCTYPE html>
│
├── Building
│   └── <html>
│
├── Blueprint / Metadata
│   └── <head>
│
├── Visible Interior
│   └── <body>
│
├── Rooms
│   ├── <section>
│   ├── <article>
│   └── <aside>
│
├── Doors
│   └── <a>
│
├── Windows
│   └── <img>
│
├── Forms
│   └── <form>
│
└── Controls
    ├── <button>
    └── <input>
```

HTML gives the browser the **structure and meaning** of the page.

CSS makes it **look good**.

JavaScript makes it **interactive**.

---

# 🔥 Important HTML Tags Cheat Sheet

| Tag        | Purpose                  |
| ---------- | ------------------------ |
| `html`     | Root element             |
| `head`     | Metadata                 |
| `title`    | Page title               |
| `body`     | Visible content          |
| `h1-h6`    | Headings                 |
| `p`        | Paragraph                |
| `br`       | Line break               |
| `hr`       | Horizontal rule          |
| `a`        | Link                     |
| `img`      | Image                    |
| `ul`       | Unordered list           |
| `ol`       | Ordered list             |
| `li`       | List item                |
| `table`    | Table                    |
| `tr`       | Table row                |
| `th`       | Table header             |
| `td`       | Table cell               |
| `div`      | Generic block container  |
| `span`     | Generic inline container |
| `header`   | Header                   |
| `nav`      | Navigation               |
| `main`     | Main content             |
| `section`  | Section                  |
| `article`  | Independent content      |
| `aside`    | Side content             |
| `footer`   | Footer                   |
| `form`     | Form                     |
| `input`    | Input field              |
| `label`    | Input label              |
| `textarea` | Multiline input          |
| `select`   | Select menu              |
| `option`   | Select option            |
| `button`   | Button                   |
| `iframe`   | Embedded document        |
| `audio`    | Audio                    |
| `video`    | Video                    |
| `canvas`   | Drawing surface          |
| `svg`      | Vector graphics          |
| `script`   | JavaScript               |
| `link`     | External resource        |
| `meta`     | Metadata                 |

---

# 🔗 Important HTML Attributes

| Attribute      | Purpose                       |
| -------------- | ----------------------------- |
| `id`           | Unique identifier             |
| `class`        | Group/classification          |
| `href`         | Link destination              |
| `src`          | Resource location             |
| `alt`          | Alternative text              |
| `title`        | Additional information        |
| `style`        | Inline CSS                    |
| `name`         | Form field name               |
| `value`        | Input value                   |
| `type`         | Element/input type            |
| `placeholder`  | Input hint                    |
| `required`     | Required field                |
| `disabled`     | Disable element               |
| `readonly`     | Read-only input               |
| `checked`      | Selected checkbox/radio       |
| `selected`     | Selected option               |
| `target`       | Link target                   |
| `width`        | Width                         |
| `height`       | Height                        |
| `loading`      | Loading behavior              |
| `autocomplete` | Browser autocomplete behavior |

---

# 🏗️ Recommended HTML Project Structure

For a simple project:

```text
my-website/
│
├── index.html
│
├── about.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── logo.png
│   └── profile.jpg
│
└── README.md
```

For a larger frontend project, frameworks such as React and Next.js introduce their own project structures, but the underlying HTML concepts still remain important.

---

# 🎯 Practice Projects

After completing HTML, build these projects in order.

### Beginner

1. Personal Profile Page
2. Resume Page
3. Simple Blog
4. Restaurant Menu
5. Product Page

### Intermediate

6. Registration Form
7. Login Page
8. Contact Form
9. Portfolio Website
10. Product Comparison Table

### Advanced

11. E-commerce Product Page
12. Dashboard Layout
13. Documentation Website
14. Blog Website
15. Multi-page Business Website

---

# 🚀 What to Learn After HTML

HTML is only the first layer of frontend development.

Recommended sequence:

```text
HTML
  ↓
CSS
  ↓
Responsive Design
  ↓
JavaScript
  ↓
DOM
  ↓
Async JavaScript
  ↓
Fetch API
  ↓
Git & GitHub
  ↓
TypeScript
  ↓
React
  ↓
Next.js
  ↓
Backend
  ↓
Databases
  ↓
Full-Stack Development
```

For your full-stack path, a particularly useful progression is:

```text
HTML
  ↓
CSS
  ↓
JavaScript
  ↓
TypeScript
  ↓
React
  ↓
Next.js
  ↓
Node.js
  ↓
NestJS
  ↓
MongoDB / SQL
  ↓
Redis
  ↓
Authentication
  ↓
System Design
```

---

# 📖 Official Learning Reference

This README is a structured learning/reference guide based on the topics covered by the W3Schools HTML tutorial. The W3Schools curriculum includes HTML fundamentals, links, images, tables, lists, semantic HTML, forms, graphics, media, APIs, examples, exercises, and HTML references.

**W3Schools HTML Tutorial:**
https://www.w3schools.com/Html/

---

# ⭐ Final HTML Checklist

Before moving to CSS, make sure you can explain and use:

* [ ] What HTML is
* [ ] HTML document structure
* [ ] `DOCTYPE`
* [ ] Elements
* [ ] Attributes
* [ ] Headings
* [ ] Paragraphs
* [ ] Formatting
* [ ] Links
* [ ] Images
* [ ] Tables
* [ ] Lists
* [ ] `div`
* [ ] `span`
* [ ] `class`
* [ ] `id`
* [ ] Semantic HTML
* [ ] Forms
* [ ] Input types
* [ ] Form validation
* [ ] Audio
* [ ] Video
* [ ] Iframes
* [ ] SVG
* [ ] Canvas
* [ ] HTML entities
* [ ] Character encoding
* [ ] Responsive HTML
* [ ] Accessibility
* [ ] Web Storage
* [ ] Web Workers
* [ ] Geolocation
* [ ] Drag and Drop
* [ ] Server-Sent Events

> **Goal:** Don't just memorize HTML tags. Learn **why each element exists, when to use it, and how it contributes to semantic, accessible, maintainable web pages.**
