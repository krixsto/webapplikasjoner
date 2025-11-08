import gql from 'graphql-tag'

export const schema = gql`
  type Room {
    id: Int!
    room_name: String!
    userId: Int!
    home_work: String!
  }

  type Query {
    rooms: [Room!]! @skipAuth
  }

  input CreateRoomInput {
    room_name: String!
    userId: Int!
    home_work: String!
  }

  type Mutation {
    createRoom(input: CreateRoomInput!): Room! @requireAuth
    deleteRoom(id: Int!): Room! @requireAuth
  }
`