import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
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
