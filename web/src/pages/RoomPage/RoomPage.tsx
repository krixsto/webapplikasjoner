import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout'
import styling from './RoomPage.module.css'
import { useState } from 'react'
import React from 'react'
import { gql, useMutation } from '@redwoodjs/web'
import ScrollableDevices from 'src/components/ScrollableDevices'

const CREATE_DEVICE_MUTATION = gql`
  mutation CreateDeviceMutation($input: CreateDeviceInput!) {
    createDevice(input: $input) {
      device_name
      room_id
    }
  }
`

type RoomPageProps = {
  roomId: string
}

const RoomPage = ({ roomId }: RoomPageProps) => {
  const [deviceName, setDeviceName] = useState('')
  const [createDevice, { loading, error }] = useMutation(CREATE_DEVICE_MUTATION, {
      onCompleted: () => {
        setDeviceName('')
      },
    })

  const onSubmit = async (e: React.FormEvent) => {
      if (!deviceName.trim()) return
      await createDevice({ variables: { input: { device_name: deviceName, room_id: parseInt(roomId, 10) }},
      }
    )
  }

  return (
    <>
      <Metadata title="Room" description="Room page" />

      <MainLayout>
        <div className={styling.container}>
          <div className={styling.column1}>
            <Link to={routes.overview()} className={styling.noLink}>
              <h2 className={styling.arrowText}>
                <img src="/arrow.png" alt="Arrow" width={15} height={15} />
                Overview
              </h2>
            </Link>
            <ScrollableDevices selectedRoomId={parseInt(roomId, 10)}/>
            <h2 className={styling.deleteText}>Delete room</h2>
          </div>
          <div className={styling.column2}>
            <label className={styling.label}>
              <form onSubmit={onSubmit}>
                <h2>Add new device</h2>
                <label className={styling.label}>
                  <input type="text" value={deviceName} onChange={(e) => setDeviceName(e.target.value)} placeholder="Device name, e.g. 'TV'" className={styling.input}/>
                  <button type="submit" className={styling.button}>Add</button>
                </label>
              </form>
            </label>
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
