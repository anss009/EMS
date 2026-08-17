import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const { userData } = useContext(AuthContext)
  const employees = userData || []

  return (
    <div className="ems-table-container ems-animate-in">
      <div className="ems-table-header-bar">
        <div>
          <h2 className="ems-section-title">Team Task Directory ({employees.length})</h2>
          <p className="ems-section-subtitle">Real-time task distribution and completion status across team members</p>
        </div>
      </div>

      <div className="ems-table-wrapper">
        <div className="ems-table">
          <div className="ems-table__header">
            <span className="ems-table__header-cell">Team Member</span>
            <span className="ems-table__header-cell text-center">New</span>
            <span className="ems-table__header-cell text-center">In Progress</span>
            <span className="ems-table__header-cell text-center">Completed</span>
            <span className="ems-table__header-cell text-center">Failed</span>
            <span className="ems-table__header-cell text-right">Total Load</span>
          </div>

          <div className="ems-table__body">
            {employees.length === 0 ? (
              <div className="ems-table__empty">No team members registered yet.</div>
            ) : (
              employees.map((elem) => {
                const total =
                  (elem.taskCounts?.newTask || 0) +
                  (elem.taskCounts?.active || 0) +
                  (elem.taskCounts?.completed || 0) +
                  (elem.taskCounts?.failed || 0)

                return (
                  <div key={elem.id || elem.email} className="ems-table__row">
                    {/* Employee info */}
                    <div className="ems-table__cell ems-table__cell--user">
                      <div className="ems-avatar-sm">
                        {elem.firstName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="ems-table__user-name">{elem.firstName}</div>
                        <div className="ems-table__user-email">{elem.email}</div>
                      </div>
                    </div>

                    {/* Status counts with badges */}
                    <div className="ems-table__cell justify-center">
                      <span className="ems-count-pill ems-count-pill--new">
                        {elem.taskCounts?.newTask || 0}
                      </span>
                    </div>

                    <div className="ems-table__cell justify-center">
                      <span className="ems-count-pill ems-count-pill--active">
                        {elem.taskCounts?.active || 0}
                      </span>
                    </div>

                    <div className="ems-table__cell justify-center">
                      <span className="ems-count-pill ems-count-pill--completed">
                        {elem.taskCounts?.completed || 0}
                      </span>
                    </div>

                    <div className="ems-table__cell justify-center">
                      <span className="ems-count-pill ems-count-pill--failed">
                        {elem.taskCounts?.failed || 0}
                      </span>
                    </div>

                    <div className="ems-table__cell justify-end">
                      <span className="ems-table__total-tag">{total} tasks</span>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllTask
