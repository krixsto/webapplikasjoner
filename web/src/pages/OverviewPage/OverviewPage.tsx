// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout'
import styling from './OverviewPage.module.css'
import ScrollableRooms from 'src/components/ScrollableRooms'
import { useState } from 'react'
import { gql, useMutation } from '@redwoodjs/web'
import React from 'react'
import { useAuth } from 'src/auth'

const CREATE_ROOM_MUTATION = gql`
  mutation CreateRoomMutation($input: CreateRoomInput!) {
    createRoom(input: $input) {
      id
      room_name
      userId
    }
  }
`

const OverviewPage = () => {
  const { currentUser } = useAuth()
  const [roomName, setRoomName] = useState('')
  const [homeWork, setHomeWork] = useState('home')
  const [createRoom, { loading, error }] = useMutation(CREATE_ROOM_MUTATION, {
    onCompleted: () => {
      setRoomName('')
    },
  })

  const onSubmit = async (e: React.FormEvent) => {
    if (!roomName.trim()) return
    await createRoom({ variables: { input: { room_name: roomName, userId: currentUser.id, home_work: homeWork }},
    })
  }

  return (
    <>
      <Metadata title="Overview" description="Room overview" />

      <MainLayout>
        <div className={styling.container}>
          <div className={styling.upperLowerArea}>
            <h2>Room overview</h2>
            <div className={styling.rectangleContainer}>
              <div role="button" tabIndex={0} onClick={() => setHomeWork('home')} className={`${styling.rectangle} ${homeWork === 'home' ? styling.selected : ''}`}>
                Home
              </div>
              <div role="button" tabIndex={0} onClick={() => setHomeWork('work')} className={`${styling.rectangle} ${homeWork === 'work' ? styling.selected : ''}`}>
                Work
              </div>
            </div>
          </div>
          <div className={styling.sideAreaContainer}>
            <div className={styling.sideArea}>
              <h2 className={styling.leftText}>(SWITCH) Turn on all devices</h2>
              <ScrollableRooms selectedHomeWork={homeWork}/>
            </div>
            <div className={styling.sideArea}>
              <form onSubmit={onSubmit} className={styling.form}>
                <label className={styling.label}>
                  <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} placeholder="Room name" className={styling.input}/>
                </label>
                <button type="submit" className={styling.button}>Add</button>
              </form>
            </div>
          </div>
          <div className={styling.upperLowerArea}>
            <h2>View members</h2>
          </div>
        </div>
      </MainLayout>

      {/*
          My default route is named `overview`, link to me with:
          `<Link to={routes.overview()}>Overview</Link>`
      */}
    </>
  )
}

export default OverviewPage
