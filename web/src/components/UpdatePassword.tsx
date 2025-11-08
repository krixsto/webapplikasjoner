import { useState } from 'react'
import { useMutation } from '@redwoodjs/web'
import gql from 'graphql-tag'
import * as React from 'react'
import styling from './UpdatePassword.module.css'
import { useAuth } from 'src/auth'

const UPDATE_PASSWORD_MUTATION = gql`
  mutation UpdateMyPassword($newPassword: String!) {
    updateMyPassword(newPassword: $newPassword) {
      message
    }
  }
`

export const UpdatePasswordSection = () => {
  const [newPassword, setNewPassword] = useState('')
  const { logOut } = useAuth()

  const [updatePassword] = useMutation(UPDATE_PASSWORD_MUTATION, {
    onCompleted: (data) => {
      setNewPassword('')
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await updatePassword({ variables: { newPassword }})
  }

  return (
    <form onSubmit={handleSubmit} className={styling.form}>
      <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className={styling.input}/>
      <button type="submit" className={styling.button}>UPDATE</button>
      <a href="#" onClick={(e) => { e.preventDefault(); logOut({ redirectTo: '/' }) }}>Log out</a>
    </form>
  )
}