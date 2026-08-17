import React, { useState } from 'react'
import { Signup } from './Signup'

export const Login = ({ handleLogin, handleDirectLogin }) => {
  const [isSigningUp, setIsSigningUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()  
    handleLogin(email, password)
  }

  if (isSigningUp) {
    return (
      <div className="login-scene">
        <Signup
          switchToLogin={() => setIsSigningUp(false)}
          handleDirectLogin={handleDirectLogin}
        />
      </div>
    )
  }

  return (
    <div className="login-scene">
      <div className="login-card">
        <div className="login-card__inner">

          {/* Brand */}
          <div className="login-brand">
            <div className="login-brand__icon">E</div>
            <span className="login-brand__text">Employee Management System</span>
          </div>

          {/* Heading */}
          <h1 className="login-title">Welcome back</h1>
          <p className="login-subtitle">Sign in to continue to your dashboard</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">

            {/* Email */}
            <div className="login-field">
              <label className="login-field__label">Email address</label>
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
              <div className="login-field__row">
                <label className="login-field__label">Password</label>
                <span className="auth-hint">Default: 123 (emp) / 112233 (admin)</span>
              </div>
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
                  placeholder="Enter your password"
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
              Sign In
            </button>
          </form>

          {/* Quick Fill Pills for easy testing */}
          <div className="auth-quick-login">
            <span className="auth-quick-login__title">Quick Test Accounts:</span>
            <div className="auth-quick-login__pills">
              <button
                type="button"
                className="auth-pill"
                onClick={() => { setEmail('admin@company.com'); setPassword('112233'); }}
              >
                👑 Admin
              </button>
              <button
                type="button"
                className="auth-pill"
                onClick={() => { setEmail('alex@company.com'); setPassword('123'); }}
              >
                👤 Alex
              </button>
              <button
                type="button"
                className="auth-pill"
                onClick={() => { setEmail('sophia@company.com'); setPassword('123'); }}
              >
                👤 Sophia
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="login-divider">
            <div className="login-divider__line" />
            <span className="login-divider__text">or</span>
            <div className="login-divider__line" />
          </div>

          {/* Create Account Link */}
          <p className="login-footer">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => setIsSigningUp(true)}
              className="auth-inline-link"
            >
              Create one
            </button>
          </p>

        </div>
      </div>
    </div>
  )
}
