import ReactDOM from 'react-dom'
import './index.css'
import { App } from './Components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProvider } from './context/context'

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
)
