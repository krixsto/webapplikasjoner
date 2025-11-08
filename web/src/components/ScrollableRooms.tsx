import { useQuery } from '@redwoodjs/web'
import gql from 'graphql-tag'
import styling from './ScrollableRooms.module.css'
import React from 'react'
import { Link, routes } from '@redwoodjs/router'

const ROOMS_QUERY = gql`
  query ROOMS_QUERY {
    rooms {
      id
      room_name
      home_work
    }
  }
`

interface ScrollableRoomsProps {
  selectedHomeWork: "home" | "work";
}

const ScrollableRooms: React.FC<ScrollableRoomsProps> = ({ selectedHomeWork }) => {
  const { data } = useQuery(ROOMS_QUERY)
  const rooms = data?.rooms || []

  const filteredRooms = rooms.filter(room => room.home_work == selectedHomeWork);

  return (
    <div className={styling.container}>
      {filteredRooms.map((room) => (
        <div key={room.id} className={styling.rectangle}>
          <Link to={routes.room({ roomId: room.id.toString() })} className={styling.roomLinks}>{room.room_name}</Link>
        </div>
      ))}
    </div>
  )
}

export default ScrollableRooms