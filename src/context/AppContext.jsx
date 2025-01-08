import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ])

  const [settings, setSettings] = useState({
    theme: 'light'
  })

  return (
    <AppContext.Provider value={{ users, setUsers, settings, setSettings }}>
      <div className={settings.theme}>{children}</div>
    </AppContext.Provider>
  )
}
