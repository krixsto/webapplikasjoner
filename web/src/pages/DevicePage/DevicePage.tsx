// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

type DevicePageProps = {
  roomId: string
}

const DevicePage = ({ roomId }: DevicePageProps) => {
  return (
    <>
      <Metadata title="Device" description="Device page" />

      <h1>DevicePage</h1>
      <p>
        Find me in <code>./web/src/pages/DevicePage/DevicePage.tsx</code>
      </p>
      <p>
        The parameter passed to me is <code>{roomId}</code>
      </p>
      {/*
          My default route is named `device`, link to me with:
          `<Link to={routes.device({ roomId: '42' })}>Device 42</Link>`
      */}
    </>
  )
}

export default DevicePage
