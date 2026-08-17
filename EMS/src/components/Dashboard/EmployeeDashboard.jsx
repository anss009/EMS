import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

export const EmployeeDashboard = ({ changeUser, data, onTaskStatusChange }) => {
  return (
    <div className="ems-dashboard-layout">
      <Header changeUser={changeUser} data={data} role="employee" />
      <main className="ems-main-content">
        <TaskListNumber data={data} />
        <TaskList data={data} onTaskStatusChange={onTaskStatusChange} />
      </main>
    </div>
  )
}
