import { useQuery } from '@redwoodjs/web'
import gql from 'graphql-tag'
import styling from './ScrollableDevices.module.css'
import React from 'react'
import { Link, routes } from '@redwoodjs/router'
import ToggleSwitch from './ToggleSwitch'
import { useState, useEffect } from 'react'
import { useMutation } from '@redwoodjs/web'

const DEVICES_QUERY = gql`
  query Devices {
    devices {
      id
      device_name
      device_status
      room_id
      last_status_change
    }
  }
`

const TOGGLE_DEVICE = gql`
  mutation ToggleDevice($id: Int!, $status: Boolean!) {
    toggleDevice(id: $id, status: $status) {
      id
      device_status
      last_status_change
    }
  }
`

interface ScrollableDevicesProps {
  selectedRoomId: number
}

const ScrollableDevices: React.FC<ScrollableDevicesProps> = ({ selectedRoomId }) => {
  const { data } = useQuery(DEVICES_QUERY)
  const devices = data?.devices || []
  const [toggleDevice] = useMutation(TOGGLE_DEVICE, { refetchQueries: ['Devices'] })
  const [deviceStates, setDeviceStates] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {}
    const saved = localStorage.getItem("deviceStates")
    return saved ? JSON.parse(saved) : {}
  })
  const duration = Date.now() - new Date(devices.last_status_change).getTime();

useEffect(() => {
    localStorage.setItem("deviceStates", JSON.stringify(deviceStates))
  }, [deviceStates])

  const filteredDevices = devices.filter((device) => device.room_id == selectedRoomId).sort((a, b) => a.id - b.id)

  return (
    <div className={styling.container}>
      {filteredDevices.map((device) => (
          <div key={device.id} className={styling.rectangle}>
            <Link to={routes.device({ roomId: device.room_id.toString(), deviceId: device.id.toString() })} className={styling.deviceLinks}>{device.device_name}</Link>

          <div className={styling.switch}>
            <ToggleSwitch
              checked={deviceStates[device.id] ?? device.device_status}
              onChange={() => {
                const newStatus = !(deviceStates[device.id] ?? device.device_status)

                toggleDevice({ variables: { id: device.id, status: newStatus }})

                setDeviceStates((prev) => ({
                  ...prev,
                  [device.id]: newStatus,
                }))
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ScrollableDevices