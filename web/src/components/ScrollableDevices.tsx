import { useQuery, gql } from '@redwoodjs/web'
import styling from './ScrollableDevices.module.css'
import React from 'react'

const DEVICES_QUERY = gql`
  query DEVICES_QUERY {
    devices {
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
        <div key={device.id} className={styling.rectangle}>{device.device_name}</div>
      ))}
    </div>
  )
}

export default ScrollableDevices