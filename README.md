# 🧑‍💻 Next.js User Directory Web Application

A full-stack, responsive web application built with **Next.js**, designed to display a directory of users with detailed profile cards, modals, and real-time interactions. This project demonstrates mastery of TypeScript, React component architecture, dynamic routing, and API integration.

---
## 🚀 Project Overview

This application features multiple interactive pages for displaying and managing posts and users, sourced from the JSONPlaceholder API. It showcases key concepts in building dynamic, scalable, and type-safe front-end applications using Next.js.

---

🎯 Learning Objectives
By completing this project, you will gain hands-on experience in:

⚙️ Setting up a Next.js project with TypeScript, Tailwind CSS, and ESLint

🔀 Implementing dynamic page routing and client-side navigation

🧱 Creating reusable, type-safe React components

📡 Integrating external RESTful APIs

🪟 Implementing modals for user interaction and content creation

📄 Leveraging Static Site Generation with getStaticProps

🧠 Managing state using React Hooks

📁 Structuring projects following domain-driven design

📱 Building fully responsive UIs with Tailwind CSS

## 🧑‍💻 Tech Stack
Framework: Next.js (latest)

Language: TypeScript

Styling: Tailwind CSS

API: JSONPlaceholder

Tooling: ESLint, Prettier (optional)

## ⚙️ Requirements
✅ Technical
Node.js v16 or higher

npm or yarn

Modern browser

✅ Functional
Initialize a Next.js project with TypeScript & Tailwind

Create pages for Home, Posts, and Users

Fetch and display data from the API

Enable user interaction via modal forms

Ensure responsive, accessible design

## 🚀 Features

- ⚡ **Next.js 14** with App Router and TypeScript support.
- 💡 **UserCard** component displaying dynamic data: name, company, and address.
- 📁 **Modular Component Architecture** for easy scaling and maintenance.
- 🧩 **Type-Safe Props** using custom interfaces (`UserProps`, `Address`, `Company`).
- 🖼️ **User Modal** for extended user details and future CRUD operations.
- 🎯 **Error Handling** and fallback UI for undefined or missing data.
- 🧭 **Alias Path Support** with `@/` for clean and maintainable imports.
- 🌐 **REST API Integration** for fetching user data via `/posts` or mock endpoints.

---

## 📂 Project Structure
```
.
├── components/
│ └── common/
│ └── UserCard.tsx # Core UI component to display user info
├── interfaces/
│ └── index.ts # TypeScript interfaces for props and models
├── pages/
│ ├── users/
│ │ └── index.tsx # Page to list users
│ └── _app.tsx # Global app setup and imports
├── public/ # Static assets
├── styles/
│ └── globals.css # Global styles
├── tsconfig.json # Alias paths and TS compiler settings
└── README.md
```
---

## 🛠️ Tech Stack

| Technology    | Description                           |
|---------------|---------------------------------------|
| **Next.js**   | React framework for full-stack apps   |
| **TypeScript**| Type safety and interfaces             |
| **Tailwind CSS** | Utility-first styling framework    |
| **React**     | Component-based frontend library       |
| **ESLint**    | Code linting for consistent standards  |
| **Prettier**  | Code formatting                       |

---

## 📦 Installation

**Clone the repository:**

```
git clone https://github.com/yourusername/nextjs-user-directory.git
cd nextjs-user-directory
Install dependencies:

npm install
# or
yarn install
```

## 🏃‍♂️ Running the App
```
npm run dev
# or
yarn dev
Visit http://localhost:3000 in your browser.
```

## 🧪 Testing
Optional: Add test framework if implemented (e.g., Jest, React Testing Library).

## 🔍 Linting & Formatting
```
Run ESLint
npm run lint
```

## Format code with Prettier
```
npm run format
```

## 🧱 Future Improvements
🔒 Add authentication and protected routes

💬 Integrate backend for live CRUD functionality

🌍 Deploy to Vercel for production hosting

🧪 Add unit and integration tests

🧠 Add global state management (e.g., Zustand or Redux)

## 🧑‍🎓 Author
Benedict Tachie
Software Developer | Data Scientist
GitHub | LinkedIn

“In software, clarity is king. Simplicity drives reliability.”
