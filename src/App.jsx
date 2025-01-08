import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppProvider } from './context/AppContext'
import routes from './routes'

const App = () => {
  return (
    <AppProvider>
      <div>
        <h1>React Context Demo</h1>
        {routes}
      </div>
    </AppProvider>
  )
}

export default App
