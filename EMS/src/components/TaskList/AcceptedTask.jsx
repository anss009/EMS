import React from 'react'

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <div className="ems-task-card ems-task-card--active ems-animate-in">
      <div className="ems-task-card__top">
        <span className="ems-task-card__badge ems-task-card__badge--active">
          <span className="ems-task-card__badge-dot"></span> In Progress
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

      <div className="ems-task-card__actions ems-task-card__actions--split">
        <button
          type="button"
          onClick={onComplete}
          className="ems-btn ems-btn--complete"
          title="Mark this task as successfully completed"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Mark Completed
        </button>

        <button
          type="button"
          onClick={onFail}
          className="ems-btn ems-btn--fail"
          title="Mark this task as blocked or failed"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Mark Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
