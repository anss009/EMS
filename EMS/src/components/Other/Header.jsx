import React, { useState } from 'react'
import { setLocalStorage } from '../../utilites/LocalStorage'

const Header = () => {

  // const [userName, setUserName] = useState['']

  // if(!data){
  //   setUserName('Admin')
  // }else{
  //   setUserName(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }

  return (
    <div className=' flex items-end justify-between '>
      <h1 className=' text-2xl font-medium '>Hello <br /> <span className='text-3xl font-semibold'>userName😎</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium cursor-pointer px-5 py-2 rounded-small'>LogOut</button>
    </div>
  )
}

export default Header
