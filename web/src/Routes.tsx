// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, PrivateSet } from '@redwoodjs/router'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/" page={LoginPage} name="login"/>
      <Route path="/register" page={RegisterPage} name="register"/>
      <Route notfound page={NotFoundPage}/>

    <PrivateSet unauthenticated="login">
      <Route path="/room/{roomId}/device/{deviceId}" page={DevicePage} name="device"/>
      <Route path="/room/{roomId}" page={RoomPage} name="room"/>
      <Route path="/account" page={AccountPage} name="account"/>
      <Route path="/overview" page={OverviewPage} name="overview"/>
    </PrivateSet>
    </Router>
  )
}

export default Routes
