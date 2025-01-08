import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Contact = () => {
  const { settings } = useContext(AppContext)

  return (
    <div>
      <h1>Contact</h1>
      <p>Current Theme: {settings.theme}</p>
      <p>Language: {settings.language}</p>
    </div>
  )
}

export default Contact
