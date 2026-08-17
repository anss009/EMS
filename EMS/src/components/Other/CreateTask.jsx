import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')
  const [feedback, setFeedback] = useState({ type: '', message: '' })

  const employees = userData || []

  const submitHandler = (e) => {
    e.preventDefault()
    setFeedback({ type: '', message: '' })

    if (!asignTo) {
      setFeedback({ type: 'error', message: 'Please select an employee to assign this task to.' })
      return
    }

    if (!taskTitle || !taskDate || !category || !taskDescription) {
      setFeedback({ type: 'error', message: 'Please fill in all task details.' })
      return
    }

    const newTaskObj = {
      taskTitle: taskTitle.trim(),
      description: taskDescription.trim(),
      date: taskDate,
      category: category.trim(),
      active: false,
      newTask: true,
      failed: false,
      completed: false
    }

    let found = false
    const updatedEmployees = employees.map((emp) => {
      if (emp.firstName.toLowerCase() === asignTo.toLowerCase() || emp.email.toLowerCase() === asignTo.toLowerCase()) {
        found = true
        const updatedTasks = [newTaskObj, ...emp.tasks]
        const newTaskCount = (emp.taskCounts?.newTask || 0) + 1
        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            newTask: newTaskCount
          }
        }
      }
      return emp
    })

    if (!found) {
      setFeedback({ type: 'error', message: `Employee "${asignTo}" could not be found.` })
      return
    }

    setUserData(updatedEmployees)
    setFeedback({ type: 'success', message: `Task "${taskTitle}" assigned successfully to ${asignTo}!` })

    // Reset Form
    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescription('')

    // Clear feedback after 4 seconds
    setTimeout(() => {
      setFeedback({ type: '', message: '' })
    }, 4000)
  }

  return (
    <div className="ems-create-task ems-animate-in">
      <div className="ems-create-task__header">
        <div>
          <h2 className="ems-create-task__title">Create & Assign New Task</h2>
          <p className="ems-create-task__subtitle">
            Assign workflow deliverables to employees with category tags and deadlines
          </p>
        </div>
      </div>

      {feedback.message && (
        <div className={`auth-alert ${feedback.type === 'success' ? 'auth-alert--success' : 'auth-alert--error'} mb-4`}>
          <span>{feedback.type === 'success' ? '✓' : '⚠️'}</span> {feedback.message}
        </div>
      )}

      <form onSubmit={submitHandler} className="ems-create-task__form">
        {/* Task Title */}
        <div className="ems-create-task__field">
          <label className="ems-create-task__label">Task Title</label>
          <div className="ems-input-group">
            <span className="ems-input-group__icon">📌</span>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="ems-create-task__input"
              type="text"
              placeholder="e.g. Build Payment Gateway Integration"
              required
            />
          </div>
        </div>

        {/* Due Date */}
        <div className="ems-create-task__field">
          <label className="ems-create-task__label">Due Date</label>
          <div className="ems-input-group">
            <span className="ems-input-group__icon">📅</span>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="ems-create-task__input"
              type="date"
              required
            />
          </div>
        </div>

        {/* Dynamic Assign To Select */}
        <div className="ems-create-task__field">
          <label className="ems-create-task__label">Assign To Employee</label>
          <div className="ems-input-group">
            <span className="ems-input-group__icon">👤</span>
            <select
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="ems-create-task__select"
              required
            >
              <option value="" disabled>Select an employee ({employees.length} available)</option>
              {employees.map((emp) => (
                <option key={emp.id || emp.email} value={emp.firstName}>
                  {emp.firstName} ({emp.email})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category */}
        <div className="ems-create-task__field">
          <label className="ems-create-task__label">Category / Department</label>
          <div className="ems-input-group">
            <span className="ems-input-group__icon">🏷️</span>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="ems-create-task__input"
              type="text"
              placeholder="e.g. Development, Design, DevOps, QA"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="ems-create-task__field ems-create-task__field--full">
          <label className="ems-create-task__label">Task Details & Acceptance Criteria</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="ems-create-task__textarea"
            placeholder="Detailed description, requirements, and deliverables expected..."
            rows={4}
            required
          ></textarea>
        </div>

        {/* Submit */}
        <button type="submit" className="ems-create-task__submit">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Publish & Assign Task
        </button>
      </form>
    </div>
  )
}

export default CreateTask
