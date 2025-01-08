import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Settings = () => {
  const { settings, setSettings } = useContext(AppContext)

  const toggleTheme = () => {
    setSettings((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light'
    }))
  }

  return (
    <div>
      <h2>Settings Page</h2>
      <p>Current Theme: {settings.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Settings
