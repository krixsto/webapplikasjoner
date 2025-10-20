// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout'
import styling from './RoomPage.module.css'

type RoomPageProps = {
  roomId: string
}

const RoomPage = ({ roomId }: RoomPageProps) => {
  return (
    <>
      <Metadata title="Room" description="Room page" />

      <MainLayout>

        <img src="#" alt="LOGO"/>
        <div className={styling.container}>
          <div className={styling.column}>
            <h4>(LEFT ARROW) Bedroom</h4>
            <div className={styling.rectangle}>
              Lamp (SWITCH)
            </div>
            <div className={styling.rectangle}>
              Air Conditioner (SWITCH)
            </div>
            <h4 className={styling.deleteText}>Delete room</h4>
          </div>
          <div className={styling.column}>
            <h4>Add new socket</h4>
            <label className={styling.label}>
              <input type="text" placeholder="Socket ID" className={styling.input}/>
            </label>
            <label className={styling.label}>
              <input type="text" placeholder="Device name, e.g. 'TV'" className={styling.input}/>
            </label>
            <button type="submit" className={styling.button}>Add</button>
          </div>
        </div>
      </MainLayout>

      <div className={styling.container}>

      </div>

      {/*
          My default route is named `room`, link to me with:
          `<Link to={routes.room({ roomId: '42' })}>Room 42</Link>`
      */}
    </>
  )
}

export default RoomPage
