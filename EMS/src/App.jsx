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
    console.log(authData)

    useEffect(()=>{
        const loggedInUser = localStorage.getItem('loggedInUser')
        if(loggedInUser){
          setUser(loggedInUser)
          if(loggedInUser){
            setUser(loggedInUser.role)
          }
        } 
    },[])


    const handleLogin = (email, password)=>{
      if(email =="admin@company.com"  && password  == '112233'){
        setUser({role:'admin'})
        localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
      }else if (authData){
        const employee  = authData.employees.find((e)=> e.email == email && e.password == password) 
        if(employee)
        setUser({role:'Employee'})
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
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