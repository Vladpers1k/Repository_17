import React from 'react'
import { useAppContext } from '../context/AppContext'

const Users = () => {
  const { users } = useAppContext()

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users
