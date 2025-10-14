# 📝 ToDoList — Project & Task Manager

A clean and intuitive **React.js** application for managing projects and tasks.  
Each project includes its own title, description, due date, and a list of individual tasks that can be added or removed dynamically.

---

<h3 align="center">📸 Project Preview</h3>

<p align="center">
  <img src="./src/assets/1.png" alt="Preview 1" width="500"/><br/>
  
</p>

<p align="center">
  <img src="./src/assets/2.png" alt="Preview 2" width="500"/><br/>
  
</p>

<p align="center">
  <img src="./src/assets/3.png" alt="Preview 3" width="500"/><br/>
  
</p>

---

## 🚀 Features

- 📁 Create and delete projects  
- 🗓 Add due dates and descriptions  
- ✅ Add and remove individual tasks per project  
- ⚠️ Input validation with modal pop-up for missing fields  
- 🎨 Smooth UI built with **Tailwind CSS**  
- 🧩 Modular and reusable component architecture  

---

## 🧠 Tech Stack

- **React (useState, useRef, forwardRef, useImperativeHandle)**  
- **Tailwind CSS** — styling and layout  
- **React Portals** — for modal rendering  
- **Vite / Create React App** — build setup  

---

## 📂 Folder Structure

```bash
todolist/
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── NewProject.jsx
│   │   ├── NoProjectSelected.jsx
│   │   ├── ProjectSidebar.jsx
│   │   ├── SelectedProject.jsx
│   │   ├── Tasks.jsx
│   │   └── NewTask.jsx
│   ├── assets/
│   │   └── no-projects.png
│   └── main.jsx
└── index.html
