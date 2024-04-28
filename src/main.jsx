import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoute from './AppRoute'
import { ChakraProvider } from '@chakra-ui/react'

import "@fontsource/mulish";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <AppRoute />
    </ChakraProvider>
  </React.StrictMode>,
)
