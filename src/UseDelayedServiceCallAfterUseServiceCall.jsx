import React, { useState, useRef, useEffect } from 'react'
import { useServiceCall } from './useServiceCall'
import { useDelayedServiceCall } from './useDelayedServiceCall'

export function UseDelayedServiceCallAfterUseServiceCall() {
  const [showComponent, setShowComponent] = useState(false)

  return (<section>
    <h2>We can call useDelayedServiceCall with the result from useServiceCall</h2>
    <label style={{ display: 'block' }}>
      <input type="checkbox" checked={showComponent} onChange={() => setShowComponent(v => !v)} />
      Show component
    </label>
    {showComponent && <Component />}
  </section>)
}

function Component() {
  const [startingNumber, setStartingNumber] = useState(0)
  const startingNumberRef = useRef()

  const { loading: loadingNumbers, data: numbers } = useServiceCall(
    'numbersService', 
    'getNumbers', 
    { startingNumber }, 
    { deps: [startingNumber] 
  })

  const [{loading: loadingDouble, data: double}, fetchDouble] = useDelayedServiceCall('numbersService', 'double')

  const largestNumber = Array.isArray(numbers) && Math.max(...numbers)

  useEffect(() => {
    largestNumber && fetchDouble(largestNumber)
  }, [largestNumber, fetchDouble])

  return (<>
    <div>
      <input type="number" ref={startingNumberRef} />
      <button onClick={() => setStartingNumber(startingNumberRef.current.value)}>Update starting number</button>
      <div>{ loadingNumbers && 'fetching numbers...' }</div>
      { numbers && <div>The largest number is {largestNumber}</div>}
      <div>{ loadingDouble && 'fetching double...' }</div>
      { double !== undefined && <div>The double of {largestNumber} is {double}</div>}
    </div>
  </>)
}