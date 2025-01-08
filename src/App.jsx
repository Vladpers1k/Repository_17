import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router'
import { AppProvider } from './context/AppContext'
import routes from './routes'

const router = createBrowserRouter(routes)

const App = () => {
  return (
    <AppProvider>
      <nav>
        <a href="/">Home</a> | <a href="/users">Users</a> | <a href="/settings">Settings</a>
      </nav>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App
