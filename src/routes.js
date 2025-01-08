import Home from './components/Home'
import Users from './components/Users'
import Settings from './components/Settings'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/users', element: <Users /> },
  { path: '/settings', element: <Settings /> }
]

export default routes
