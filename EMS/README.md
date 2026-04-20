# 📊 Employee Management System (EMS)

A modern, high-performance task management application featuring a dual-dashboard system for administrators and employees. Built with **React**, **Tailwind CSS**, and **Context API** for a seamless user experience and persistent data management.

![Project Banner](https://img.shields.io/badge/Status-Complete-emerald?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/React-Vite-blue?style=for-the-badge&logo=react)
![Styling](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## 🚀 Key Features

### 👑 Admin Dashboard
- **Comprehensive Oversight**: View a bird's-eye view of all employees and their current task statuses (New, Active, Completed, Failed).
- **Task Assignment**: Create new tasks and dynamically assign them to specific team members.
- **Real-time Analytics**: Summary cards that update instantly as employees progress through their work.

### 👤 Employee Dashboard
- **Personalized Task List**: A dedicated view for assigned tasks organized by status.
- **Task Lifecycle Management**: Buttons to specifically **Accept**, **Complete**, or **Fail** a task.
- **Statistics Summary**: Real-time counters showing personal performance metrics.

---

## 🛠 Tech Stack

- **Frontend**: [React.js](https://reactjs.org/) + [Vite](https://vitejs.dev/) (Fast HMR)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Modern utility-first styling)
- **State Management**: [Context API](https://react.dev/learn/passing-data-deeply-with-context) (AuthContext)
- **Persistence**: [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) (Ensures data survives page refreshes)

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Auth/           # Login & Authentication logic
│   ├── Dashboard/      # Admin & Employee dashboard layouts
│   ├── Other/          # Reusable components (Header, CreateTask, AllTask)
│   └── TaskList/       # Individual Task status components
├── context/
│   └── AuthProvider.jsx # Global state for user data
├── utilities/
│   └── LocalStorage.jsx # Database initialization & Mock data
└── App.jsx             # Main routing and session logic
```

---

## 📥 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd EMS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in development mode**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 🔐 Credentials (Demo)

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@company.com` | `112233` |
| **Employee** | `e@e.com` | `123` |

---

## 🎨 Design Aesthetics
The application uses a **Glassmorphism-inspired dark theme** with a focus on:
- **High Contrast**: Vivid status colors (Emerald for Success, Sky for New, Crimson for Failure).
- **Responsive Layouts**: Designed to look great on both desktop and mobile screens.
- **Smooth Interaction**: Hover states and clear call-to-action buttons.

---

> [!TIP]
> **Data Persistence**: The app initializes with default employee data (Arjun, Bilal, etc.) if your `localStorage` is empty. You can modify the starting data in `src/utilities/LocalStorage.jsx`.
