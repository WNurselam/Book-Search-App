import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from "react-query";

// İmport Chakra UI tema
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
// React Query Provider
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ChakraProvider>

)
