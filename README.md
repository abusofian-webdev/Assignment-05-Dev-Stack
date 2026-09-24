# Dev Stack

Dev Stack is a responsive React application for exploring popular web development technologies and building a personal technology stack with an interactive UI.

## Live Site

[View Live Site...](assign-05-dev-stack.netlify.app)

## Technologies Used
* React
* Tailwind CSS / DaisyUI
* JavaScript (ES6+)
* React-Toastify
* JSON
* Vite

## Key Features
* **Browse Tech Stack:** View and explore various web technologies loaded dynamically from a JSON dataset.
* **Interactive Selection:** Easily add technologies to your personal stack or remove them with real-time toast notifications.
* **Filter & Search:** Quick search and category filter options to easily find relevant development tools.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?
JSX is a syntax extension for JavaScript that lets us write HTML-like elements inside JavaScript files. It makes writing React components much easier and keeps the structure and logic together.

### 2. What is the difference between props and state?
* **Props:** Data passed into a component from its parent (read-only).
* **State:** Data managed internally within a component that can change over time and cause re-rendering.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` allows functional components to store and manage dynamic state. In this project, I used it to track selected technology items, search inputs, and mobile menu states.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` handles side effects in components. I used it to fetch the technology data from the JSON file once when the page initially loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
A unique `key` helps React identify which items have changed, been added, or removed, allowing it to efficiently update only the necessary parts of the DOM.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying different UI elements based on certain conditions. For example, I used it to show an "Empty Stack" message when no items are added to the stack sidebar.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
* **Parent to Child:** Passed directly using **props**.
* **Child to Parent:** The parent passes a **callback function** as a prop, which the child calls to send data back.