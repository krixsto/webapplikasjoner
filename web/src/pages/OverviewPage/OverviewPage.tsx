// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const OverviewPage = () => {
  return (
    <>
      <Metadata title="Overview" description="Room overview" />

      <h1>OverviewPage</h1>
      <p>
        Find me in <code>./web/src/pages/OverviewPage/OverviewPage.tsx</code>
      </p>
      {/*
          My default route is named `overview`, link to me with:
          `<Link to={routes.overview()}>Overview</Link>`
      */}
    </>
  )
}

export default OverviewPage
