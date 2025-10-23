import { gql, useMutation } from '@redwoodjs/web'

export const schema = gql`

  type Device {
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
  }
`

