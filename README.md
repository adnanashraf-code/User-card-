# 🚀 User Card Creator

A dynamic User Card Creator built using **HTML, CSS, and Vanilla
JavaScript**.

This project allows users to create profile cards in real time using a
form input system. It demonstrates clean DOM manipulation, structured UI
rendering, and responsive layout design.

------------------------------------------------------------------------

## 📸 Overview

A responsive interface that allows users to:

-   Add new user profiles via form
-   Dynamically generate user cards
-   Display name, role, bio, and profile image
-   Render cards instantly without page reload

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   HTML5
-   CSS3 (Flexbox / Grid)
-   Vanilla JavaScript (ES6)
-   No frameworks
-   No external libraries

------------------------------------------------------------------------

## ⚙️ Features

### 📝 Dynamic Form Handling

-   Captures user input
-   Prevents default form reload
-   Extracts values using JavaScript
-   Validates required fields

------------------------------------------------------------------------

### 🧩 Real Time Card Rendering

Cards are generated dynamically using:

-   createElement()
-   DOM manipulation
-   Template structure
-   Append to card container

No static HTML cards are used.

------------------------------------------------------------------------

### 📱 Responsive Layout

Cards are displayed using CSS Grid:

``` css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

Automatically adjusts for:

-   Mobile
-   Tablet
-   Desktop

------------------------------------------------------------------------

### 🎨 Clean UI Design

-   Structured form layout
-   Modern card styling
-   Organized spacing
-   Shadow and border-radius usage
-   Responsive container system

------------------------------------------------------------------------

## 🧠 Concepts Demonstrated

-   DOM Manipulation
-   Event Handling
-   Form Validation
-   Dynamic UI Rendering
-   State based UI updates
-   Separation of structure and logic

------------------------------------------------------------------------

## 📂 Project Structure

    📦 user-card-creator
     ┣ 📜 index.html
     ┣ 📜 style.css
     ┗ 📜 script.js

------------------------------------------------------------------------

## 🔄 How It Works

1.  User fills the form
2.  Form submit event triggers JavaScript
3.  Prevents page reload using event.preventDefault()
4.  Creates a new card dynamically
5.  Appends the card to the grid container
6.  Clears form fields after submission

------------------------------------------------------------------------

## 🚀 How To Run

1.  Clone the repository
2.  Open index.html in your browser

No installation required.

------------------------------------------------------------------------

## 📈 Future Improvements

-   Add delete button for cards
-   Add edit functionality
-   Add image validation
-   Store users in LocalStorage
-   Add animation when card appears
-   Convert into reusable component pattern

------------------------------------------------------------------------

## 💡 Learning Outcome

This project strengthens understanding of:

-   How forms interact with JavaScript
-   How dynamic UI systems are built
-   How to manage DOM efficiently
-   How frontend components are structured

------------------------------------------------------------------------

## 👨‍💻 Author

**Adnan Ashraf**

Frontend Developer building interactive and scalable web interfaces 🚀
