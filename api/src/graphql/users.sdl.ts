import { gql, useMutation } from '@redwoodjs/web'

export const schema = gql`

  type User {
    id: Int!
    email: String!
  }

  type Query {
    users: [User!]! @requireAuth
  }

  type SuccessMessage {
    message: String!
  }

  type Mutation {
    updateMyPassword(newPassword: String!): SuccessMessage! @requireAuth
  }
`

