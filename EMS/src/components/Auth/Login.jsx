import React, { useState } from 'react'

export const Login = ({ handleLogin }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  // Quick-fill demo credentials
  const quickFill = (e, p) => { setEmail(e); setPassword(p) }

  return (
    <div className="login-scene">
      {/* Atmospheric blobs */}
      <div className="login-scene__blob login-scene__blob--1" aria-hidden="true" />
      <div className="login-scene__blob login-scene__blob--2" aria-hidden="true" />

      <div className="login-card">
        <div className="login-card__inner">

          {/* Brand */}
          <div className="login-brand">
            <div className="login-brand__icon" aria-hidden="true">E</div>
            <span className="login-brand__text">EMS</span>
          </div>

          <h1 className="login-title">Welcome back</h1>
          <p className="login-subtitle">Sign in to your EMS account</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">

            {/* Email */}
            <div className="login-field">
              <label htmlFor="ems-email" className="login-field__label">Email address</label>
              <div className="login-field__wrap">
                <span className="login-field__icon" aria-hidden="true">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="ems-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="login-field__input"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="login-field">
              <div className="login-field__row">
                <label htmlFor="ems-password" className="login-field__label">Password</label>
              </div>
              <div className="login-field__wrap">
                <span className="login-field__icon" aria-hidden="true">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="ems-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="login-field__input"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="login-field__toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
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

            <button type="submit" className="login-submit">
              Sign in
            </button>
          </form>

          {/* Quick fill */}
          <div className="auth-quick-login">
            <span className="auth-quick-login__title">Demo accounts</span>
            <div className="auth-quick-login__pills">
              <button type="button" className="auth-pill" onClick={() => quickFill('admin@company.com', '112233')}>
                Admin
              </button>
              <button type="button" className="auth-pill" onClick={() => quickFill('e@e.com', '123')}>
                Arjun
              </button>
              <button type="button" className="auth-pill" onClick={() => quickFill('employee2@company.com', '112233')}>
                Bilal
              </button>
              <button type="button" className="auth-pill" onClick={() => quickFill('employee3@company.com', '112233')}>
                Hamza
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
