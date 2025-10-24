import { useQuery, gql } from '@redwoodjs/web'
import styling from './ScrollableDevices.module.css'
import React from 'react'
import { Link, routes } from '@redwoodjs/router'

const DEVICES_QUERY = gql`
  query DEVICES_QUERY {
    devices {
      id
      device_name
      room_id
    }
  }
`

interface ScrollableDevicesProps {
  selectedRoomId: number
}

const ScrollableDevices: React.FC<ScrollableDevicesProps> = ({ selectedRoomId }) => {
  const { data } = useQuery(DEVICES_QUERY)
  const devices = data?.devices || []

  const filteredDevices = devices.filter(device => device.room_id == selectedRoomId);

  return (
    <div className={styling.container}>
      {filteredDevices.map((device) => (
        device?.id ? (
          <div key={device.id} className={styling.rectangle}>
            <Link to={routes.device({ roomId: device.room_id.toString(), deviceId: device.id.toString() })} className={styling.deviceLinks}>{device.device_name}</Link>
          </div>
        ) : null
      ))}
    </div>
  )
}

export default ScrollableDevices