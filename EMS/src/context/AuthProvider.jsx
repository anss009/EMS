import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utilites/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)
  const [adminData, setAdminData] = useState(null)

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees')
    
    // If employees not in localStorage OR old mock data (missing new emails), re-initialize with fresh mock data
    if (!storedEmployees || !storedEmployees.includes('alex@company.com')) {
      setLocalStorage()
    }

    const { employees, admin } = getLocalStorage()
    setUserData(employees)
    setAdminData(admin)
  }, [])

  const updateUserData = (newEmployees) => {
    setUserData(newEmployees)
    localStorage.setItem('employees', JSON.stringify(newEmployees))
  }

  const updateAdminData = (newAdmins) => {
    setAdminData(newAdmins)
    localStorage.setItem('admin', JSON.stringify(newAdmins))
  }

  return (
    <AuthContext.Provider value={{ userData, setUserData: updateUserData, adminData, setAdminData: updateAdminData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider