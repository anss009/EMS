import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const task = {
      taskTitle,
      description: taskDescription,
      date: taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    }

    const data = [...userData]

    data.forEach((elem) => {
      if (asignTo.trim().toLowerCase() === elem.firstName.toLowerCase()) {
        elem.tasks.push(task)
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1
      }
    })

    setUserData(data)

    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  return (
    <div className="ems-create-task ems-animate-in">
      <div className="ems-create-task__header">
        <h2 className="ems-create-task__title">Create New Task</h2>
        <p className="ems-create-task__subtitle">Assign a task to a team member instantly</p>
      </div>

      <form onSubmit={submitHandler} className="ems-create-task__form">

        {/* Task Title */}
        <div className="ems-create-task__field">
          <label htmlFor="ct-title" className="ems-create-task__label">Task Title</label>
          <div className="ems-input-group">
            <span className="ems-input-group__icon" aria-hidden="true">✏️</span>
            <input
              id="ct-title"
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="e.g. Redesign landing page"
              className="ems-create-task__input"
              required
            />
          </div>
        </div>

        {/* Due Date */}
        <div className="ems-create-task__field">
          <label htmlFor="ct-date" className="ems-create-task__label">Due Date</label>
          <div className="ems-input-group">
            <span className="ems-input-group__icon" aria-hidden="true">📅</span>
            <input
              id="ct-date"
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="ems-create-task__input"
              required
            />
          </div>
        </div>

        {/* Assign To */}
        <div className="ems-create-task__field">
          <label htmlFor="ct-assign" className="ems-create-task__label">Assign To</label>
          <div className="ems-input-group">
            <span className="ems-input-group__icon" aria-hidden="true">👤</span>
            <input
              id="ct-assign"
              type="text"
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              placeholder="Employee first name"
              className="ems-create-task__input"
              required
            />
          </div>
        </div>

        {/* Category */}
        <div className="ems-create-task__field">
          <label htmlFor="ct-category" className="ems-create-task__label">Category</label>
          <div className="ems-input-group">
            <span className="ems-input-group__icon" aria-hidden="true">🏷️</span>
            <input
              id="ct-category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Design, Dev, Marketing…"
              className="ems-create-task__input"
              required
            />
          </div>
        </div>

        {/* Description - full width */}
        <div className="ems-create-task__field ems-create-task__field--full">
          <label htmlFor="ct-desc" className="ems-create-task__label">Description</label>
          <textarea
            id="ct-desc"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Describe the task goals, context, and expected deliverables…"
            className="ems-create-task__textarea"
            rows={4}
          />
        </div>

        {/* Submit */}
        <button type="submit" className="ems-create-task__submit">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Assign Task
        </button>

      </form>
    </div>
  )
}

export default CreateTask
