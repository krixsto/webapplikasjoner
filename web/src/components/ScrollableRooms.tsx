import { useQuery, gql } from '@redwoodjs/web'
import styling from './ScrollableRooms.module.css'

const ROOMS_QUERY = gql`
  query ROOMS_QUERY {
    rooms {
      id
      room_name
    }
  }
`

const ScrollableRooms = () => {
  const { data } = useQuery(ROOMS_QUERY)
  const rooms = data?.rooms || []

  return (
    <div className={styling.container}>
      {rooms.map((room) => (
        <div key={room.id} className={styling.rectangle}>{room.room_name}</div>
      ))}
    </div>
  )
}

export default ScrollableRooms