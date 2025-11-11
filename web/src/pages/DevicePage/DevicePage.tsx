import { Link, routes, navigate, useParams } from '@redwoodjs/router'
import { Metadata, useMutation, useQuery } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout'
import styling from './DevicePage.module.css'
import DeleteButton from 'src/components/DeleteButton'
import gql from 'graphql-tag'

const DELETE_DEVICE_MUTATION = gql`
  mutation DeleteDeviceMutation($id: Int!) {
    deleteDevice(id: $id) {
      id
  }
}
`

const GET_DEVICE_BY_ID = gql`
  query GetDeviceById($id: Int!) {
    device(id: $id) {
      id
      device_status
    }
  }
`

const DevicePage = () => {
  const { roomId, deviceId } = useParams()

  const { data, loading, error } = useQuery(GET_DEVICE_BY_ID, {
    variables: { id: parseInt(deviceId, 10) },
  })

  const [deleteDevice] = useMutation(DELETE_DEVICE_MUTATION, {
    onCompleted: () => {
      navigate(routes.room({ roomId }))
    },
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  const device = data.device

  return (
    <>
      <Metadata title="Device" description="Device page" />

      <MainLayout>
        <div className={styling.outerContainer}>
          <h1>Details</h1>
          <div className={styling.container}>
            <div className={styling.sideArea1}>
              <Link to={routes.room({ roomId })} className={styling.noLink}>
                <h2 className={styling.arrowText}>
                  <img src="/arrow.png" alt="Arrow" width={15} height={15} />
                  Device overview
                </h2>
              </Link>
              <div className={styling.rectangle}>
                <h2 className={styling.normalText}>ID: {device.id}</h2>
                <h2 className={styling.normalText}>Status: {device.device_status ? 'ON' : 'OFF'}</h2>
                <h2 className={styling.normalText}>Duration: 2h</h2>
              </div>

              <DeleteButton
              onClick={() => deleteDevice({ variables: { id: parseInt(deviceId, 10) } })}
              className={styling.deleteText}
              >
                Delete device
              </DeleteButton>

            </div>
            <div className={styling.sideArea2}>
              <h2>Schedule</h2>
              <h2 className={styling.normalText}>Action: (SWITCH)</h2>
              <h2 className={styling.normalText}>Time: (TIME INPUT)</h2>
              <button type="submit" className={styling.button}>Save</button>
            </div>
          </div>
        </div>
      </MainLayout>

      {/*
          My default route is named `device`, link to me with:
          `<Link to={routes.device({ roomId: '42' })}>Device 42</Link>`
      */}
    </>
  )
}

export default DevicePage
