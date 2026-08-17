import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

export const Signup = ({ switchToLogin, handleDirectLogin }) => {
  const { userData, setUserData, adminData, setAdminData } = useContext(AuthContext)
  
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('employee') // 'employee' | 'admin'
  const [showPassword, setShowPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const handleSignup = (e) => {
    e.preventDefault()
    setErrorMsg('')
    setSuccessMsg('')

    const cleanEmail = email.trim().toLowerCase()
    const cleanName = firstName.trim()

    if (!cleanName || !cleanEmail || !password) {
      setErrorMsg('Please fill in all fields.')
      return
    }

    if (role === 'admin') {
      // Check existing admin
      const currentAdmins = adminData || []
      const exists = currentAdmins.some((a) => a.email.toLowerCase() === cleanEmail)
      if (exists) {
        setErrorMsg('An admin account with this email already exists.')
        return
      }

      const newAdmin = {
        id: Date.now(),
        firstName: cleanName,
        email: cleanEmail,
        password: password
      }

      const updatedAdmins = [...currentAdmins, newAdmin]
      setAdminData(updatedAdmins)
      setSuccessMsg('Admin account created! Signing in...')
      setTimeout(() => {
        handleDirectLogin('admin', newAdmin)
      }, 700)
    } else {
      // Employee registration
      const currentEmployees = userData || []
      const exists = currentEmployees.some((emp) => emp.email.toLowerCase() === cleanEmail)
      if (exists) {
        setErrorMsg('An employee account with this email already exists.')
        return
      }

      const newEmployee = {
        id: Date.now(),
        firstName: cleanName,
        email: cleanEmail,
        password: password,
        taskCounts: {
          active: 0,
          newTask: 0,
          completed: 0,
          failed: 0
        },
        tasks: []
      }

      const updatedEmployees = [...currentEmployees, newEmployee]
      setUserData(updatedEmployees)
      setSuccessMsg('Account created successfully! Signing in...')
      setTimeout(() => {
        handleDirectLogin('employee', newEmployee)
      }, 700)
    }
  }

  return (
    <div className="login-card">
      <div className="login-card__inner">

        {/* Brand */}
        <div className="login-brand">
          <div className="login-brand__icon">E</div>
          <span className="login-brand__text">Employee Management System</span>
        </div>

        {/* Heading */}
        <h1 className="login-title">Create Account</h1>
        <p className="login-subtitle">Register to join the workspace</p>

        {/* Role Selector Tabs */}
        <div className="auth-role-tabs">
          <button
            type="button"
            className={`auth-role-tab ${role === 'employee' ? 'auth-role-tab--active' : ''}`}
            onClick={() => setRole('employee')}
          >
            Employee
          </button>
          <button
            type="button"
            className={`auth-role-tab ${role === 'admin' ? 'auth-role-tab--active' : ''}`}
            onClick={() => setRole('admin')}
          >
            Admin
          </button>
        </div>

        {errorMsg && (
          <div className="auth-alert auth-alert--error">
            <span>⚠️</span> {errorMsg}
          </div>
        )}

        {successMsg && (
          <div className="auth-alert auth-alert--success">
            <span>✓</span> {successMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignup} className="login-form">

          {/* First Name */}
          <div className="login-field">
            <label className="login-field__label">Full Name / First Name</label>
            <div className="login-field__wrap">
              <span className="login-field__icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                className="login-field__input"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="e.g. Alex"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="login-field">
            <label className="login-field__label">Email Address</label>
            <div className="login-field__wrap">
              <span className="login-field__icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                className="login-field__input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="login-field">
            <label className="login-field__label">Password</label>
            <div className="login-field__wrap">
              <span className="login-field__icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                className="login-field__input"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a strong password"
                required
                style={{ paddingRight: '44px' }}
              />
              <button
                type="button"
                className="login-field__toggle"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? (
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="login-submit">
            Create {role === 'admin' ? 'Admin' : 'Employee'} Account
          </button>
        </form>

        {/* Divider */}
        <div className="login-divider">
          <div className="login-divider__line" />
          <span className="login-divider__text">or</span>
          <div className="login-divider__line" />
        </div>

        {/* Switch to Login */}
        <p className="login-footer">
          Already have an account?{' '}
          <button
            type="button"
            onClick={switchToLogin}
            className="auth-inline-link"
          >
            Sign in
          </button>
        </p>

      </div>
    </div>
  )
}
