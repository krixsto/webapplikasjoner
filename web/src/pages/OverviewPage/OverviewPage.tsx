// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout'
import styling from './OverviewPage.module.css'

const OverviewPage = () => {
  return (
    <>
      <Metadata title="Overview" description="Room overview" />

      <MainLayout>
        <div className={styling.container}>
          <div className={styling.upperLowerArea}>
            <h4>Room overview</h4>
            <div className={styling.rectangleContainer}>
              <div className={styling.rectangle}>
                Home
              </div>
              <div className={styling.rectangle}>
                Work
              </div>
            </div>
          </div>
          <div className={styling.sideAreaContainer}>
            <div className={styling.sideArea}>
              <h4 className={styling.leftText}>(SWITCH) Turn on all devices</h4>
              <div className={styling.whiteRectangle}>
                Living room
              </div>
              <div className={styling.whiteRectangle}>
                Bedroom
              </div>
              <div className={styling.whiteRectangle}>
                Bedroom 2
              </div>
            </div>
            <div className={styling.sideArea}>
              <div className={styling.whiteRectangle}>
                Room name
              </div>
              <button type="submit" className={styling.button}>Add</button>
            </div>
          </div>
          <div className={styling.upperLowerArea}>
            <h4>View members</h4>
          </div>
        </div>
      </MainLayout>

      {/*
          My default route is named `overview`, link to me with:
          `<Link to={routes.overview()}>Overview</Link>`
      */}
    </>
  )
}

export default OverviewPage
