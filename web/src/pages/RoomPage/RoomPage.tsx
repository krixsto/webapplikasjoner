import { Link, routes } from '@redwoodjs/router'
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
        <div className={styling.container}>
          <div className={styling.column1}>
            <Link to={routes.overview()} className={styling.noLink}>
              <h2 className={styling.arrowText}>
                <img src="/arrow.png" alt="Arrow" width={15} height={15} />
                Air conditioner
              </h2>
            </Link>
            <div className={styling.rectangle}>
              Lamp (SWITCH)
            </div>
            <div className={styling.rectangle}>
              Air Conditioner (SWITCH)
            </div>
            <h2 className={styling.deleteText}>Delete room</h2>
          </div>
          <div className={styling.column2}>
            <h2>Add new socket</h2>
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

      {/*
          My default route is named `room`, link to me with:
          `<Link to={routes.room({ roomId: '42' })}>Room 42</Link>`
      */}
    </>
  )
}

export default RoomPage
