# Project 2: Data Pagination and Filtering

## 🧾 Overview

This project displays a list of student profiles with pagination and filtering functionalities. It was built as part of the Treehouse Full Stack JavaScript Techdegree and showcases DOM manipulation, dynamic rendering, and event-driven interactivity in vanilla JavaScript.

---

## 📦 Base Project Features (Required)

### ✅ Pagination

- Displays **9 students per page** from a predefined array of student objects.
- Renders pagination buttons dynamically based on the number of students.
- Highlights the active page and updates the displayed students on button click.

### 🔧 Key Functions

#### `showPage(list, page)`

- Accepts a list of students and a page number.
- Calculates the start and end index based on the number of students per page.
- Dynamically injects the corresponding student cards into the page.

#### `addPagination(list)`

- Calculates the number of pages needed using `Math.ceil()`.
- Dynamically creates one button per page.
- Listens for click events on the pagination buttons and updates the active state and visible student cards.

## 🌟 Extra Credit Features

> These additions go beyond the minimum requirements and aim for an "Exceeds Expectations" rating.

### 🔍 Search Bar (Bonus Feature — Not yet implemented in progress)

- A search input and button dynamically inserted into the DOM.
- Filters the list of students by name in real-time using the `keyup` event.
- Displays a message if no match is found.

### 🔁 Pagination for Filtered Results

- Pagination buttons automatically update based on search results.
- Still allows for navigation through filtered student sets.

> These features are planned in the next development phase and will be documented further once implemented.

---

## 🧠 Lessons Learned

- Practical use of `querySelector`, `innerHTML`, `insertAdjacentHTML`
- Managing application state using variables and conditional rendering
- The importance of default behavior for first-time page loads (`showPage(list, 1)`)
- Clear separation of concerns between rendering logic and event listeners

---

## 📁 Files Structure

- `index.html` – Structure of the page
- `css/styles.css` – Predefined styles (provided by Treehouse)
- `js/data.js` – Student list data
- `js/script.js` – Application logic (pagination + display)

---

## 🌐 Deployment

IN COMING

---
