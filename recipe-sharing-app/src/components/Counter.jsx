import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <p>The counter is in: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter
