// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout'
import styling from './AccountPage.module.css'

const AccountPage = () => {
  return (
    <>
      <Metadata title="Account" description="Account page" />

      <MainLayout>
        <img src="#" alt="LOGO"/>
        <div className={styling.container}>
          <form className={styling.form}>
            <h4>Account</h4>
            <div className={styling.rectangle}>
              You are logged in as (E-mail)
            </div>
            <label className={styling.label}>
              <input type="password" placeholder="New password" className={styling.input}/>
            </label>
            <button type="submit" className={styling.button}>CHANGE PASSWORD</button>
            <a href="#">New account?</a>
          </form>
        </div>
      </MainLayout>

      {/*
          My default route is named `account`, link to me with:
          `<Link to={routes.account()}>Account</Link>`
      */}
    </>
  )
}

export default AccountPage
