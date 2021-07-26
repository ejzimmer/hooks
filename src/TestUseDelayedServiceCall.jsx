import React, { useState } from 'react'
import { useDelayedServiceCall } from './useDelayedServiceCall'

export function TestUseDelayedServiceCall() {
  const [showComponent, setShowComponent] = useState(false)

  return (<section>
    <h2>useDelayedServiceCall returns a callback we can use to make a network request any time</h2>
    <label style={{ display: 'block' }}>
      <input type="checkbox" checked={showComponent} onChange={() => setShowComponent(v => !v)} />
      Show component
    </label>
    {showComponent && <Component />}
  </section>)
}

function Component() {
  console.log('component with useDelayedServiceCall renders')
  const [myNumber, setMyNumber] = useState(0)
  const [{loading, data}, fetch] = useDelayedServiceCall('numbersService', 'double')

  return (
    <>
      <input type="number" value={myNumber} onChange={({currentTarget}) => setMyNumber(currentTarget.value)} />
      <button onClick={() => fetch(myNumber)}>Get double!</button>
      <div>{loading && 'loading...'}</div>
      {data !== undefined && <div>You picked {myNumber}. Double {myNumber} is {data}</div>}
    </>
  )
}