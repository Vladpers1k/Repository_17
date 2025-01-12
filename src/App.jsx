import { Provider } from 'react-redux'
import store from './store/store'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import routes from './routes'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>React Redux Demo</h1>
        {routes}
      </div>
    </Provider>
  )
}

export default App
