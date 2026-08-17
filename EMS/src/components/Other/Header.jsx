import React from 'react'

const Header = ({ changeUser, data, role = 'employee' }) => {
  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    changeUser(null)
  }

  const isEmployee = role === 'employee' || (data && data.tasks)
  const displayName = data?.firstName || (isEmployee ? 'Employee' : 'Admin')
  const dashboardTitle = isEmployee ? 'Employee Dashboard' : 'Admin Dashboard'
  const roleBadge = isEmployee ? 'Employee' : 'Administrator'

  // Current Date formatted cleanly
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })

  return (
    <header className="ems-navbar">
      {/* Left: Brand & Dashboard Title */}
      <div className="ems-navbar__left">
        <div className="ems-navbar__brand-badge">
          <span className="ems-navbar__brand-icon">E</span>
          <div>
            <div className="ems-navbar__brand-title">Employee Management System</div>
            <div className="ems-navbar__dashboard-tag">{dashboardTitle}</div>
          </div>
        </div>
      </div>

      {/* Center/Right: Date & User Profile & Log Out */}
      <div className="ems-navbar__right">
        <div className="ems-navbar__date">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{today}</span>
        </div>

        <div className="ems-navbar__user-pill">
          <div className="ems-navbar__avatar">
            {displayName.charAt(0).toUpperCase()}
          </div>
          <div className="ems-navbar__user-info">
            <span className="ems-navbar__user-name">Hello, {displayName} 👋</span>
            <span className={`ems-navbar__user-role ${isEmployee ? 'ems-navbar__user-role--emp' : 'ems-navbar__user-role--admin'}`}>
              {roleBadge}
            </span>
          </div>
        </div>

        <button onClick={logOutUser} className="ems-navbar__logout-btn" title="Sign out of account">
          <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Log Out</span>
        </button>
      </div>
    </header>
  )
}

export default Header
