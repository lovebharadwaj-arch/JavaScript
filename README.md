# HTML, CSS & JavaScript Projects 🚀

This repository contains a collection of beginner-to-intermediate web development projects built using **HTML, CSS, and JavaScript**.

The main purpose of these projects is to practice core web development concepts such as:

* HTML structure and forms
* CSS styling and layouts
* JavaScript DOM manipulation
* JavaScript functions
* Events and event handling
* Input validation
* Regular Expressions (Regex)
* Conditional statements
* Loops
* String manipulation
* Basic problem-solving

---

## 📁 Projects

| # | Project               | Main Concepts                         |
| - | --------------------- | ------------------------------------- |
| 1 | 🔢 Counter            | DOM, Events, Variables                |
| 2 | 🔄 Palindrome Checker | Strings, Loops, Functions             |
| 3 | 📧 Email Validator    | Forms, Regex, Validation              |
| 4 | 🔍 Regex Projects     | Regular Expressions, Pattern Matching |

---

# 1. 🔢 Counter

A simple counter application that allows the user to increase, decrease, and reset a number.

### Features

* ➕ Increase counter
* ➖ Decrease counter
* 🔄 Reset counter
* Dynamic UI updates

### Concepts Used

```text
Variables
Functions
DOM Manipulation
Event Listeners
Click Events
Conditional Logic
```

### Example

```javascript
let count = 0;

function increase() {
    count++;
    document.getElementById("count").textContent = count;
}
```

### HTML

```html
<h1 id="count">0</h1>

<button onclick="increase()">+</button>
<button onclick="decrease()">-</button>
<button onclick="reset()">Reset</button>
```

---

# 2. 🔄 Palindrome Checker

A palindrome is a word, number, or sequence that reads the same forward and backward.

### Examples

```text
madam → Palindrome
level → Palindrome
racecar → Palindrome

hello → Not Palindrome
javascript → Not Palindrome
```

### Logic

```text
Input
  ↓
Convert to string
  ↓
Reverse the string
  ↓
Compare original and reversed
  ↓
Display result
```

### JavaScript Example

```javascript
function checkPalindrome(str) {
    let reversed = str.split("").reverse().join("");

    if (str === reversed) {
        return true;
    }

    return false;
}

console.log(checkPalindrome("madam"));
```

### Concepts Used

```text
Strings
Functions
split()
reverse()
join()
if / else
Comparison Operators
DOM Manipulation
```

---

# 3. 📧 Email Validator

An email validator checks whether the user has entered an email address in a valid format.

### Example

Valid:

```text
user@gmail.com
hello@example.com
test123@gmail.com
```

Invalid:

```text
user
user@
@gmail.com
user@gmail
user@.com
```

### Regex Example

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

### Validation

```javascript
function validateEmail(email) {
    return emailRegex.test(email);
}

console.log(validateEmail("user@gmail.com"));
```

### Concepts Used

```text
HTML Forms
Input Fields
JavaScript Functions
Regular Expressions
Regex test()
DOM Manipulation
Form Validation
```

---

# 4. 🔍 Regex Projects

This section contains projects and examples based on **Regular Expressions**.

Regular Expressions are patterns used to search, validate, and manipulate text.

## Common Regex Examples

### Email

```regex
^[^\s@]+@[^\s@]+\.[^\s@]+$
```

### Mobile Number

Example for a 10-digit number:

```regex
^[0-9]{10}$
```

### Only Numbers

```regex
^[0-9]+$
```

### Only Alphabets

```regex
^[A-Za-z]+$
```

### Username

```regex
^[A-Za-z0-9_]{3,16}$
```

### Password

Example requiring at least 8 characters:

```regex
^.{8,}$
```

---

# 🧠 JavaScript Concepts Practiced

These projects help practice important JavaScript concepts.

## Variables

```javascript
let count = 0;
const name = "Love";
```

## Functions

```javascript
function add(a, b) {
    return a + b;
}
```

## Conditions

```javascript
if (email.includes("@")) {
    console.log("Valid");
} else {
    console.log("Invalid");
}
```

## DOM Manipulation

```javascript
const heading = document.getElementById("heading");

heading.textContent = "Hello JavaScript";
```

## Event Listeners

```javascript
button.addEventListener("click", function () {
    console.log("Button clicked");
});
```

## String Methods

```javascript
str.length
str.toUpperCase()
str.toLowerCase()
str.includes()
str.split()
str.trim()
```

## Array Methods

```javascript
map()
filter()
reduce()
forEach()
find()
some()
```

## Regular Expressions

```javascript
regex.test(value);
```

---

# 🎨 CSS Concepts

The projects also provide practice with CSS.

### Basic Styling

```css
body {
    font-family: Arial, sans-serif;
}

button {
    padding: 10px 20px;
    cursor: pointer;
}
```

### Flexbox

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Responsive Design

```css
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
```

---

# 🌐 HTML Concepts

The projects use common HTML elements such as:

```html
<div>
<h1>
<p>
<input>
<button>
<form>
<label>
<span>
```

Example form:

```html
<form>
    <label for="email">Email</label>

    <input
        type="email"
        id="email"
        placeholder="Enter your email"
    >

    <button type="submit">
        Validate
    </button>
</form>
```

---

# 📂 Suggested Project Structure

```text
html-css-js-projects/
│
├── README.md
│
├── counter/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── palindrome/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── email-validator/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── regex/
    ├── index.html
    ├── style.css
    └── script.js
```

---

# ▶️ How to Run

No installation or package manager is required.

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Open the project

Go inside the project directory:

```bash
cd html-css-js-projects
```

### 3. Open `index.html`

You can open the HTML file directly in your browser.

Alternatively, use **VS Code Live Server**.

---

# 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM API
* Regular Expressions

---

# 📚 Learning Goals

Through these projects, the following fundamentals are practiced:

```text
HTML
 ↓
CSS
 ↓
JavaScript Basics
 ↓
DOM Manipulation
 ↓
Events
 ↓
Forms
 ↓
Validation
 ↓
String Manipulation
 ↓
Regular Expressions
 ↓
Problem Solving
```

---

# 🚀 Future Projects

More JavaScript projects can be added to this repository as learning progresses.

Possible next projects:

* 🧮 Calculator
* ⏱️ Stopwatch
* ⏰ Digital Clock
* 📝 Todo List
* 🎯 Quiz App
* 🔐 Password Generator
* 🔎 Search Filter
* 🌡️ Temperature Converter
* 🎨 Color Generator
* 📝 Form Validation
* 🪟 Modal Popup
* 🖼️ Image Slider
* 💰 Expense Tracker
* 🛒 Shopping Cart
* 🌦️ Weather App
* 🔑 Local Storage Authentication

---

# 👨‍💻 Purpose

This repository is created for **learning and practicing frontend web development**.

The projects gradually build understanding from basic HTML and CSS to JavaScript logic, DOM manipulation, form handling, validation, and Regular Expressions.

---

## ⭐ Learning Path

```text
HTML
  ↓
CSS
  ↓
JavaScript Basics
  ↓
DOM
  ↓
Events
  ↓
Forms
  ↓
Validation
  ↓
Regex
  ↓
Advanced JavaScript
  ↓
React
  ↓
Next.js
```

---

## 📌 Author

**Love Bharadwaj**

Learning and building projects with:

**HTML + CSS + JavaScript 🚀**
