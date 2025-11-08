// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import AuthLayout from 'src/layouts/AuthLayout'
import styling from './LoginPage.module.css'
import { useAuth } from 'src/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useState } from 'react'
import React  from 'react'

const LoginPage = () => {
  const { logIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    try {
      const response = await logIn({ username: email, password })

      if (response?.error) {
        setError('Invalid email or password.')
        return
      }

      navigate(routes.overview())
    } catch {
      setError('Log in failed.')
    }
  }

  return (
    <>
      <Metadata title="Login" description="Login page" />

      <AuthLayout>
        <div className={styling.container}>
          <form onSubmit={handleSubmit} className={styling.form}>
            <label className={styling.label}>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={styling.input} required/>
            </label>
            <label className={styling.label}>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styling.input} required/>
            </label>
            {error && <p className={styling.error}>{error}</p>}
            <button type="submit" className={styling.button}>LOG IN</button>
            <a href="/register">New account?</a>
          </form>
        </div>
      </AuthLayout>

      {/*
          My default route is named `login`, link to me with:
          `<Link to={routes.login()}>Login</Link>`
      */}
    </>
  )
}

export default LoginPage
