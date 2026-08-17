import React, { useContext, useState, useEffect } from 'react'
import { Login } from './components/Auth/Login'
import { EmployeeDashboard } from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage } from './utilites/LocalStorage'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const { userData, setUserData, adminData } = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      try {
        const parsed = JSON.parse(loggedInUser)
        setUser(parsed.role)
        if (parsed.data) {
          setLoggedInUserData(parsed.data)
        }
      } catch (err) {
        localStorage.removeItem('loggedInUser')
      }
    }
  }, [])

  // Keep loggedInUserData in sync with latest userData from context
  useEffect(() => {
    if (user === 'employee' && loggedInUserData && userData) {
      const currentEmp = userData.find((e) => e.email?.toLowerCase() === loggedInUserData.email?.toLowerCase())
      if (currentEmp) {
        setLoggedInUserData(currentEmp)
      }
    }
  }, [userData])

  const handleDirectLogin = (role, data) => {
    setUser(role)
    setLoggedInUserData(data)
    localStorage.setItem('loggedInUser', JSON.stringify({ role, data }))
  }

  const handleLogin = (email, password) => {
    const cleanEmail = (email || '').trim().toLowerCase()
    const cleanPassword = (password || '').trim()

    // 1. Get latest admin and employees from context OR localStorage fallback
    const { employees: storedEmployees, admin: storedAdmins } = getLocalStorage()
    const allAdmins = adminData || storedAdmins || []
    const allEmployees = userData || storedEmployees || []

    // 2. Check Admin credentials
    const foundAdmin = allAdmins.find(
      (a) => a.email?.toLowerCase() === cleanEmail && String(a.password).trim() === cleanPassword
    )
    
    if (foundAdmin || (cleanEmail === 'admin@company.com' && cleanPassword === '112233')) {
      const adminObj = foundAdmin || { firstName: 'Admin', email: 'admin@company.com' }
      setUser('admin')
      setLoggedInUserData(adminObj)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: adminObj }))
      return
    }

    // 3. Check Employee credentials
    const employee = allEmployees.find(
      (e) => e.email?.toLowerCase() === cleanEmail && String(e.password).trim() === cleanPassword
    )

    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      return
    }

    alert(`Invalid Credentials.\n\nTry:\n• Admin: admin@company.com / 112233\n• Employee: alex@company.com / 123`)
  }

  // Dynamic task action handlers for Employee
  const handleTaskStatusChange = (taskIndex, newStatus) => {
    if (!loggedInUserData) return

    const { employees: storedEmployees } = getLocalStorage()
    const currentEmployees = userData || storedEmployees || []

    const updatedEmployees = currentEmployees.map((emp) => {
      if (emp.id === loggedInUserData.id || emp.email?.toLowerCase() === loggedInUserData.email?.toLowerCase()) {
        const updatedTasks = emp.tasks.map((task, idx) => {
          if (idx === taskIndex) {
            if (newStatus === 'active') {
              return { ...task, active: true, newTask: false, completed: false, failed: false }
            }
            if (newStatus === 'completed') {
              return { ...task, active: false, newTask: false, completed: true, failed: false }
            }
            if (newStatus === 'failed') {
              return { ...task, active: false, newTask: false, completed: false, failed: true }
            }
          }
          return task
        })

        // Recompute task counts dynamically
        const taskCounts = {
          newTask: updatedTasks.filter((t) => t.newTask).length,
          active: updatedTasks.filter((t) => t.active).length,
          completed: updatedTasks.filter((t) => t.completed).length,
          failed: updatedTasks.filter((t) => t.failed).length
        }

        const updatedEmp = { ...emp, tasks: updatedTasks, taskCounts }
        setLoggedInUserData(updatedEmp)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmp }))
        return updatedEmp
      }
      return emp
    })

    setUserData(updatedEmployees)
  }

  return (
    <>
      {!user ? (
        <Login
          handleLogin={handleLogin}
          handleDirectLogin={handleDirectLogin}
        />
      ) : null}

      {user === 'admin' ? (
        <AdminDashboard
          changeUser={setUser}
          data={loggedInUserData}
        />
      ) : user === 'employee' ? (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
          onTaskStatusChange={handleTaskStatusChange}
        />
      ) : null}
    </>
  )
}

export default App