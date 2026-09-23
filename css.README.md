# CSS — Complete Learning & Reference Guide

> A structured CSS README based on the W3Schools CSS tutorial, organized from fundamentals to advanced layout, responsive design, and reference topics.
>
> Source: https://www.w3schools.com/css/

---

## Table of Contents

- [1. What is CSS?](#1-what-is-css)
- [2. CSS Syntax](#2-css-syntax)
- [3. Adding CSS](#3-adding-css)
- [4. Selectors](#4-selectors)
- [5. Comments and Errors](#5-comments-and-errors)
- [6. Colors](#6-colors)
- [7. Backgrounds](#7-backgrounds)
- [8. Borders](#8-borders)
- [9. Margins](#9-margins)
- [10. Padding](#10-padding)
- [11. Height, Width and Box Model](#11-height-width-and-box-model)
- [12. Outline](#12-outline)
- [13. Text](#13-text)
- [14. Fonts](#14-fonts)
- [15. Icons](#15-icons)
- [16. Links](#16-links)
- [17. Lists](#17-lists)
- [18. Tables](#18-tables)
- [19. Display and Visibility](#19-display-and-visibility)
- [20. Max-Width](#20-max-width)
- [21. Positioning](#21-positioning)
- [22. Z-Index](#22-z-index)
- [23. Overflow](#23-overflow)
- [24. Float and Clear](#24-float-and-clear)
- [25. Inline-Block](#25-inline-block)
- [26. Alignment](#26-alignment)
- [27. Combinators](#27-combinators)
- [28. Pseudo-Classes](#28-pseudo-classes)
- [29. Pseudo-Elements](#29-pseudo-elements)
- [30. Opacity](#30-opacity)
- [31. Navigation Bars](#31-navigation-bars)
- [32. Dropdowns](#32-dropdowns)
- [33. Image Gallery and Sprites](#33-image-gallery-and-sprites)
- [34. Attribute Selectors](#34-attribute-selectors)
- [35. Forms](#35-forms)
- [36. Counters](#36-counters)
- [37. Units](#37-units)
- [38. Inheritance](#38-inheritance)
- [39. Specificity](#39-specificity)
- [40. `!important`](#40-important)
- [41. Math Functions](#41-math-functions)
- [42. Optimization and Accessibility](#42-optimization-and-accessibility)
- [43. Website Layout](#43-website-layout)
- [44. Advanced CSS](#44-advanced-css)
- [45. Gradients](#45-gradients)
- [46. Shadows and Text Effects](#46-shadows-and-text-effects)
- [47. Transforms](#47-transforms)
- [48. Transitions](#48-transitions)
- [49. Animations](#49-animations)
- [50. Tooltips](#50-tooltips)
- [51. Image Styling](#51-image-styling)
- [52. Object Fit and Position](#52-object-fit-and-position)
- [53. Masking](#53-masking)
- [54. Buttons and Pagination](#54-buttons-and-pagination)
- [55. Multiple Columns](#55-multiple-columns)
- [56. User Interface](#56-user-interface)
- [57. CSS Variables](#57-css-variables)
- [58. `@property`](#58-property)
- [59. Box Sizing](#59-box-sizing)
- [60. CSS Functions](#60-css-functions)
- [61. Media Queries](#61-media-queries)
- [62. Flexbox](#62-flexbox)
- [63. CSS Grid](#63-css-grid)
- [64. Responsive Web Design](#64-responsive-web-design)
- [65. Useful CSS References](#65-useful-css-references)
- [66. Learning Roadmap](#66-learning-roadmap)
- [67. Practice Projects](#67-practice-projects)
- [68. Quick Cheat Sheet](#68-quick-cheat-sheet)

---

# 1. What is CSS?

**CSS** stands for **Cascading Style Sheets**.

CSS controls how HTML elements look and are laid out on a webpage.

CSS can control:

- Colors
- Fonts
- Text
- Spacing
- Borders
- Backgrounds
- Sizes
- Positioning
- Responsive layouts
- Animations
- Transitions
- Flexbox
- Grid
- Visibility

### Why CSS?

Without CSS, HTML mainly describes the structure and content of a page.

```html
<h1>Hello World</h1>
<p>This is a paragraph.</p>
```

With CSS:

```css
h1 {
  color: blue;
  text-align: center;
}

p {
  font-size: 20px;
}
```

External CSS also lets one stylesheet control many HTML pages.

---

# 2. CSS Syntax

A CSS rule contains a **selector**, **property**, and **value**.

```css
selector {
  property: value;
}
```

Example:

```css
p {
  color: red;
  font-size: 18px;
}
```

- `p` → selector
- `color` → property
- `red` → value
- `font-size` → property
- `18px` → value

Multiple declarations are separated by semicolons.

---

# 3. Adding CSS

There are three main ways to add CSS.

## 3.1 External CSS

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

`style.css`:

```css
body {
  background-color: lightblue;
}
```

This is normally the preferred approach for larger projects.

## 3.2 Internal CSS

```html
<head>
  <style>
    body {
      background-color: lightblue;
    }
  </style>
</head>
```

Useful when styles belong to one HTML document.

## 3.3 Inline CSS

```html
<p style="color: red;">Hello</p>
```

Useful for very specific cases, but generally avoid excessive inline styling.

## Multiple Stylesheets

A page can load multiple stylesheets:

```html
<link rel="stylesheet" href="base.css">
<link rel="stylesheet" href="components.css">
<link rel="stylesheet" href="responsive.css">
```

---

# 4. Selectors

Selectors determine which HTML elements CSS should style.

## Element Selector

```css
p {
  color: blue;
}
```

## ID Selector

```css
#header {
  background: black;
}
```

```html
<div id="header"></div>
```

## Class Selector

```css
.card {
  padding: 20px;
}
```

```html
<div class="card"></div>
```

## Universal Selector

```css
* {
  box-sizing: border-box;
}
```

## Grouping Selectors

```css
h1, h2, p {
  font-family: Arial, sans-serif;
}
```

---

# 5. Comments and Errors

## CSS Comments

```css
/* This is a CSS comment */

.card {
  padding: 20px;
}
```

Comments are ignored by the browser.

## Common CSS Errors

```css
/* Wrong */
p {
  color red;
}

/* Correct */
p {
  color: red;
}
```

Common mistakes:

- Missing `:`
- Missing `;`
- Missing `}`
- Misspelled property
- Invalid value
- Incorrect selector

---

# 6. Colors

CSS supports several color formats.

## Named Colors

```css
color: red;
background-color: blue;
```

## HEX

```css
color: #ff0000;
```

## RGB

```css
color: rgb(255, 0, 0);
```

## RGBA

RGBA includes alpha transparency.

```css
color: rgba(255, 0, 0, 0.5);
```

## HSL

```css
color: hsl(0, 100%, 50%);
```

## HSLA

```css
color: hsla(0, 100%, 50%, 0.5);
```

---

# 7. Backgrounds

Important background properties:

```css
background-color
background-image
background-repeat
background-attachment
background-position
background-size
background-origin
background-clip
```

Example:

```css
.hero {
  background-color: #222;
  background-image: url("hero.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

## Background Shorthand

```css
background: #222 url("hero.jpg") no-repeat center / cover;
```

---

# 8. Borders

```css
.card {
  border-style: solid;
  border-width: 2px;
  border-color: black;
}
```

Shorthand:

```css
.card {
  border: 2px solid black;
}
```

## Individual Sides

```css
border-top
border-right
border-bottom
border-left
```

Example:

```css
.card {
  border-bottom: 2px solid red;
}
```

## Rounded Borders

```css
.card {
  border-radius: 12px;
}
```

---

# 9. Margins

Margin creates space **outside** an element.

```css
.box {
  margin: 20px;
}
```

Individual properties:

```css
margin-top
margin-right
margin-bottom
margin-left
```

Example:

```css
.box {
  margin: 10px 20px 30px 40px;
}
```

Order:

```text
top → right → bottom → left
```

## Auto Margin

```css
.container {
  width: 80%;
  margin: 0 auto;
}
```

This commonly centers a block element horizontally.

## Margin Collapse

Vertical margins of certain block elements can collapse into one another.

---

# 10. Padding

Padding creates space **inside** an element.

```css
.card {
  padding: 20px;
}
```

Individual properties:

```css
padding-top
padding-right
padding-bottom
padding-left
```

Example:

```css
.card {
  padding: 10px 20px 30px 40px;
}
```

---

# 11. Height, Width and Box Model

## Width and Height

```css
.box {
  width: 300px;
  height: 200px;
}
```

## Minimum and Maximum Size

```css
.container {
  min-width: 300px;
  max-width: 1200px;
}

.box {
  min-height: 200px;
  max-height: 600px;
}
```

## CSS Box Model

Every element can be understood as:

```text
+-----------------------------+
|           Margin            |
|  +-----------------------+  |
|  |        Border         |  |
|  |  +-----------------+  |  |
|  |  |     Padding     |  |  |
|  |  |  +-----------+  |  |  |
|  |  |  |  Content  |  |  |  |
|  |  |  +-----------+  |  |  |
|  |  +-----------------+  |  |
|  +-----------------------+  |
+-----------------------------+
```

The four parts are:

1. Content
2. Padding
3. Border
4. Margin

## `box-sizing`

Default:

```css
box-sizing: content-box;
```

Common global reset:

```css
* {
  box-sizing: border-box;
}
```

With `border-box`, declared width and height include padding and border.

---

# 12. Outline

An outline is drawn around an element and is different from a border.

```css
input:focus {
  outline: 2px solid blue;
}
```

Properties:

```css
outline-style
outline-width
outline-color
outline
outline-offset
```

Example:

```css
button {
  outline: 2px solid blue;
  outline-offset: 4px;
}
```

---

# 13. Text

Important properties:

```css
color
text-align
text-decoration
text-transform
text-indent
letter-spacing
line-height
word-spacing
text-shadow
```

Example:

```css
.title {
  color: #222;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.5;
}
```

## Text Alignment

```css
text-align: left;
text-align: center;
text-align: right;
text-align: justify;
```

## Text Decoration

```css
text-decoration: underline;
text-decoration: none;
text-decoration: line-through;
```

## Text Transformation

```css
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;
```

---

# 14. Fonts

Important font properties:

```css
font-family
font-size
font-style
font-weight
font-variant
line-height
```

Example:

```css
body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
```

## Font Weight

```css
font-weight: normal;
font-weight: bold;
font-weight: 700;
```

## Font Shorthand

```css
font: italic bold 20px/1.5 Arial, sans-serif;
```

## Font Fallbacks

```css
font-family: Arial, Helvetica, sans-serif;
```

If the first font is unavailable, the browser tries the next one.

---

# 15. Icons

Icons can be added using icon libraries such as:

- Font Awesome
- Bootstrap Icons
- Google Material Icons

Example concept:

```html
<i class="fa-solid fa-house"></i>
```

The exact classes depend on the icon library being used.

---

# 16. Links

Links can be styled using pseudo-classes:

```css
a:link {
  color: blue;
}

a:visited {
  color: purple;
}

a:hover {
  color: red;
}

a:active {
  color: green;
}
```

Common link states:

```text
:link
:visited
:hover
:active
```

## Link as Button

```css
.button-link {
  display: inline-block;
  padding: 10px 20px;
  background: black;
  color: white;
  text-decoration: none;
  border-radius: 6px;
}
```

---

# 17. Lists

CSS can style ordered and unordered lists.

```css
ul {
  list-style-type: square;
}

ol {
  list-style-type: upper-roman;
}
```

Other properties include:

```css
list-style-type
list-style-position
list-style-image
list-style
```

Remove default bullets:

```css
ul {
  list-style: none;
  padding: 0;
}
```

---

# 18. Tables

Useful table properties:

```css
border
border-collapse
width
padding
text-align
vertical-align
```

Example:

```css
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
```

## Responsive Tables

A common approach:

```css
.table-wrapper {
  overflow-x: auto;
}
```

---

# 19. Display and Visibility

## `display`

Common values:

```css
display: block;
display: inline;
display: inline-block;
display: flex;
display: grid;
display: none;
```

## `display: none`

Removes the element from layout.

```css
.hidden {
  display: none;
}
```

## `visibility: hidden`

Hides the element but preserves its layout space.

```css
.hidden {
  visibility: hidden;
}
```

### Difference

```text
display: none
→ element is removed from layout

visibility: hidden
→ element is invisible but still occupies space
```

---

# 20. Max-Width

`max-width` prevents an element from becoming wider than a defined value.

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
```

This is useful for responsive containers.

---

# 21. Positioning

CSS position values include:

```css
static
relative
fixed
absolute
sticky
```

## Static

Default positioning.

```css
.box {
  position: static;
}
```

## Relative

The element remains in normal flow but can be offset.

```css
.box {
  position: relative;
  top: 10px;
  left: 20px;
}
```

## Absolute

Removed from normal flow and positioned relative to a positioned ancestor.

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

## Fixed

Positioned relative to the viewport.

```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
```

## Sticky

Behaves relatively until a scroll threshold is reached.

```css
.header {
  position: sticky;
  top: 0;
}
```

---

# 22. Z-Index

`z-index` controls stacking order.

```css
.modal {
  position: fixed;
  z-index: 1000;
}
```

Generally, a positioned element with a higher stacking level appears above one with a lower level, subject to stacking contexts.

---

# 23. Overflow

Controls what happens when content is larger than its box.

```css
overflow: visible;
overflow: hidden;
overflow: scroll;
overflow: auto;
```

Example:

```css
.box {
  width: 300px;
  height: 150px;
  overflow: auto;
}
```

Axis-specific:

```css
overflow-x: auto;
overflow-y: hidden;
```

---

# 24. Float and Clear

Float was traditionally used for layouts and is still useful for wrapping text around elements.

```css
img {
  float: left;
  margin-right: 20px;
}
```

Clear:

```css
.clear {
  clear: both;
}
```

Modern page layouts generally use **Flexbox** or **Grid** instead of float.

---

# 25. Inline-Block

`inline-block` combines characteristics of inline and block elements.

```css
.item {
  display: inline-block;
  width: 200px;
  padding: 20px;
}
```

Useful for placing boxes side by side while allowing width and height.

---

# 26. Alignment

## Horizontal Centering

```css
.container {
  width: 80%;
  margin: auto;
}
```

For text:

```css
text-align: center;
```

## Flex Centering

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Vertical Alignment

For modern layouts, Flexbox and Grid are usually the simplest solutions.

---

# 27. Combinators

Combinators describe relationships between selectors.

## Descendant

```css
div p {
  color: red;
}
```

Selects all `p` elements inside `div`.

## Child

```css
div > p {
  color: red;
}
```

Selects direct children.

## Adjacent Sibling

```css
h2 + p {
  color: red;
}
```

Selects the first `p` immediately after an `h2`.

## General Sibling

```css
h2 ~ p {
  color: red;
}
```

Selects `p` siblings that occur after `h2`.

---

# 28. Pseudo-Classes

Pseudo-classes select an element based on a state or structural condition.

Examples:

```css
:hover
:focus
:active
:visited
:first-child
:last-child
:nth-child()
:not()
:checked
:disabled
```

Example:

```css
button:hover {
  transform: translateY(-2px);
}
```

Structural example:

```css
li:nth-child(2) {
  color: red;
}
```

---

# 29. Pseudo-Elements

Pseudo-elements style specific parts of an element.

Common examples:

```css
::before
::after
::first-letter
::first-line
::selection
```

Example:

```css
.card::before {
  content: "";
  display: block;
  height: 4px;
  background: blue;
}
```

`content` is commonly used with `::before` and `::after`.

---

# 30. Opacity

Opacity ranges from `0` to `1`.

```css
.box {
  opacity: 0.5;
}
```

Examples:

```text
0   → completely transparent
0.5 → 50% visible
1   → fully visible
```

---

# 31. Navigation Bars

A navigation bar can be built with HTML + CSS.

Example:

```css
nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: #222;
}
```

Common navbar features:

- Horizontal navigation
- Vertical navigation
- Hover states
- Active states
- Responsive navigation
- Dropdown menus

---

# 32. Dropdowns

Dropdowns can be built using positioning and hover/focus interactions.

Basic structure:

```css
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
}

.dropdown:hover .dropdown-menu {
  display: block;
}
```

For production UI, also consider keyboard accessibility and focus behavior.

---

# 33. Image Gallery and Sprites

## Image Gallery

CSS can create card-based image galleries:

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

## Image Sprites

An image sprite combines multiple images into one image and uses background positioning to display only a selected portion.

Concept:

```css
.icon {
  background-image: url("sprites.png");
  background-position: -20px -40px;
}
```

---

# 34. Attribute Selectors

Attribute selectors target elements based on attributes.

```css
input[type="text"] {
  border: 1px solid #ccc;
}
```

Common patterns:

```css
[attribute]
[attribute="value"]
[attribute~="value"]
[attribute|="value"]
[attribute^="value"]
[attribute$="value"]
[attribute*="value"]
```

Examples:

```css
a[href^="https"] {
  color: green;
}

img[alt] {
  border: 1px solid #ccc;
}
```

---

# 35. Forms

CSS can style:

- Inputs
- Textareas
- Selects
- Buttons
- Checkboxes
- Radio buttons
- Labels

Example:

```css
input,
textarea,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
```

## Focus

```css
input:focus {
  outline: 2px solid blue;
}
```

## Form Icons

Icons can be placed using positioning:

```css
.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
```

---

# 36. Counters

CSS counters can automatically number elements.

```css
body {
  counter-reset: section;
}

h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}
```

Nested counters can be used for hierarchical numbering.

---

# 37. Units

CSS units are divided into **absolute** and **relative** units.

## Absolute Units

Common example:

```text
px
```

Other absolute units include:

```text
cm
mm
in
pt
pc
```

## Relative Units

Common units:

```text
%
em
rem
vw
vh
vmin
vmax
```

Examples:

```css
width: 80%;
font-size: 1rem;
padding: 2em;
height: 100vh;
width: 50vw;
```

### `rem`

Relative to the root element's font size.

### `em`

Relative to the relevant/current font sizing context.

### `%`

Relative to a containing context/property.

### `vw` and `vh`

```text
1vw = 1% of viewport width
1vh = 1% of viewport height
```

---

# 38. Inheritance

Some CSS properties are inherited from parent elements.

```css
body {
  color: #222;
  font-family: Arial, sans-serif;
}
```

Child elements can inherit these properties.

Explicit control:

```css
color: inherit;
color: initial;
color: unset;
```

---

# 39. Specificity

When multiple rules target the same element, CSS uses the cascade and specificity to determine which declaration applies.

A simplified specificity hierarchy:

```text
Inline styles
    ↓
IDs
    ↓
Classes / attributes / pseudo-classes
    ↓
Elements / pseudo-elements
```

Example:

```css
p {
  color: blue;
}

.text {
  color: green;
}

#main-text {
  color: red;
}
```

An element matching all three generally receives the ID rule because it has greater specificity.

Avoid solving every specificity problem with `!important`; prefer clear selectors and predictable component structure.

---

# 40. `!important`

`!important` increases the priority of a declaration.

```css
p {
  color: red !important;
}
```

Use it sparingly because excessive use makes the cascade difficult to maintain.

---

# 41. Math Functions

CSS supports mathematical functions.

## `calc()`

```css
width: calc(100% - 40px);
```

## `min()`

```css
width: min(90%, 1200px);
```

## `max()`

```css
width: max(300px, 50%);
```

## `clamp()`

```css
font-size: clamp(1rem, 2vw, 2rem);
```

`clamp(min, preferred, max)` is especially useful for fluid responsive typography.

---

# 42. Optimization and Accessibility

## CSS Optimization

Good practices:

- Remove unused CSS
- Avoid unnecessary specificity
- Reuse common styles
- Minify production CSS
- Reduce duplicated declarations
- Load only required styles
- Use efficient selectors
- Keep component styles organized

## Accessibility

Consider:

- Sufficient color contrast
- Visible keyboard focus
- Readable font sizes
- Reduced motion preferences
- Responsive layouts
- Don't communicate information only through color
- Preserve logical reading and focus order

Example:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto;
    animation-duration: 0.01ms;
    transition-duration: 0.01ms;
  }
}
```

---

# 43. Website Layout

Common website structure:

```text
+---------------------------+
|          Header           |
+---------------------------+
|        Navigation         |
+---------------------------+
|                           |
|          Main             |
|                           |
|  +---------------------+  |
|  |       Content       |  |
|  +---------------------+  |
|                           |
+---------------------------+
|          Footer           |
+---------------------------+
```

Modern layouts are commonly built using:

- Flexbox
- CSS Grid
- Responsive units
- Media queries
- Container/max-width patterns

---

# 44. Advanced CSS

W3Schools also covers advanced CSS topics including:

- Rounded corners
- Border images
- Multiple backgrounds
- Background sizing
- Background origin
- Background clipping
- Gradients
- Shadows
- Text effects
- Custom fonts
- 2D transforms
- 3D transforms
- Transitions
- Animations
- Tooltips
- Image effects
- Image filters
- Image shapes
- Object fitting
- Masking
- Buttons
- Pagination
- Multiple columns
- User interface styling
- CSS variables
- `@property`
- Box sizing
- CSS functions
- Media queries

---

# 45. Gradients

Gradients create smooth transitions between colors.

## Linear Gradient

```css
.box {
  background: linear-gradient(to right, red, blue);
}
```

## Radial Gradient

```css
.box {
  background: radial-gradient(circle, red, blue);
}
```

## Conic Gradient

```css
.box {
  background: conic-gradient(red, yellow, green, blue);
}
```

---

# 46. Shadows and Text Effects

## Text Shadow

```css
h1 {
  text-shadow: 2px 2px 4px #888;
}
```

## Box Shadow

```css
.card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

Common box-shadow structure:

```text
offset-x
offset-y
blur
spread
color
```

---

# 47. Transforms

Transforms change the visual position, size, or orientation of an element.

## Translate

```css
transform: translate(20px, 10px);
```

## Rotate

```css
transform: rotate(45deg);
```

## Scale

```css
transform: scale(1.2);
```

## Skew

```css
transform: skew(10deg);
```

Transforms can be combined:

```css
transform: translateY(-5px) scale(1.02);
```

## 3D

Common functions include:

```css
translate3d()
rotateX()
rotateY()
rotateZ()
scale3d()
perspective()
```

---

# 48. Transitions

Transitions animate property changes between states.

```css
button {
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: blue;
}
```

Common transition properties:

```css
transition-property
transition-duration
transition-timing-function
transition-delay
transition
```

Timing functions include:

```text
linear
ease
ease-in
ease-out
ease-in-out
```

---

# 49. Animations

CSS animations use `@keyframes`.

```css
@keyframes slide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100px);
  }
}

.box {
  animation: slide 1s ease-in-out;
}
```

Important properties:

```css
animation-name
animation-duration
animation-delay
animation-iteration-count
animation-direction
animation-timing-function
animation-fill-mode
animation-play-state
```

---

# 50. Tooltips

A tooltip can be created using positioning and pseudo-elements.

```css
.tooltip {
  position: relative;
}

.tooltip .tooltip-text {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
}
```

For accessible production components, also consider focus and touch interactions.

---

# 51. Image Styling

Common image styling:

```css
img {
  width: 100%;
  border-radius: 12px;
}
```

Effects can include:

- Rounded corners
- Opacity
- Hover effects
- Overlays
- Filters
- Shadows
- Responsive sizing

Example:

```css
img {
  max-width: 100%;
  height: auto;
}
```

---

# 52. Object Fit and Position

## `object-fit`

Controls how replaced content such as images and videos fit inside their box.

```css
img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
```

Common values:

```text
fill
contain
cover
none
scale-down
```

## `object-position`

Controls the position of replaced content.

```css
img {
  object-fit: cover;
  object-position: center;
}
```

---

# 53. Masking

CSS masking controls which parts of an element remain visible.

Mask sources can include:

- Images
- Gradients
- SVG

Concept:

```css
.element {
  mask-image: linear-gradient(to bottom, black, transparent);
}
```

---

# 54. Buttons and Pagination

## Button

```css
button {
  padding: 10px 18px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
}
```

## Hover Effect

```css
button:hover {
  transform: translateY(-2px);
}
```

## Button Groups

```css
.button-group {
  display: flex;
  gap: 8px;
}
```

## Pagination

Pagination can be styled with inline or flex layouts:

```css
.pagination {
  display: flex;
  gap: 8px;
}

.pagination a {
  padding: 8px 12px;
  text-decoration: none;
}
```

---

# 55. Multiple Columns

CSS multi-column layout can split content into columns.

```css
.article {
  column-count: 3;
  column-gap: 40px;
}
```

Useful properties:

```css
column-count
column-width
column-gap
column-rule
column-span
```

---

# 56. User Interface

CSS provides UI-related properties for controlling how users interact with elements.

Examples include:

```css
resize
cursor
outline
```

Example:

```css
textarea {
  resize: vertical;
}
```

---

# 57. CSS Variables

CSS custom properties allow reusable values.

```css
:root {
  --primary-color: #2563eb;
  --spacing: 16px;
}
```

Use them:

```css
button {
  background: var(--primary-color);
  padding: var(--spacing);
}
```

## Fallback Value

```css
color: var(--primary-color, blue);
```

## Overriding Variables

```css
:root {
  --primary-color: blue;
}

.dark {
  --primary-color: white;
}
```

This is useful for themes.

---

# 58. `@property`

`@property` allows more control over registered custom properties.

Concept:

```css
@property --progress {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}
```

It can provide type information, inheritance behavior, and an initial value for a custom property.

---

# 59. Box Sizing

Common global setup:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

### `content-box`

Width and height apply to the content box.

### `border-box`

Width and height include padding and border.

For most application layouts, `border-box` makes sizing easier to reason about.

---

# 60. CSS Functions

Important CSS functions include:

```css
var()
calc()
min()
max()
clamp()
rgb()
rgba()
hsl()
hsla()
url()
linear-gradient()
radial-gradient()
translate()
rotate()
scale()
```

Example:

```css
.card {
  width: min(100%, 500px);
  padding: clamp(16px, 3vw, 32px);
}
```

---

# 61. Media Queries

Media queries apply CSS based on conditions such as viewport width.

```css
@media (max-width: 768px) {
  .container {
    padding: 16px;
  }
}
```

Mobile-first example:

```css
.container {
  display: block;
}

@media (min-width: 768px) {
  .container {
    display: flex;
  }
}
```

Common conditions:

```css
min-width
max-width
orientation
prefers-color-scheme
prefers-reduced-motion
```

---

# 62. Flexbox

Flexbox is designed primarily for **one-dimensional layouts**: rows or columns.

```css
.container {
  display: flex;
}
```

## Main Axis

Controlled by:

```css
flex-direction
```

Values:

```css
row
row-reverse
column
column-reverse
```

## Main-Axis Alignment

```css
justify-content
```

Common values:

```css
flex-start
center
flex-end
space-between
space-around
space-evenly
```

## Cross-Axis Alignment

```css
align-items
```

Common values:

```css
stretch
flex-start
center
flex-end
baseline
```

## Wrapping

```css
flex-wrap: wrap;
```

## Gap

```css
gap: 20px;
```

## Flex Items

Important properties:

```css
flex-grow
flex-shrink
flex-basis
flex
align-self
order
```

Example:

```css
.container {
  display: flex;
  gap: 20px;
}

.item {
  flex: 1;
}
```

### Perfect Centering

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

# 63. CSS Grid

Grid is designed for **two-dimensional layouts** involving rows and columns.

```css
.container {
  display: grid;
}
```

## Columns

```css
grid-template-columns: 1fr 1fr 1fr;
```

Or:

```css
grid-template-columns: repeat(3, 1fr);
```

## Rows

```css
grid-template-rows: auto 1fr auto;
```

## Gap

```css
gap: 20px;
```

Or:

```css
row-gap: 20px;
column-gap: 30px;
```

## Responsive Grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

## Grid Item Placement

```css
.item {
  grid-column: 1 / 3;
}
```

```css
.item {
  grid-row: 1 / 3;
}
```

## Named Areas

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
```

## Flexbox vs Grid

```text
Flexbox → one-dimensional
Grid    → two-dimensional
```

---

# 64. Responsive Web Design

Responsive web design makes websites adapt to different screens.

Common devices:

```text
Desktop
Tablet
Mobile
```

## Viewport

HTML should normally include:

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
>
```

## Responsive Images

```css
img {
  max-width: 100%;
  height: auto;
}
```

## Responsive Videos

```css
video {
  max-width: 100%;
  height: auto;
}
```

## Responsive Grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
```

## Mobile-First Strategy

Start with the smallest layout:

```css
.card {
  width: 100%;
}
```

Then enhance for larger screens:

```css
@media (min-width: 768px) {
  .card {
    width: 50%;
  }
}
```

---

# 65. Useful CSS References

When you need exact property behavior, browser support, syntax, or selector details, use reference documentation.

Important reference categories include:

- CSS Properties
- CSS Selectors
- CSS Combinators
- CSS Pseudo-classes
- CSS Pseudo-elements
- CSS At-rules
- CSS Functions
- CSS Units
- CSS Colors
- CSS Animatable Properties
- Web Safe Fonts
- Browser Support
- Default CSS Values

Official W3Schools CSS tutorial:

https://www.w3schools.com/css/

---

# 66. Learning Roadmap

A practical learning sequence:

## Phase 1 — Fundamentals

Learn:

- What CSS is
- Syntax
- Selectors
- Colors
- Backgrounds
- Borders
- Margin
- Padding
- Width / Height
- Box Model

## Phase 2 — Typography

Learn:

- Text
- Fonts
- Icons
- Links
- Lists
- Tables

## Phase 3 — Layout

Learn:

- Display
- Position
- Overflow
- Float
- Inline-block
- Alignment
- Flexbox
- Grid

## Phase 4 — Selectors

Learn:

- Combinators
- Pseudo-classes
- Pseudo-elements
- Attribute selectors
- Specificity
- Inheritance

## Phase 5 — Responsive Design

Learn:

- Units
- Media queries
- Responsive images
- Responsive videos
- Mobile-first design
- Flexible grids

## Phase 6 — Advanced CSS

Learn:

- Gradients
- Shadows
- Transforms
- Transitions
- Animations
- Filters
- Object-fit
- Masking
- CSS variables
- Functions

## Phase 7 — Production CSS

Learn:

- Accessibility
- Performance
- Maintainability
- Design systems
- Component architecture
- Responsive patterns
- Browser compatibility

---

# 67. Practice Projects

Build these projects in order.

### Beginner

1. Personal profile card
2. Login page
3. Registration form
4. Simple navbar
5. Pricing card
6. Blog article

### Intermediate

7. Responsive landing page
8. Portfolio website
9. Product card grid
10. Image gallery
11. Dashboard layout
12. Responsive admin panel

### Advanced

13. SaaS dashboard
14. E-commerce UI
15. Responsive design system
16. Dark/light theme system
17. Animated portfolio
18. Responsive multi-page website

---

# 68. Quick Cheat Sheet

## Selectors

```css
* {}
p {}
.class {}
#id {}
div p {}
div > p {}
h2 + p {}
h2 ~ p {}
input[type="text"] {}
```

## Box Model

```css
width
height
margin
padding
border
box-sizing
```

## Text

```css
color
text-align
text-decoration
text-transform
letter-spacing
line-height
text-shadow
```

## Background

```css
background-color
background-image
background-repeat
background-position
background-size
background
```

## Position

```css
position
top
right
bottom
left
z-index
```

## Layout

```css
display
overflow
float
clear
```

## Flexbox

```css
display: flex
flex-direction
justify-content
align-items
flex-wrap
gap
flex
order
align-self
```

## Grid

```css
display: grid
grid-template-columns
grid-template-rows
gap
grid-column
grid-row
grid-area
```

## Responsive

```css
@media
min-width
max-width
%
rem
em
vw
vh
clamp()
min()
max()
```

## Animation

```css
transform
transition
animation
@keyframes
```

## Modern CSS

```css
--custom-property
var()
calc()
clamp()
@property
@supports
```

---

# CSS Mini Project Example

A simple responsive card:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >
  <link rel="stylesheet" href="style.css">
  <title>CSS Card</title>
</head>
<body>

  <main class="container">
    <article class="card">
      <h1>Learn CSS</h1>
      <p>
        Build beautiful, responsive websites using modern CSS.
      </p>
      <button>Start Learning</button>
    </article>
  </main>

</body>
</html>
```

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f4f4;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.card {
  width: 100%;
  max-width: 450px;
  padding: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.card h1 {
  margin-top: 0;
}

.card button {
  padding: 12px 20px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.card button:hover {
  transform: translateY(-2px);
}
```

---

# Final CSS Checklist

Before considering yourself comfortable with CSS, make sure you can explain and use:

- [ ] CSS syntax
- [ ] Selectors
- [ ] Cascade
- [ ] Specificity
- [ ] Inheritance
- [ ] Colors
- [ ] Backgrounds
- [ ] Borders
- [ ] Margin
- [ ] Padding
- [ ] Box model
- [ ] `box-sizing`
- [ ] Typography
- [ ] Display
- [ ] Positioning
- [ ] `z-index`
- [ ] Overflow
- [ ] Flexbox
- [ ] Grid
- [ ] Pseudo-classes
- [ ] Pseudo-elements
- [ ] Attribute selectors
- [ ] CSS units
- [ ] Media queries
- [ ] Responsive design
- [ ] Transitions
- [ ] Transforms
- [ ] Animations
- [ ] Gradients
- [ ] Shadows
- [ ] CSS variables
- [ ] CSS functions
- [ ] Accessibility
- [ ] Performance optimization

---

## Source

This README is a learning-oriented summary and reorganization of the W3Schools CSS tutorial and its listed topic areas.

- W3Schools CSS Tutorial: https://www.w3schools.com/css/
- CSS Introduction: https://www.w3schools.com/css/css_intro.asp

> This document summarizes the documentation rather than reproducing it verbatim.
