import React, { useContext, useState } from 'react'
import { Login } from './components/Auth/Login'
import { EmployeeDashboard } from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage, setLocalStorage } from './utilites/LocalStorage'

const App = () => {
  // useEffect(()=>{
  //     setLocalStorage()
  //     getLocalStorage()
  // },)

  useEffect(()=>{
    setLocalStorage()
},[ ])

    const [user, setUser] = useState(null)
    const authData = useContext(AuthContext)
    



    const handleLogin = (email, password)=>{
      if(email =="admin@company.com"  && password  == '112233'){
        setUser('admin')
      }else if (email == "employee5@company.com" && password == 112233){
        setUser('Employee')
      }
      else{
        alert("Invalid Crendential")
      }
  }


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