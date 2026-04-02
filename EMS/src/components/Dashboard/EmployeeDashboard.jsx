import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

export const EmployeeDashboard = ({data}) => {
  return (

    <div className='p-15 bg-[#1c1c1c] h-screen'>
      <Header data = {data} />
      <TaskListNumber data= {data}/>
      <TaskList data= {data} />
    </div>
  )
}
