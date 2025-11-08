import { useMutation } from '@redwoodjs/web'
import gql from 'graphql-tag'

export const schema = gql`
  type Device {
    id: Int!
    device_name: String!
    room_id: Int!
  }

  type Query {
    devices: [Device!]! @requireAuth
  }

  type SuccessMessage {
    message: String!
  }

  input CreateDeviceInput {
    device_name: String!
    room_id: Int!
  }

  type Mutation {
    createDevice(input: CreateDeviceInput!): Device! @requireAuth
    deleteDevice(id: Int!): Device! @requireAuth
  }
`

