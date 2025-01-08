import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const About = () => {
  const { settings, setSettings } = useContext(AppContext)

  const toggleTheme = () => {
    setSettings((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light'
    }))
  }

  return (
    <div>
      <h1>About</h1>
      <p>Theme: {settings.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default About
