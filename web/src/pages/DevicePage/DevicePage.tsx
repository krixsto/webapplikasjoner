import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout'
import styling from './DevicePage.module.css'

type DevicePageProps = {
  roomId: string
}

const DevicePage = ({ roomId }: DevicePageProps) => {
  return (
    <>
      <Metadata title="Device" description="Device page" />

      <MainLayout>
        <div className={styling.container}>
          <div className={styling.sideArea1}>
            <Link to={routes.room({ roomId: "1" })} className={styling.noLink}>
              <h2 className={styling.arrowText}>
                <img src="/arrow.png" alt="Arrow" width={15} height={15} />
                Air conditioner
              </h2>
            </Link>
            <div className={styling.rectangle}>
              <h2 className={styling.normalText}>ID: 004</h2>
              <h2 className={styling.normalText}>Status: OFF</h2>
              <h2 className={styling.normalText}>Duration: 2h</h2>
            </div>
            <h2 className={styling.deleteText}>Delete device</h2>
          </div>
          <div className={styling.sideArea2}>
            <h2>Schedule</h2>
            <h2 className={styling.normalText}>Action: (SWITCH)</h2>
            <h2 className={styling.normalText}>Time: (TIME INPUT)</h2>
            <button type="submit" className={styling.button}>Save</button>
          </div>
        </div>
      </MainLayout>

      {/*
          My default route is named `device`, link to me with:
          `<Link to={routes.device({ roomId: '42' })}>Device 42</Link>`
      */}
    </>
  )
}

export default DevicePage
