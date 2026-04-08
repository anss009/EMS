import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utilites/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  // localStorage.clear()

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const employees = localStorage.getItem('employees')
        if (!employees) {
            setLocalStorage()
        }
        const { employees: storedEmployees } = getLocalStorage()
        setUserData(storedEmployees)
    }, [])
    

  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider