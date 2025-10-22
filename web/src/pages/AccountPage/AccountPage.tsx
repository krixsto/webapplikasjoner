// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout'
import styling from './AccountPage.module.css'
import { useAuth } from 'src/auth'

const AccountPage = () => {
  const { currentUser, logOut } = useAuth()

  return (
    <>
      <Metadata title="Account" description="Account page" />

      <MainLayout>
        <div className={styling.container}>
          <form className={styling.form}>
            <h2>Account</h2>
            <div className={styling.rectangle}>
              You are logged in as {currentUser.email}
            </div>
            <label className={styling.label}>
              <input type="password" placeholder="New password" className={styling.input}/>
            </label>
            <button type="submit" className={styling.button}>UPDATE</button>
            <a href="#" onClick={(e) => { e.preventDefault(); logOut({ redirectTo: '/' }) }}>Log out</a>
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
