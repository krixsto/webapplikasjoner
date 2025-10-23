import { gql, useMutation } from '@redwoodjs/web'

export const schema = gql`
  type Room {
    id: Int!
    room_name: String!
    userId: Int!
  }

  type Query {
    rooms: [Room!]! @requireAuth
  }

  input CreateRoomInput {
    room_name: String!
  }

  type Mutation {
    createRoom(input: CreateRoomInput!, userId: Int!): Room! @requireAuth
  }
`