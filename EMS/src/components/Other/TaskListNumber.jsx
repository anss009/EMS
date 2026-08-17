import React from 'react'

const TaskListNumber = ({ data }) => {
  const counts = data?.taskCounts || { newTask: 0, completed: 0, active: 0, failed: 0 }
  const totalTasks = counts.newTask + counts.completed + counts.active + counts.failed
  const completionRate = totalTasks > 0 ? Math.round((counts.completed / totalTasks) * 100) : 0

  return (
    <div className="ems-overview-section">
      <div className="ems-section-header">
        <div>
          <h2 className="ems-section-title">Overview & Task Metrics</h2>
          <p className="ems-section-subtitle">Real-time status of your assigned tasks</p>
        </div>
        <div className="ems-completion-badge">
          <span className="ems-completion-badge__label">Completion Rate</span>
          <span className="ems-completion-badge__value">{completionRate}%</span>
        </div>
      </div>

      <div className="ems-stats ems-stagger">
        {/* New Tasks */}
        <div className="ems-stat ems-stat--new ems-animate-in">
          <div className="ems-stat__header">
            <div className="ems-stat__icon-box ems-stat__icon-box--new">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="ems-stat__pill">Inbox</span>
          </div>
          <div className="ems-stat__number">{counts.newTask}</div>
          <div className="ems-stat__label">New Tasks Received</div>
        </div>

        {/* Active Tasks */}
        <div className="ems-stat ems-stat--active ems-animate-in">
          <div className="ems-stat__header">
            <div className="ems-stat__icon-box ems-stat__icon-box--active">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="ems-stat__pill">In Progress</span>
          </div>
          <div className="ems-stat__number">{counts.active}</div>
          <div className="ems-stat__label">Accepted / In Progress</div>
        </div>

        {/* Completed Tasks */}
        <div className="ems-stat ems-stat--completed ems-animate-in">
          <div className="ems-stat__header">
            <div className="ems-stat__icon-box ems-stat__icon-box--completed">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="ems-stat__pill">Resolved</span>
          </div>
          <div className="ems-stat__number">{counts.completed}</div>
          <div className="ems-stat__label">Completed Tasks</div>
        </div>

        {/* Failed Tasks */}
        <div className="ems-stat ems-stat--failed ems-animate-in">
          <div className="ems-stat__header">
            <div className="ems-stat__icon-box ems-stat__icon-box--failed">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="ems-stat__pill">Overdue / Blocked</span>
          </div>
          <div className="ems-stat__number">{counts.failed}</div>
          <div className="ems-stat__label">Failed / Blocked Tasks</div>
        </div>
      </div>
    </div>
  )
}

export default TaskListNumber