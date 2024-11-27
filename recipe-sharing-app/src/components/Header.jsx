import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'light' : 'dark'
    )
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          Recipe Sharing App
        </Typography>
        <Link to='/' style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          Home
        </Link>
        <Link to='/add-recipe' style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          Add Recipe
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
