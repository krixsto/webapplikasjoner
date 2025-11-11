// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout'
import styling from './OverviewPage.module.css'
import ScrollableRooms from 'src/components/ScrollableRooms'
import { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@redwoodjs/web'
import gql from 'graphql-tag'
import React from 'react'
import { useAuth } from 'src/auth'
import UserListDisplay from 'src/components/UserListDisplay'
import ToggleSwitch from 'src/components/ToggleSwitch'

const CREATE_ROOM_MUTATION = gql`
  mutation CreateRoomMutation($input: CreateRoomInput!) {
    createRoom(input: $input) {
      id
      room_name
      userId
    }
  }
`

const USERS_QUERY = gql`
  query UsersQuery {
    users {
      id
      email
    }
  }
`

const TOGGLE_ALL_DEVICES = gql`
  mutation ToggleAllDevices($status: Boolean!) {
    toggleAllDevices(status: $status)
  }
`

const OverviewPage = () => {
  const [allDevicesOn, setAllDevicesOn] = useState(false)
  const [toggleAllDevices] = useMutation(TOGGLE_ALL_DEVICES)
  const { currentUser } = useAuth()
  const [roomName, setRoomName] = useState('')
  const [homeWork, setHomeWork] = useState<'home' | 'work'>(() => (localStorage.getItem("homeWork") as 'home' | 'work') || 'home');
  const [showUserList, setShowUserList] = useState(false)
  const { data: user_data } = useQuery(USERS_QUERY)
  const [createRoom, { loading, error }] = useMutation(CREATE_ROOM_MUTATION, {
    onCompleted: () => {
      setRoomName('')
    },
  })

  useEffect(() => {
    localStorage.setItem("homeWork", homeWork);
  }, [homeWork])

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
          <h1>Room overview</h1>
          <div className={styling.upperLowerArea}>
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

            <ToggleSwitch
            checked={allDevicesOn}
            onChange={() => {
              const newStatus = !allDevicesOn
              toggleAllDevices({ variables: { status: newStatus } })
              setAllDevicesOn(newStatus)
            }}
            label={allDevicesOn ? 'Turn off all devices' : 'Turn on all devices'}
          />

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
            <h2 style={{ cursor: 'pointer' }} onClick={() => setShowUserList(!showUserList)}>{showUserList ? '' : 'View members'}</h2>
            {showUserList && user_data && (
              <div className={styling.userDisplayOverlay}>
                <div className={styling.userDisplayContent}>
                  <UserListDisplay users={[currentUser]}/>
                  <h2 style={{ cursor: 'pointer' }} onClick={() => setShowUserList(!showUserList)}>{showUserList ? 'Hide members' : 'View members'}</h2>
                </div>
              </div>
            )}
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
