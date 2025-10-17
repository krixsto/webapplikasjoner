// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/room/{roomId}/device/{deviceId}" page={DevicePage} name="device" />
      <Route path="/room/{roomId}" page={RoomPage} name="room" />
      <Route path="/account" page={AccountPage} name="account" />
      <Route path="/overview" page={OverviewPage} name="overview" />
      <Route path="/register" page={RegisterPage} name="register" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
