import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Recipe Sharing App
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header
