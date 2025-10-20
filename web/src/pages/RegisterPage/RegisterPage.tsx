// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout'
import styling from './RegisterPage.module.css'

const RegisterPage = () => {
  return (
    <>
      <Metadata title="Register" description="Register page" />

      <MainLayout>
        <div className={styling.container}>
          <form className={styling.form}>
            <img src="#" alt="LOGO"/>
            <label className={styling.label}>
              <input type="text" placeholder="Enter e-mail" className={styling.input}/>
            </label>
            <label className={styling.label}>
              <input type="password" placeholder="Enter password" className={styling.input}/>
            </label>
            <button type="submit" className={styling.button}>REGISTER</button>
            <a href="#">Log in to an existing account</a>
          </form>
        </div>
      </MainLayout>

      {/*
          My default route is named `register`, link to me with:
          `<Link to={routes.register()}>Register</Link>`
      */}
    </>
  )
}

export default RegisterPage
