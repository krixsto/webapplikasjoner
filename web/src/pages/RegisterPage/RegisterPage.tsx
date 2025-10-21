// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import AuthLayout from 'src/layouts/AuthLayout'
import styling from './RegisterPage.module.css'
import { useAuth } from 'src/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useState } from 'react'

const RegisterPage = () => {

    const { signUp } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setError('')

      try {
        const response = await signUp({ username: email, password })

      if (response?.error) {
        setError('User already registered.')
        return
      }

        navigate(routes.login())
      } catch {
        setError('Registration failed.')
      }
    }

  return (
    <>
      <Metadata title="Register" description="Register page" />

      <AuthLayout>
        <div className={styling.container}>
          <form onSubmit={handleSignUp} className={styling.form}>
            <label className={styling.label}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter e-mail" className={styling.input}/>
            </label>
            <label className={styling.label}>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" className={styling.input}/>
            </label>
            {error && <p className={styling.error}>{error}</p>}
            <button type="submit" className={styling.button}>REGISTER</button>
            <a href="/">Log in to an existing account</a>
          </form>
        </div>
      </AuthLayout>

      {/*
          My default route is named `register`, link to me with:
          `<Link to={routes.register()}>Register</Link>`
      */}
    </>
  )
}

export default RegisterPage
