import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material/CssBaseline'
import theme from './theme'
import Header from './components/Header'
import HomePage from './pages/HomePage'


function App() {

  return (
    <div>
      <Header />
      <HomePage />
    </div>
  )
}

export default App
