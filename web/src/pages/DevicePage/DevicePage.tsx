// import { Link, routes } from '@redwoodjs/router'
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
          <div className={styling.sideArea}>
            <h4>(LEFT ARROW) Air conditioner</h4>
            <div className={styling.rectangle}>
              <h4 className={styling.normalText}>ID: 004</h4>
              <h4 className={styling.normalText}>Status: OFF</h4>
              <h4 className={styling.normalText}>Duration: 2h</h4>
            </div>
            <h4 className={styling.deleteText}>Delete device</h4>
          </div>
          <div className={styling.sideArea}>
            <h4>Schedule</h4>
            <h4 className={styling.normalText}>Action: (SWITCH)</h4>
            <h4 className={styling.normalText}>Time: (TIME INPUT)</h4>
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
