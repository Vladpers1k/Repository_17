import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import UserList from './Nested/UserList'

const Users = () => {
  const { users } = useContext(AppContext)

  return (
    <div className="users-page">
      <h2>Users Page</h2>
      <UserList users={users} />
    </div>
  )
}

export default Users
