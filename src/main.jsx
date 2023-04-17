import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider,extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  fonts: {
    body: ` 'Roboto Slab', serif;`,
    heading: `'Roboto Slab', serif;`,
  },
  styles: {
    global: {
      "html, body": {
        bg: "#F7FAFC",
        color: "RGBA(0, 0, 0, 0.80)"
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>

)
