import { Button } from '@mui/material'
import React from 'react'

function ButtonDemo() {
  return (
    <div>
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='outlined' color='secondary'>Secondary</Button>
        <Button variant='text' color='success'>Success</Button>
    </div>
  )
}

export default ButtonDemo
