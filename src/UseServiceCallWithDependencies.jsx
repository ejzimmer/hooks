import React, { useState } from 'react'
import { useServiceCall } from './useServiceCall'

export function UseServiceCallWithDependencies() {
  const [showComponent, setShowComponent] = useState(false)

  return (<section>
    <h2>Use service call makes a new network request when the dependencies change</h2>
    <label style={{ display: 'block' }}>
      <input type="checkbox" checked={showComponent} onChange={() => setShowComponent(v => !v)} />
      Show component
    </label>
    {showComponent && <Component />}
  </section>)
}

function Component() {
  console.log('component with useServiceCall with dependencies called')
  const [,setCount] = useState(0)
  const [startingNumber, setStartingNumber] = useState(0)
  const { loading, data } = useServiceCall('numbersService', 'getNumbers', { startingNumber }, { deps: [startingNumber] })

  return (<>
    <div>{loading ? 'loading...' : `The response is ${data}`}</div>
    <div>The startingNumber is {startingNumber}</div>
    <button onClick={() => setStartingNumber(n => ++n)}>Increment starting number</button>
    <button onClick={() => setCount(n => ++n)}>Force component to re-render</button>
  </>)
}