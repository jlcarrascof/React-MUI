import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material/CssBaseline'
import theme from './theme'
import Header from './components/Header'
import HomePage from './pages/HomePage'


function App() {

  return (
    <ThemeProvider>
      <CssBaseline />
      <Header />
      <HomePage />
    </ThemeProvider>
  )
}

export default App
