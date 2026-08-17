import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = ({ changeUser, data }) => {
  return (
    <div className="ems-dashboard-layout">
      <Header changeUser={changeUser} data={data} role="admin" />
      <main className="ems-main-content">
        <CreateTask />
        <AllTask />
      </main>
    </div>
  )
}

export default AdminDashboard
