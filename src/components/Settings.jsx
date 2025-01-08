import React from 'react'
import { useAppContext } from '../context/AppContext'

const Settings = () => {
  const { settings, setSettings } = useAppContext()

  const toggleTheme = () => {
    setSettings((prev) => ({ ...prev, theme: prev.theme === 'light' ? 'dark' : 'light' }))
  }

  return (
    <div>
      <h1>Settings</h1>
      <p>Current Theme: {settings.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Settings
