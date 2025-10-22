import { gql, useMutation } from '@redwoodjs/web'

export const schema = gql`
  type SuccessMessage {
    message: String!
  }

  type Mutation {
    updateMyPassword(newPassword: String!): SuccessMessage! @requireAuth
  }
`

