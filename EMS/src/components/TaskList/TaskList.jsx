import React, { useState } from 'react'
import AcceptTask from './AcceptedTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, onTaskStatusChange }) => {
  const [filter, setFilter] = useState('all') // 'all' | 'new' | 'active' | 'completed' | 'failed'

  const tasks = data?.tasks || []

  // Filter tasks if filter is selected
  const filteredTasks = tasks.map((task, originalIndex) => ({ ...task, originalIndex })).filter((item) => {
    if (filter === 'all') return true
    if (filter === 'new') return item.newTask
    if (filter === 'active') return item.active
    if (filter === 'completed') return item.completed
    if (filter === 'failed') return item.failed
    return true
  })

  return (
    <div className="ems-task-board-section">
      <div className="ems-board-controls">
        <div className="ems-board-controls__left">
          <h2 className="ems-section-title">Assigned Tasks ({tasks.length})</h2>
          <p className="ems-section-subtitle">Click actions to manage your work progress dynamically</p>
        </div>

        {/* Filter Pills */}
        <div className="ems-filter-pills">
          <button
            type="button"
            className={`ems-filter-pill ${filter === 'all' ? 'ems-filter-pill--active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({tasks.length})
          </button>
          <button
            type="button"
            className={`ems-filter-pill ${filter === 'new' ? 'ems-filter-pill--active' : ''}`}
            onClick={() => setFilter('new')}
          >
            New ({data?.taskCounts?.newTask || 0})
          </button>
          <button
            type="button"
            className={`ems-filter-pill ${filter === 'active' ? 'ems-filter-pill--active' : ''}`}
            onClick={() => setFilter('active')}
          >
            In Progress ({data?.taskCounts?.active || 0})
          </button>
          <button
            type="button"
            className={`ems-filter-pill ${filter === 'completed' ? 'ems-filter-pill--active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed ({data?.taskCounts?.completed || 0})
          </button>
          <button
            type="button"
            className={`ems-filter-pill ${filter === 'failed' ? 'ems-filter-pill--active' : ''}`}
            onClick={() => setFilter('failed')}
          >
            Failed ({data?.taskCounts?.failed || 0})
          </button>
        </div>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="ems-empty-state">
          <div className="ems-empty-state__icon">📋</div>
          <div className="ems-empty-state__title">No tasks in this category</div>
          <p className="ems-empty-state__desc">
            {filter === 'all'
              ? 'You have no assigned tasks at the moment. When your admin assigns tasks, they will appear here.'
              : `You currently have 0 ${filter} tasks.`}
          </p>
        </div>
      ) : (
        <div id="tasklist" className="ems-tasklist ems-stagger">
          {filteredTasks.map((elem) => {
            const idx = elem.originalIndex

            if (elem.active) {
              return (
                <AcceptTask
                  key={idx}
                  data={elem}
                  onComplete={() => onTaskStatusChange && onTaskStatusChange(idx, 'completed')}
                  onFail={() => onTaskStatusChange && onTaskStatusChange(idx, 'failed')}
                />
              )
            }
            if (elem.newTask) {
              return (
                <NewTask
                  key={idx}
                  data={elem}
                  onAccept={() => onTaskStatusChange && onTaskStatusChange(idx, 'active')}
                />
              )
            }
            if (elem.completed) {
              return <CompletedTask key={idx} data={elem} />
            }
            if (elem.failed) {
              return <FailedTask key={idx} data={elem} />
            }
            return null
          })}
        </div>
      )}
    </div>
  )
}

export default TaskList
