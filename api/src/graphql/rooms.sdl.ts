import { gql, useMutation } from '@redwoodjs/web'

export const schema = gql`
  type Room {
    id: Int!
    room_id: Int
    room_name: String!
  }

  type Query {
    rooms: [Room!]! @requireAuth
  }
`