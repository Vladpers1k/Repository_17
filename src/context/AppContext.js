import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ])

  const [settings, setSettings] = useState({ theme: 'light', notifications: true })

  return <AppContext.Provider value={{ users, setUsers, settings, setSettings }}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
