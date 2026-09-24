# 🌐 Web Technology — Complete Guide

> A structured guide to **Web Technology and Web Development**, covering frontend, backend, databases, APIs, data exchange, deployment, graphics, and the complete flow of a web application.

---

## 📚 Table of Contents

* [What is Web Technology?](#-what-is-web-technology)
* [How the Web Works](#-how-the-web-works)
* [Web Development Architecture](#-web-development-architecture)
* [Frontend Development](#-frontend-development)

  * [HTML](#1-html)
  * [CSS](#2-css)
  * [JavaScript](#3-javascript)
* [Backend Development](#-backend-development)
* [Server-Side Programming Languages](#-server-side-programming-languages)
* [Databases](#-databases)

  * [SQL Databases](#sql-relational-databases)
  * [NoSQL Databases](#nosql-databases)
* [APIs](#-apis)
* [Data Exchange Formats](#-data-exchange-formats)

  * [JSON](#json)
  * [XML](#xml)
* [Version Control](#-version-control)
* [Deployment](#-deployment)
* [Graphics on the Web](#-graphics-on-the-web)

  * [Canvas](#canvas)
  * [SVG](#svg)
* [Frontend vs Backend](#-frontend-vs-backend)
* [Complete Web Request Flow](#-complete-web-request-flow)
* [Modern Web Technology Stack](#-modern-web-technology-stack)
* [Learning Roadmap](#-web-development-learning-roadmap)
* [Important Concepts](#-important-concepts)
* [Conclusion](#-conclusion)

---

# 🌐 What is Web Technology?

**Web Technology** refers to the collection of technologies, languages, protocols, tools, frameworks, and systems used to create and operate websites and web applications.

Examples include:

* HTML
* CSS
* JavaScript
* TypeScript
* React
* Next.js
* Node.js
* Express.js
* NestJS
* PHP
* Python
* Django
* MongoDB
* MySQL
* PostgreSQL
* Redis
* REST APIs
* GraphQL
* JSON
* HTTP/HTTPS
* Git
* Docker
* Cloud platforms

Web development can broadly be divided into:

```text
                 WEB DEVELOPMENT
                       │
             ┌─────────┴─────────┐
             │                   │
        FRONTEND              BACKEND
             │                   │
       Browser/UI           Server/Logic
             │                   │
      HTML/CSS/JS          APIs/Database
```

---

# 🔄 How the Web Works

When you open a website, several components communicate with each other.

### Basic flow

```text
┌──────────────┐
│     User     │
└──────┬───────┘
       │
       │ Request
       ▼
┌──────────────┐
│   Browser    │
│ Chrome/Firefox│
└──────┬───────┘
       │
       │ HTTP/HTTPS
       ▼
┌──────────────┐
│ Web Server   │
└──────┬───────┘
       │
       │ Business Logic
       ▼
┌──────────────┐
│   Database   │
└──────┬───────┘
       │
       │ Data
       ▼
┌──────────────┐
│ Web Server   │
└──────┬───────┘
       │
       │ Response
       ▼
┌──────────────┐
│   Browser    │
└──────────────┘
```

For example:

```text
User
 │
 │ GET /products
 ▼
Next.js / React
 │
 │ API Request
 ▼
NestJS Backend
 │
 │ Database Query
 ▼
MongoDB
 │
 │ Products
 ▼
NestJS
 │
 │ JSON Response
 ▼
Next.js
 │
 ▼
Browser
```

The GeeksforGeeks overview describes this basic flow as the browser sending a request to the server, the server processing it and potentially accessing a database, and then returning a response to the browser.

---

# 🏗️ Web Development Architecture

A typical modern web application looks like this:

```text
                    INTERNET
                       │
                       ▼
                ┌─────────────┐
                │   Browser   │
                └──────┬──────┘
                       │
                    HTTPS
                       │
                       ▼
              ┌─────────────────┐
              │    Frontend     │
              │ React / Next.js │
              └────────┬────────┘
                       │
                    REST API
                       │
                       ▼
              ┌─────────────────┐
              │     Backend     │
              │ Node/NestJS     │
              └────────┬────────┘
                       │
             ┌─────────┼─────────┐
             │         │         │
             ▼         ▼         ▼
         Database    Redis     External
         MongoDB     Cache      APIs
```

---

# 🎨 Frontend Development

Frontend development deals with everything that users see and interact with in the browser.

The three fundamental technologies are:

```text
HTML
 │
 └── Structure

CSS
 │
 └── Presentation / Styling

JavaScript
 │
 └── Behaviour / Interaction
```

GeeksforGeeks describes HTML as the structure/content layer, CSS as the styling layer, and JavaScript as the layer that adds interactivity.

---

# 1. HTML

## What is HTML?

**HTML = HyperText Markup Language**

HTML is used to create the structure of a webpage.

Example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>

<body>

    <h1>Hello World</h1>

    <p>This is my website.</p>

    <button>Click Me</button>

</body>
</html>
```

### HTML provides

* Headings
* Paragraphs
* Links
* Images
* Tables
* Forms
* Buttons
* Lists
* Audio
* Video
* Semantic structure

### Common HTML elements

```html
<h1>Heading</h1>

<p>Paragraph</p>

<a href="https://example.com">Link</a>

<img src="image.jpg" alt="Example">

<button>Click</button>

<input type="text">

<form>
    ...
</form>
```

### Semantic HTML

Semantic elements describe their purpose.

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Semantic HTML improves:

* Accessibility
* SEO
* Code readability
* Maintainability

---

# 2. CSS

## What is CSS?

**CSS = Cascading Style Sheets**

CSS controls how HTML elements look.

Example:

```css
body {
    font-family: Arial;
}

h1 {
    font-size: 40px;
}

button {
    padding: 10px 20px;
}
```

CSS controls:

* Colors
* Fonts
* Spacing
* Borders
* Layout
* Animation
* Responsive design
* Positioning

---

## CSS Layout

Important layout systems:

### Flexbox

Used primarily for one-dimensional layouts.

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Grid

Useful for two-dimensional layouts.

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

---

## Responsive Design

A responsive website works on different screen sizes.

```text
Desktop
┌─────────────────────────────┐
│ Header                      │
├─────────┬─────────┬─────────┤
│ Card    │ Card    │ Card    │
└─────────┴─────────┴─────────┘


Mobile
┌──────────────┐
│ Header       │
├──────────────┤
│ Card         │
├──────────────┤
│ Card         │
├──────────────┤
│ Card         │
└──────────────┘
```

CSS media query:

```css
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
}
```

---

# 3. JavaScript

## What is JavaScript?

JavaScript is a programming language used to add behaviour and interactivity to web pages.

Example:

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("Button clicked!");
});
```

JavaScript can handle:

* Events
* DOM manipulation
* API requests
* Form validation
* Animations
* Browser storage
* Asynchronous programming
* WebSockets
* Dynamic UI

---

# 🧩 DOM

**DOM = Document Object Model**

The browser converts HTML into a tree-like structure.

```text
             document
                │
              html
             /    \
          head     body
                    │
             ┌──────┼──────┐
             │      │      │
            h1      p    button
```

JavaScript can modify this tree.

```javascript
document.querySelector("h1").textContent = "Hello";
```

---

# ⚙️ Backend Development

Backend development handles the server-side part of an application.

It is responsible for:

* Business logic
* Authentication
* Authorization
* Database operations
* API creation
* Data processing
* Security
* Server-side validation
* File processing
* Background jobs

Example:

```text
Frontend
   │
   │ POST /login
   ▼
Backend
   │
   ├── Validate user
   │
   ├── Check password
   │
   ├── Generate JWT
   │
   └── Return response
   │
   ▼
Frontend
```

---

# 🖥️ Server-Side Programming Languages

Common backend languages include:

| Language   | Popular Technologies        |
| ---------- | --------------------------- |
| JavaScript | Node.js, Express.js, NestJS |
| Python     | Django, Flask, FastAPI      |
| PHP        | Laravel, WordPress          |
| Java       | Spring Boot                 |
| C#         | ASP.NET                     |
| Ruby       | Ruby on Rails               |
| Go         | Gin, Fiber, net/http        |

The GFG Web Technology overview specifically lists JavaScript/Node.js, PHP, Python, Ruby, Java, Go, and C# among server-side technologies.

---

# 🟢 Node.js

Node.js allows JavaScript to run outside the browser.

Example:

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello Server");
});

server.listen(3000);
```

Node.js is commonly used for:

* REST APIs
* Real-time applications
* Microservices
* Backend applications
* CLI tools
* Streaming applications

---

# 🟣 NestJS

NestJS is a Node.js backend framework built with TypeScript.

Typical architecture:

```text
NestJS
  │
  ├── Controller
  │
  ├── Service
  │
  ├── Module
  │
  ├── Guard
  │
  ├── Middleware
  │
  └── Repository / Database
```

Example:

```typescript
@Controller("users")
export class UsersController {

    @Get()
    findAll() {
        return "All users";
    }
}
```

---

# 🗄️ Databases

A database stores and manages application data.

Examples:

```text
Users
Products
Orders
Payments
Messages
Transactions
```

The main categories are:

```text
                 DATABASE
                    │
             ┌──────┴──────┐
             │             │
            SQL          NoSQL
             │             │
        Tables/Rows     Documents
```

---

# SQL / Relational Databases

Relational databases store information using tables containing rows and columns.

Examples:

* MySQL
* PostgreSQL
* SQL Server
* Oracle

Example:

```text
Users

┌────┬──────────┬─────────────────┐
│ ID │ Name     │ Email           │
├────┼──────────┼─────────────────┤
│ 1  │ Love     │ love@example.com│
│ 2  │ Rahul    │ rahul@example.com│
└────┴──────────┴─────────────────┘
```

Example SQL:

```sql
SELECT *
FROM users
WHERE id = 1;
```

---

# NoSQL Databases

NoSQL databases don't necessarily use traditional relational tables.

Examples:

* MongoDB
* Cassandra
* Redis

MongoDB stores data as documents.

Example:

```json
{
    "_id": 1,
    "name": "Love",
    "email": "love@example.com"
}
```

The GFG overview describes MongoDB as a document-based NoSQL database, Cassandra as a scalable database, and Redis as an in-memory database commonly used for caching and real-time applications.

---

# ⚡ Redis

Redis is an in-memory data store.

Common uses:

```text
Redis
 │
 ├── Caching
 ├── Sessions
 ├── Rate limiting
 ├── Pub/Sub
 ├── Queues
 └── Real-time applications
```

Example:

```text
Request
   │
   ▼
Redis Cache
   │
   ├── Data exists → Return data
   │
   └── Data missing
            │
            ▼
         Database
```

---

# 🔌 APIs

**API = Application Programming Interface**

An API allows different software components to communicate.

Example:

```text
React / Next.js
       │
       │ GET /api/users
       ▼
     API
       │
       ▼
    Backend
       │
       ▼
   Database
```

---

# REST API

A REST API commonly uses HTTP methods.

| Method | Purpose |
| ------ | ------- |
| GET    | Read    |
| POST   | Create  |
| PUT    | Replace |
| PATCH  | Update  |
| DELETE | Delete  |

Example:

```http
GET /users
```

```http
POST /users
```

```http
PATCH /users/10
```

```http
DELETE /users/10
```

---

# HTTP Status Codes

Common status codes:

```text
200 OK
201 Created
204 No Content

400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Entity

500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
```

---

# 📦 Data Exchange Formats

Applications need standardized formats to exchange data.

Two important formats are:

* JSON
* XML

GeeksforGeeks identifies JSON and XML as common data-exchange formats used in web development.

---

# JSON

**JSON = JavaScript Object Notation**

Example:

```json
{
    "id": 1,
    "name": "Love",
    "age": 25,
    "skills": [
        "JavaScript",
        "React",
        "Node.js"
    ]
}
```

JSON is widely used by REST APIs.

Example response:

```json
{
    "success": true,
    "data": {
        "id": 101,
        "name": "John"
    }
}
```

---

# XML

**XML = Extensible Markup Language**

Example:

```xml
<user>
    <id>1</id>
    <name>Love</name>
    <email>love@example.com</email>
</user>
```

XML is older than JSON in many web API use cases but remains important in areas such as enterprise integrations and certain legacy systems.

---

# 🔀 JSON vs XML

| Feature                | JSON            | XML                        |
| ---------------------- | --------------- | -------------------------- |
| Syntax                 | Lightweight     | More verbose               |
| Readability            | Easy            | Relatively verbose         |
| Data representation    | Objects/arrays  | Elements/attributes        |
| Common API usage       | Very common     | Common in specific systems |
| File size              | Usually smaller | Usually larger             |
| JavaScript integration | Excellent       | Requires parsing           |

---

# 🔐 HTTPS

**HTTPS = HTTP Secure**

HTTPS encrypts communication between the browser and server.

```text
HTTP

Browser ──────────────── Server
          Plain traffic


HTTPS

Browser ════════════════ Server
          Encrypted
```

HTTPS helps protect data such as:

* Passwords
* Authentication tokens
* Payment information
* Personal information

---

# 📦 Version Control

Version control tracks changes in your source code.

The most common system is:

**Git**

Example:

```bash
git init

git add .

git commit -m "Initial commit"

git push origin main
```

---

# 🌿 Git Workflow

```text
Working Directory
       │
       │ git add
       ▼
Staging Area
       │
       │ git commit
       ▼
Local Repository
       │
       │ git push
       ▼
Remote Repository
       │
       ▼
GitHub
```

Version control is important for:

* Collaboration
* History
* Branching
* Code reviews
* Rollbacks
* Releases

---

# 🚀 Deployment

Deployment means making an application available to users.

Typical workflow:

```text
Developer
   │
   ▼
GitHub
   │
   ▼
CI/CD
   │
   ▼
Build
   │
   ▼
Test
   │
   ▼
Deploy
   │
   ▼
Production
```

Common deployment technologies:

* Docker
* Kubernetes
* GitHub Actions
* AWS
* Azure
* Google Cloud
* Vercel
* Netlify
* Cloudflare

---

# 🐳 Docker

Docker packages an application with its dependencies.

```text
Docker Container
┌──────────────────────┐
│ Application          │
│ Node.js              │
│ Dependencies         │
│ Configuration        │
└──────────────────────┘
```

Example:

```bash
docker build -t my-app .
docker run -p 3000:3000 my-app
```

---

# ☸️ Kubernetes

Kubernetes manages containers at scale.

It can handle:

* Container orchestration
* Scaling
* Service discovery
* Load balancing
* Deployment
* Self-healing

Architecture:

```text
             Kubernetes Cluster
                    │
        ┌───────────┼───────────┐
        │           │           │
      Pod         Pod          Pod
        │           │           │
      App         App          App
```

---

# 🎨 Graphics on the Web

Graphics make websites more interactive and visually appealing.

Two important technologies are:

* Canvas
* SVG

The GFG page identifies Canvas and SVG as major web graphics technologies.

---

# 🖌️ Canvas

HTML Canvas provides a drawing area that can be controlled using JavaScript.

Example:

```html
<canvas id="canvas"></canvas>
```

JavaScript:

```javascript
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";

ctx.fillRect(20, 20, 150, 100);
```

Canvas is useful for:

* Games
* Charts
* Animations
* Image manipulation
* Drawing applications

---

# 📐 SVG

**SVG = Scalable Vector Graphics**

SVG uses XML-based markup to describe vector graphics.

Example:

```html
<svg width="200" height="200">

    <circle
        cx="100"
        cy="100"
        r="50"
        fill="blue"
    />

</svg>
```

SVG is useful for:

* Icons
* Logos
* Charts
* Diagrams
* Illustrations

---

# 🆚 Canvas vs SVG

| Feature      | Canvas                                  | SVG                       |
| ------------ | --------------------------------------- | ------------------------- |
| Type         | Raster-like drawing surface             | Vector                    |
| DOM elements | No individual drawing elements          | Yes                       |
| Scalability  | Can lose quality when treated as pixels | Scales without pixelation |
| Best for     | Games, pixel-heavy graphics             | Icons, diagrams, charts   |
| JavaScript   | Commonly required                       | Optional for basic markup |

---

# 🖥️ Frontend vs Backend

| Frontend               | Backend             |
| ---------------------- | ------------------- |
| Runs mainly in browser | Runs on server      |
| User interface         | Business logic      |
| HTML                   | Node.js             |
| CSS                    | NestJS              |
| JavaScript             | Django              |
| React                  | Spring Boot         |
| Next.js                | Laravel             |
| Form interactions      | Database operations |
| UI validation          | Server validation   |

---

# 🔥 Full-Stack Development

A full-stack developer works across both frontend and backend.

Example stack:

```text
                  FULL STACK
                      │
        ┌─────────────┴─────────────┐
        │                           │
     FRONTEND                    BACKEND
        │                           │
    Next.js                       NestJS
        │                           │
    React                        Node.js
        │                           │
    TypeScript                  TypeScript
        │                           │
        └──────────────┬────────────┘
                       │
                   DATABASE
                       │
                ┌──────┴──────┐
                │             │
             MongoDB        Redis
```

---

# 🔄 Complete Web Request Flow

Consider:

```text
GET /products
```

The complete flow could look like:

```text
1. User opens website
          │
          ▼
2. Browser loads frontend
          │
          ▼
3. React/Next.js renders UI
          │
          ▼
4. Frontend sends API request
          │
          ▼
5. Backend receives request
          │
          ▼
6. Authentication/authorization
          │
          ▼
7. Controller receives request
          │
          ▼
8. Service executes business logic
          │
          ▼
9. Database query
          │
          ▼
10. Database returns data
          │
          ▼
11. Backend creates JSON response
          │
          ▼
12. Frontend receives response
          │
          ▼
13. UI updates
          │
          ▼
14. User sees products
```

---

# 🧱 Modern Web Technology Stack

A modern full-stack application might use:

```text
                    USERS
                      │
                      ▼
                 Cloudflare
                      │
                      ▼
                Load Balancer
                      │
             ┌────────┴────────┐
             │                 │
             ▼                 ▼
          Next.js           Next.js
          Frontend          Frontend
             │                 │
             └────────┬────────┘
                      │
                    API
                      │
                      ▼
                   NestJS
                      │
        ┌─────────────┼─────────────┐
        │             │             │
        ▼             ▼             ▼
    MongoDB         Redis        Elasticsearch
        │             │             │
        └─────────────┼─────────────┘
                      │
                      ▼
                  AI Service
                   Python
```

---

# 🧠 Important Web Technologies

## Frontend

```text
HTML
CSS
JavaScript
TypeScript
React
Next.js
Angular
Vue
```

## Backend

```text
Node.js
Express.js
NestJS
Django
Flask
FastAPI
Spring Boot
Laravel
ASP.NET
```

## Databases

```text
MySQL
PostgreSQL
MongoDB
Redis
Cassandra
Oracle
SQL Server
```

## Communication

```text
HTTP
HTTPS
REST
GraphQL
WebSocket
SSE
```

## DevOps

```text
Git
GitHub
Docker
Kubernetes
CI/CD
AWS
Azure
GCP
```

---

# 🧭 Web Development Learning Roadmap

If you are learning web development from **beginner → advanced**, follow this order.

## Phase 1 — Web Fundamentals

Learn:

```text
Internet
   ↓
WWW
   ↓
Browser
   ↓
HTTP / HTTPS
   ↓
DNS
   ↓
Client / Server
```

---

## Phase 2 — HTML

Learn:

```text
HTML Basics
   ↓
Elements
   ↓
Attributes
   ↓
Forms
   ↓
Tables
   ↓
Semantic HTML
   ↓
Accessibility
   ↓
SEO
```

---

## Phase 3 — CSS

Learn:

```text
Selectors
   ↓
Box Model
   ↓
Display
   ↓
Position
   ↓
Flexbox
   ↓
Grid
   ↓
Responsive Design
   ↓
Animations
   ↓
Advanced CSS
```

---

## Phase 4 — JavaScript

Learn:

```text
Variables
   ↓
Data Types
   ↓
Functions
   ↓
Arrays
   ↓
Objects
   ↓
DOM
   ↓
Events
   ↓
ES6+
   ↓
Promises
   ↓
Async/Await
   ↓
Fetch API
   ↓
Event Loop
   ↓
Closures
   ↓
Advanced JavaScript
```

---

## Phase 5 — Git

Learn:

```text
Git
 ↓
GitHub
 ↓
Branches
 ↓
Merge
 ↓
Pull Request
 ↓
Code Review
 ↓
CI/CD
```

---

## Phase 6 — Frontend Framework

Choose one:

```text
React
   │
   └── Next.js
```

or:

```text
Angular
```

or:

```text
Vue
```

For a React-based path:

```text
React
 ↓
Components
 ↓
Props
 ↓
State
 ↓
Hooks
 ↓
Context
 ↓
Routing
 ↓
API Integration
 ↓
Next.js
```

---

# Phase 7 — Backend

For Node.js:

```text
Node.js
   ↓
Express.js
   ↓
REST API
   ↓
Authentication
   ↓
Authorization
   ↓
Database
   ↓
Caching
   ↓
Queues
   ↓
WebSockets
```

For a structured TypeScript backend:

```text
Node.js
   ↓
NestJS
   ↓
Modules
   ↓
Controllers
   ↓
Services
   ↓
Guards
   ↓
Middleware
   ↓
Interceptors
   ↓
Pipes
   ↓
Database
```

---

# Phase 8 — Databases

Learn SQL:

```text
SQL
 ↓
Tables
 ↓
Relationships
 ↓
Primary Keys
 ↓
Foreign Keys
 ↓
Joins
 ↓
Indexes
 ↓
Transactions
 ↓
Query Optimization
```

Then NoSQL:

```text
MongoDB
 ↓
Documents
 ↓
Collections
 ↓
Indexes
 ↓
Aggregation
 ↓
Transactions
 ↓
Replication
```

---

# Phase 9 — Advanced Backend

Learn:

```text
Redis
 ↓
Caching
 ↓
BullMQ
 ↓
Background Jobs
 ↓
WebSockets
 ↓
Message Queues
 ↓
Elasticsearch
 ↓
Microservices
 ↓
Event-Driven Architecture
```

---

# Phase 10 — DevOps

Learn:

```text
Linux
 ↓
Git
 ↓
Docker
 ↓
CI/CD
 ↓
Cloud
 ↓
Reverse Proxy
 ↓
Load Balancer
 ↓
Kubernetes
 ↓
Monitoring
 ↓
Observability
```

---

# 📊 Web Development Skill Map

```text
                    WEB DEVELOPMENT
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
    FRONTEND             BACKEND           DEVOPS
        │                  │                  │
   HTML/CSS/JS         Node/NestJS          Git
        │                  │                Docker
     React              APIs              CI/CD
     Next.js            Auth             Cloud
        │                  │            Kubernetes
        └──────────────────┼──────────────────┘
                           │
                       DATABASE
                           │
                  ┌────────┴────────┐
                  │                 │
                 SQL              NoSQL
                  │                 │
              PostgreSQL         MongoDB
              MySQL              Redis
```

---

# 🔑 Important Concepts to Master

## Browser

Software that requests and renders web resources.

Examples:

* Chrome
* Firefox
* Safari
* Edge

---

## Web Server

A server that receives HTTP requests and returns responses.

Examples:

* Nginx
* Apache
* Node.js server

---

## Client

The system making a request.

Usually:

```text
Browser
Mobile App
Frontend Application
```

---

## Server

The system processing requests.

It can perform:

```text
Authentication
Business Logic
Database Operations
API Processing
```

---

## Database

Stores application information.

```text
Users
Products
Orders
Payments
Messages
```

---

## API

Provides communication between applications.

```text
Frontend ←→ Backend
Backend  ←→ Database
Backend  ←→ Third-party Services
```

---

# 🧩 Important Web Concepts

Before becoming an advanced web developer, understand:

* HTTP
* HTTPS
* DNS
* URL
* Domain
* IP Address
* Browser
* Cookies
* Sessions
* Local Storage
* Session Storage
* CORS
* CSRF
* Authentication
* Authorization
* JWT
* OAuth
* REST
* GraphQL
* WebSockets
* SSE
* CDN
* Caching
* Load Balancing
* Reverse Proxy
* SSL/TLS
* DNS Resolution
* HTTP Headers
* HTTP Methods
* HTTP Status Codes

---

# 🔐 Authentication vs Authorization

### Authentication

> "Who are you?"

Example:

```text
Email + Password
       ↓
    Login
       ↓
    JWT Token
```

### Authorization

> "What are you allowed to do?"

Example:

```text
User
 ├── Read profile
 └── Update profile

Admin
 ├── Read profile
 ├── Update profile
 ├── Delete users
 └── Manage system
```

---

# 🚀 Example Full-Stack Project

A practical project can combine almost everything.

## E-Commerce Application

```text
                    E-COMMERCE
                        │
       ┌────────────────┼────────────────┐
       │                │                │
    Frontend          Backend          Database
       │                │                │
    Next.js           NestJS          MongoDB
       │                │                │
    React             REST API         Redis
       │                │
    Tailwind          JWT
       │                │
       └────────┬───────┘
                │
             Payment
                │
        Third-party API
```

Features:

* User registration
* Login
* JWT authentication
* Product listing
* Search
* Filtering
* Pagination
* Cart
* Orders
* Payments
* Admin dashboard
* Redis caching
* Background jobs
* Email notifications
* Image upload
* API documentation
* Docker deployment

---

# 📚 Recommended Learning Order

```text
HTML
 ↓
CSS
 ↓
JavaScript
 ↓
Git/GitHub
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
REST APIs
 ↓
MongoDB
 ↓
SQL
 ↓
Redis
 ↓
Authentication
 ↓
WebSockets
 ↓
Docker
 ↓
CI/CD
 ↓
Cloud
 ↓
System Design
 ↓
Microservices
```

---

# 🎯 Beginner → Advanced

| Level             | Topics                                         |
| ----------------- | ---------------------------------------------- |
| Beginner          | HTML, CSS, Basic JS                            |
| Intermediate      | JavaScript, TypeScript, React                  |
| Advanced Frontend | Next.js, Performance, SSR, SEO                 |
| Backend           | Node.js, Express/NestJS                        |
| Database          | SQL, MongoDB, Redis                            |
| Advanced Backend  | Queues, WebSockets, Elasticsearch              |
| DevOps            | Docker, CI/CD, Cloud                           |
| Architecture      | System Design, Microservices                   |
| Advanced          | Distributed Systems, Kubernetes, Observability |

---

# 🌟 Key Takeaways

Web development is not just HTML, CSS, and JavaScript.

A complete web application usually contains multiple layers:

```text
┌─────────────────────────────┐
│          Browser            │
├─────────────────────────────┤
│          Frontend           │
│     HTML / CSS / React      │
├─────────────────────────────┤
│             API             │
├─────────────────────────────┤
│           Backend           │
│       Node / NestJS         │
├─────────────────────────────┤
│        Cache / Queue        │
│       Redis / BullMQ        │
├─────────────────────────────┤
│          Database           │
│    PostgreSQL / MongoDB     │
├─────────────────────────────┤
│       Infrastructure        │
│ Docker / Cloud / Kubernetes │
└─────────────────────────────┘
```

The most important foundation is:

```text
HTML
  +
CSS
  +
JavaScript
  ↓
Frontend

Backend
  +
API
  +
Database
  ↓
Full-Stack Application
```

---

# 📖 Useful References

* [GeeksforGeeks Web Technology](https://www.geeksforgeeks.org/web-tech/web-technology/)
* [HTML](https://www.geeksforgeeks.org/html/)
* [CSS](https://www.geeksforgeeks.org/css/)
* [JavaScript](https://www.geeksforgeeks.org/javascript/)
* [React](https://www.geeksforgeeks.org/reactjs/)
* [Next.js](https://www.geeksforgeeks.org/nextjs/)
* [Node.js](https://www.geeksforgeeks.org/nodejs/)
* [Express.js](https://www.geeksforgeeks.org/nodejs/express-js/)
* [MongoDB](https://www.geeksforgeeks.org/mongodb/)
* [SQL](https://www.geeksforgeeks.org/sql/)
* [MySQL](https://www.geeksforgeeks.org/mysql/)
* [Redis](https://www.geeksforgeeks.org/redis/)
* [Web APIs](https://www.geeksforgeeks.org/web-technology/web-api/)
* [TypeScript](https://www.geeksforgeeks.org/typescript/)

---

# 🏁 Conclusion

**Web Technology** is the foundation of modern web applications.

To become a strong full-stack developer, understand how all layers connect:

```text
                    WEB
                     │
        ┌────────────┴────────────┐
        │                         │
     FRONTEND                  BACKEND
        │                         │
   HTML/CSS/JS              Node/NestJS
        │                         │
     React                    REST API
        │                         │
    Next.js                   Database
        │                         │
        └────────────┬────────────┘
                     │
                  DevOps
                     │
            Docker / Cloud / CI/CD
                     │
                  System
                  Design
```

The goal is not to memorize every technology. The goal is to understand **how the browser, frontend, backend, APIs, databases, and infrastructure work together to deliver a complete web application**.
