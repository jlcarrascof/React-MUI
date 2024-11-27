import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import React, {useState} from 'react'

function Header() {
  return (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Recipe Sharing App
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Recipes</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header
