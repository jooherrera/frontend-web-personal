import ReactDOM from 'react-dom'
import './index.css'
import { App } from './Components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProvider } from './context/context'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <ChakraProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </ChakraProvider>,
  document.getElementById('root')
)
