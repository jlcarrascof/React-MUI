import React from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'

function GridDemo() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: 'lightcoral', padding: '20px' }} >
            Column 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: 'lightblue', height: '100px' }} />
        </Grid>
      </Grid>
    </div>
  )
}

export default GridDemo
