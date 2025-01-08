import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    theme: 'light',
    language: 'en'
  })

  return <AppContext.Provider value={{ settings, setSettings }}>{children}</AppContext.Provider>
}
