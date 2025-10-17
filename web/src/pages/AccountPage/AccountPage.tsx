// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AccountPage = () => {
  return (
    <>
      <Metadata title="Account" description="Account page" />

      <h1>AccountPage</h1>
      <p>
        Find me in <code>./web/src/pages/AccountPage/AccountPage.tsx</code>
      </p>
      {/*
          My default route is named `account`, link to me with:
          `<Link to={routes.account()}>Account</Link>`
      */}
    </>
  )
}

export default AccountPage
