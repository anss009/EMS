import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className="ems-task-card ems-task-card--failed ems-animate-in">
      <div className="ems-task-card__top">
        <span className="ems-task-card__badge ems-task-card__badge--failed">
          <span className="ems-task-card__badge-dot"></span> Failed / Blocked
        </span>
        <div className="ems-task-card__date-chip">
          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{data.date}</span>
        </div>
      </div>

      <span className="ems-task-card__category">{data.category}</span>
      <h3 className="ems-task-card__title">{data.taskTitle}</h3>
      <p className="ems-task-card__desc">{data.description}</p>

      <div className="ems-task-card__actions">
        <div className="ems-task-status-pill ems-task-status-pill--failed">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Task Unresolved / Failed
        </div>
      </div>
    </div>
  )
}

export default FailedTask
