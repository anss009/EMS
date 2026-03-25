import React from 'react'
import { Login } from './components/Auth/Login'
import { EmployeeDashboard } from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { setLocalStorage } from './utilites/LocalStorage'

const App = () => {
  useEffect(()=>{
      setLocalStorage()
  },)
  return (
    <>
    <Login/>
    {/* <EmployeeDashboard/>  */}
    {/* <AdminDashboard/>  */}
    </>
  )
}

export default App
