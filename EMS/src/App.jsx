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
    const [loggedInUserData, setloggedInUserData] = useState(null)
    const authData = useContext(AuthContext)

    // useEffect(()=>{
    //     const loggedInUser = localStorage.getItem('loggedInUser')
    //     if(loggedInUser){
    //       setUser(loggedInUser)
    //       if(loggedInUser){
    //         setUser(loggedInUser.role)
    //       }
    //     } 
    // },[])


useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
  
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setloggedInUserData(userData.data)
  }
},[])

    const handleLogin = (email, password)=>{
      if(email =="admin@company.com"  && password  == '112233'){
        setUser('admin')
        localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
      }else if (authData){
        const employee = authData.employees.find((e)=> e.email == email && e.password == password)
        if(employee){   
          setUser('employee')
          setloggedInUserData(employee)
          localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
        }else{
           alert("Invalid Credentials")
        }
      }
      else{
        alert("Invalid Crendential")
      }
  }


  return ( 
    <>
    {!user ? <Login handleLogin = {handleLogin} />: ''}
    {user  == 'admin' ? <AdminDashboard/>: (user == 'employee' ? <EmployeeDashboard data = {loggedInUserData}/>  : null ) }
    {/* <EmployeeDashboard/>  */}
    {/* <AdminDashboard/>  */}
    </>
  )
}

export default App