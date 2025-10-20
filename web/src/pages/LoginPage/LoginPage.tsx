// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import AuthLayout from 'src/layouts/AuthLayout'
import styling from './LoginPage.module.css'

const LoginPage = () => {
  return (
    <>
      <Metadata title="Login" description="Login page" />

      <AuthLayout>
        <div className={styling.container}>
          <form className={styling.form}>
            <label className={styling.label}>
              <input type="text" placeholder="Username" className={styling.input}/>
            </label>
            <label className={styling.label}>
              <input type="password" placeholder="Password" className={styling.input}/>
            </label>
            <button type="submit" className={styling.button}>LOG IN</button>
            <a href="#">New account?</a>
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
