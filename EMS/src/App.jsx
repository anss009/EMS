import React, { useContext, useState } from 'react'
import { Login } from './components/Auth/Login'
import { EmployeeDashboard } from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from './utilites/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  // useEffect(()=>{
  //     setLocalStorage()
  //     getLocalStorage()
  // },)


    const [user, setUser] = useState(null)

    const handleLogin = (email, password)=>{
      if(email =="admin@company.com"  && password  == '112233'){
        setUser('admin')
        console.log(user)
      }else if (email == "employee5@company.com" && password == 112233){
        setUser('Employee')
        console.log(user) 
      }
      else{
        alert("Invalid Crendential")
      }
  }


  const data = useContext(AuthContext)
  console.log(data)
  return (
    <>
    {!user ? <Login handleLogin = {handleLogin} />: ''}
    {user  == 'admin' ? <AdminDashboard/>: <EmployeeDashboard/>}
    {/* <EmployeeDashboard/>  */}
    {/* <AdminDashboard/>  */}
    </>
  )
}

export default App
