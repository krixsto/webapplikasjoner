// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout'
import styling from './AccountPage.module.css'
import { useAuth } from 'src/auth'
import { UpdatePasswordSection } from 'src/components/UpdatePassword'

const AccountPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <Metadata title="Account" description="Account page" />

      <MainLayout>
        <div className={styling.outerContainer}>
          <h1>Account</h1>
          <div className={styling.container}>
            <div className={styling.rectangle}>
              You are logged in as {currentUser.email}
            </div>
            <UpdatePasswordSection/>
          </div>
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
