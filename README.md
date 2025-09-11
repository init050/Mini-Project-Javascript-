# Todo App - A Mini JavaScript Project

Hello and welcome! This is a neat little to-do list application built with vanilla JavaScript, HTML, and Tailwind CSS. It's a great example of a simple, single-page application (SPA) that packs a lot of features into a clean and modern interface. Think of it as your personal task manager that runs right in your browser.

## What's This Project All About?

This app was created to be a straightforward but powerful tool for managing your daily tasks. It has a responsive dashboard layout, complete with a sidebar for navigation and a main area where all the task magic happens. It's designed to be intuitive and easy to use, whether you're adding a new to-do or just checking off what you've accomplished.

### Core Features

*   **Full CRUD Functionality**: You can **C**reate, **R**ead, **U**pdate, and **D**elete tasks.
*   **Persistent Storage**: Your tasks are saved in your browser's `localStorage`, so you won't lose them when you close the tab.
*   **Task Completion**: Mark tasks as done with a simple click, moving them to a separate "Completed" list.
*   **Priority Tags**: Assign a priority level (Low, Medium, or High) to your tasks, with color-coded tags to help you stay organized.
*   **Theme Switcher**: Easily toggle between a sleek dark mode and a clean light mode. Your preference is saved for your next visit.
*   **Responsive Design**: The app looks great on both desktop and mobile devices.

## Getting It Running

Want to try it out locally? It's super easy to get started, thanks to Vite.

### Prerequisites

*   Node.js and npm (or your favorite package manager)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/init050/Mini-Project-Javascript-.git
    cd Mini-Project-Javascript-Qura
    ```

2.  **Install the dependencies:**

    This will install Vite, Tailwind CSS, and DaisyUI.

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    And that's it! The application should be running at `http://127.0.0.1:5173/` (Vite will tell you the exact port).

## How to Use the App

*   **Adding a Task**: Click the "+ Add a new task" button. A form will appear where you can enter a title and description.
*   **Tagging a Task**: After the form appears, click the "Tags" button to select a priority level.
*   **Completing a Task**: Just click the checkbox next to a task. It will be moved to the "Done" list.
*   **Editing or Deleting**: Hover over a task to find the "Edit" and "Delete" buttons.
*   **Switching Themes**: Use the "Dark" and "Light" buttons in the sidebar to change the theme.

## Technologies Used

*   **JavaScript**: All the logic is powered by vanilla JavaScript (no frameworks!).
*   **HTML & CSS**: The structure and styling of the app.
*   **Vite**: A blazing-fast build tool for modern web development.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **DaisyUI**: A component library for Tailwind CSS that helps build beautiful UIs quickly.

## Ideas for the Future

This app is a solid foundation, but there are always more features that could be added. Here are a few ideas:

*   **Due Dates**: Add a calendar to set due dates for tasks.
*   **Task Filtering**: Allow users to filter tasks by their priority tag.
*   **Backend Integration**: Connect the app to a real database (like Firebase or a simple Node.js/Express backend) to store tasks online and enable user accounts.

Hope you enjoy playing around with this project! It was a fun one to build.
