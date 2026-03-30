import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage } from '../utilites/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
          const {employees,admin} = getLocalStorage
    setUserData({employees, admin})
    
    }, [])
    

  return (
    <div>
        <AuthContext.Provider value={"Anss"}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
