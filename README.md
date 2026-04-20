# 📋 EMS — Employee Management System

A modern, role-based **Employee Management System** built with React and Vite. It provides a clean admin interface for creating and assigning tasks to employees, and a personal dashboard for each employee to manage and track their own tasks.

---

## 🚀 Live Demo

> Run locally with `npm run dev` — see [Getting Started](#-getting-started) below.

---

## ✨ Features

### 🔐 Authentication
- Elegant dark-themed login page with glassmorphism card design
- Role-based access control: **Admin** and **Employee** roles
- Show/hide password toggle
- Persistent session via `localStorage`

### 🛠️ Admin Dashboard
- **Create Tasks** — assign tasks to any employee by name, with title, description, category, and due date
- **View All Tasks** — see every task across all employees in a consolidated list
- **Task Stats** — live count of new, active, completed, and failed tasks per employee

### 👤 Employee Dashboard
- Personal task list filtered to the logged-in employee
- Task status cards: **New**, **Active**, **Completed**, **Failed**
- Accept tasks to mark them as active
- Mark tasks as completed or failed
- Task count summary displayed prominently

### 💾 Data Persistence
- All employee and task data is stored and synced with `localStorage`
- No backend required — fully client-side

---

## 🖼️ Screenshots

| Login | Admin Dashboard | Employee Dashboard |
|---|---|---|
| Dark glassmorphism login card | Task creation form + all tasks list | Personal task cards with status filters |

---

## 🗂️ Project Structure

```
EMS/
├── public/
└── src/
    ├── components/
    │   ├── Auth/
    │   │   └── Login.jsx          # Login page UI & logic
    │   ├── Dashboard/
    │   │   ├── AdminDashboard.jsx  # Admin layout
    │   │   └── EmployeeDashboard.jsx # Employee layout
    │   ├── TaskList/
    │   │   ├── TaskList.jsx        # Main task list container
    │   │   ├── NewTask.jsx         # New task card
    │   │   ├── AcceptedTask.jsx    # Active/accepted task card
    │   │   ├── CompletedTask.jsx   # Completed task card
    │   │   └── FailedTask.jsx      # Failed task card
    │   └── Other/
    │       ├── CreateTask.jsx      # Admin task creation form
    │       ├── AllTask.jsx         # Admin all-tasks view
    │       ├── Header.jsx          # Top navigation/header
    │       └── TaskListNumber.jsx  # Task count summary
    ├── context/
    │   └── AuthProvider.jsx        # React Context for employee data
    ├── utilites/
    │   └── LocalStorage.jsx        # Seed data + localStorage helpers
    ├── App.jsx                     # Root component & routing logic
    ├── main.jsx                    # Entry point
    └── index.css                   # Global styles
```

---

## 🧑‍💼 Demo Credentials

### Admin
| Field    | Value                  |
|----------|------------------------|
| Email    | `admin@company.com`    |
| Password | `112233`               |

### Employees

| Name    | Email                      | Password |
|---------|----------------------------|----------|
| Arjun   | `e@e.com`                  | `123`    |
| Bilal   | `employee2@company.com`    | `112233` |
| Hamza   | `employee3@company.com`    | `112233` |
| Mustafa | `employee4@company.com`    | `112233` |
| Zeeshan | `employee5@company.com`    | `112233` |

---

## 🛠️ Tech Stack

| Technology       | Purpose                          |
|------------------|----------------------------------|
| React 19         | UI framework                     |
| Vite 6           | Build tool & dev server          |
| Tailwind CSS 4   | Utility-first styling            |
| React Context    | Global state management          |
| localStorage     | Client-side data persistence      |
| ESLint           | Code linting                     |

---

## ⚡ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/EMS.git

# 2. Navigate to the project folder
cd EMS/EMS

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**.

### Other Scripts

```bash
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint checks
```

---

## 📝 How It Works

1. **On first load**, seed data (5 employees with pre-assigned tasks) is written to `localStorage`.
2. **Admin** logs in and can create new tasks — choosing a title, description, due date, category, and the employee to assign the task to.
3. **Employees** log in and see only their own tasks, grouped by status (New, Active, Completed, Failed).
4. Employees can interact with tasks: accept new ones, and mark them as complete or failed.
5. All changes are persisted immediately to `localStorage`.

---

---

<p align="center">Built with ❤️ using React + Vite</p>
