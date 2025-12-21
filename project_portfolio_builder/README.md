## ⚠️ Usage & Copyright Notice

This project is part of my **personal developer portfolio builder**.

You are welcome to **view and evaluate** the source code for learning
and recruitment purposes only.

❌ Commercial use is not permitted  
❌ Redistribution without permission is not permitted  

If you are a recruiter or interviewer and would like to discuss
this project in detail, feel free to contact me.

![React](https://img.shields.io/badge/React-18-blue)
![Live%20Preview](https://img.shields.io/badge/Live%20Preview-Yes-green)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen)
![Beginner%20Friendly](https://img.shields.io/badge/Beginner-Friendly-orange)

---

# React Portfolio Website Builder

A **React-based Portfolio Website Builder** that allows users to enter
their personal information and instantly preview a **professional
portfolio website in real time**.

This project focuses on **core React fundamentals** such as component
architecture, props, state management, live preview updates, and
responsive UI design — making it ideal for **freshers and beginners**.

---

## 🌐 Live Demo

🔗 Live Demo: https://project-portfolio-builder.vercel.app/

---

🔄 All updates are reflected **instantly** in the preview.

---

## 👁 Live Preview Panel

<img width="1920" height="1080" alt="Screenshot 2025-12-20 134902" src="https://github.com/user-attachments/assets/d66ff8a6-df95-4b74-b650-352c49d4e37b" />
<img width="1920" height="1080" alt="Screenshot 2025-12-20 134921" src="https://github.com/user-attachments/assets/3637add9-4a01-41b0-9c81-0a19355b5755" />
<img width="1920" height="1080" alt="Screenshot 2025-12-20 134949" src="https://github.com/user-attachments/assets/29782823-37ef-4975-bd14-6809e26a9122" />
<img width="1920" height="1080" alt="Screenshot 2025-12-20 134955" src="https://github.com/user-attachments/assets/c547ead4-698f-43c4-b90f-add8a4998812" />

The **PreviewPanel** renders the complete portfolio layout including:

- Hero Section  
- About Section  
- Skills Section  
- Projects Section  
- Contact Section  

No refresh required — changes update in **real time**.

## ✨ Features

- 🧩 Modular and reusable React components
- ⚡ Real-time portfolio preview (no page reload)
- 📝 Form-based portfolio customization
- 🎨 Clean, modern, professional UI
- 📱 Fully responsive (mobile, tablet, desktop)
- 🧠 Beginner-friendly React codebase
- 🚀 Resume-ready frontend project
- 🧭 SEO-friendly semantic HTML structure

---

## 📁 Project Folder Structure

```plaintext
C:.
│   App.css
│   App.jsx
│   index.css
│   main.jsx
│
├── components
│   └── portfolio
│       ├── AboutSection.css
│       ├── AboutSection.jsx
│       ├── Builder.css
│       ├── Builder.jsx
│       ├── ContactSection.css
│       ├── ContactSection.jsx
│       ├── FormPanel.css
│       ├── FormPanel.jsx
│       ├── HeroSection.css
│       ├── HeroSection.jsx
│       ├── PreviewPanel.css
│       ├── PreviewPanel.jsx
│       ├── ProjectsSection.css
│       ├── ProjectsSection.jsx
│       ├── SkillsSection.css
│       └── SkillsSection.jsx
│
├── data
│   └── dummyData.js
│
└── pages
    ├── Index.jsx
    ├── NotFound.css
    └── NotFound.jsx
```

## 🧠 State Management

- Centralized state handled using React useState

- Portfolio data stored as a single object

- State and update handlers passed via props

- Any form update instantly reflects in the preview panel

- This clearly demonstrates one-way data flow in React.

##📝 Dummy Portfolio Data

- All initial portfolio data is stored separately for clarity:
```
{
  hero: {
    name: "John Doe",
    role: "Frontend Developer"
  },
  about: {
    bio: "A passionate fresher learning React and modern web development."
  },
  skills: ["HTML", "CSS", "JavaScript", "React"],
  projects: [
    {
      title: "Portfolio Builder",
      description: "A live portfolio generator built with React."
    }
  ],
  contact: {
    email: "john@example.com",
    phone: "1234567890"
  }
}
```
## 🖌 Form Panel

- The FormPanel allows users to update:

- Name & professional role

- About / bio section

- Skills list

- Project details

- Contact information

## 🎨 Styling & UI

- Styled using plain CSS

- Clean and modern portfolio layout

- No external UI libraries

- Easy to customize and extend

## 📱 Responsive Design

- Mobile-first design approach

- Fully responsive on:

- Desktop

- Tablet

- Mobile

- Implemented using CSS media queries

## 🧪 Beginner-Friendly Code

- Simple functional components

- Clean folder structure

- Meaningful variable and component names

- Well-commented code

- No advanced or confusing patterns

## 🎯 Purpose of This Project

**This project was built to:**

- Showcase frontend development skills

- Demonstrate React fundamentals

- Practice props and state management

- Build a live preview-based application

- Create a professional, recruiter-friendly project

## 🛠 Tech Stack

- Frontend: React, JavaScript (JSX)

- Styling: CSS

- State Management: React useState

- Icons: React Icons

## 🚀 Getting Started
Prerequisites

- Node.js (v18 or higher)
```
npm or yarn
```
**Installation**
```
npm install
```
**Run Development Server**
```
npm start
```

## Open in browser:
-  http://localhost:3000

## 🧩 Customization Guide

- Update default data in dummyData.js

Modify section components to change layout or content

Customize styles in the component CSS files

Easily add new sections such as Experience or Education

## 🚀 Deployment

**This project can be deployed using:**

- Vercel (Recommended)

- Netlify

- GitHub Pages

## 📈 Resume Value

**This project demonstrates:**

- React component architecture

- Props and state handling

- Real-time UI updates

- Responsive web design

- Clean, maintainable frontend code

# 💼 A strong addition to any frontend developer portfolio.

**📬 Contact**

- GitHub: https://github.com/faizangit123

- LinkedIn: https://www.linkedin.com/in/md-faizan-97705b348/

- Email: faizanrock705@gmail.com

**Made with ❤️ by Faizan**

