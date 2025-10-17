// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

type RoomPageProps = {
  roomId: string
}

const RoomPage = ({ roomId }: RoomPageProps) => {
  return (
    <>
      <Metadata title="Room" description="Room page" />

      <h1>RoomPage</h1>
      <p>
        Find me in <code>./web/src/pages/RoomPage/RoomPage.tsx</code>
      </p>
      <p>
        The parameter passed to me is <code>{roomId}</code>
      </p>
      {/*
          My default route is named `room`, link to me with:
          `<Link to={routes.room({ roomId: '42' })}>Room 42</Link>`
      */}
    </>
  )
}

export default RoomPage
