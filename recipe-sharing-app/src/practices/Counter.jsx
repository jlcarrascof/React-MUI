import { Button } from '@mui/material'
import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <p>The counter is in: {count}</p>
        <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
            Increment
        </Button>
        <br />
        <Button variant="contained" color="secondary" onClick={() => setCount(count - 1)}>
            Decrement
        </Button>
    </div>
  )
}

export default Counter
