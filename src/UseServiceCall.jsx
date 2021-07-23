import React, { useState } from 'react'
import { useServiceCall } from './useServiceCall'

export function UseServiceCall() {
  const [showComponent, setShowComponent] = useState(false)

  return (<section>
    <h2>useServiceCall makes a single network request, and re-renders when it returns</h2>
    <label style={{ display: 'block' }}>
      <input type="checkbox" checked={showComponent} onChange={() => setShowComponent(v => !v)} />
      Show component
    </label>
    {showComponent && <Component />}
  </section>)
}

function Component() {
  console.log('component with useServiceCall re-renders')
  const { data, loading } = useServiceCall('numbersService', 'getNumbers', { startingNumber: 3 });
  const [,setCount] = useState(0)

  const forceRender = () => setCount(n => ++n)

  return (<>    
    <div>{loading ? 'loading...' : `The response is ${data}`}</div>
    <button onClick={forceRender}>Make component re-render</button>
  </>)
}