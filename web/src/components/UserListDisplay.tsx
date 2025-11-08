import { useState } from 'react'
import { useQuery } from '@redwoodjs/web'
import gql from 'graphql-tag'

const UserListDisplay = ({ users }) => {

  return (
    <ul style={{ textAlign: 'left' }}>
      <h4>List of members:</h4>
      {users.map((user) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </ul>
  )
}

export default UserListDisplay