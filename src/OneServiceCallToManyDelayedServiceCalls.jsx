import React, { useMemo, useEffect, useRef, useState } from 'react'
import { useServiceCall } from './useServiceCall'
import { useDelayedServiceCall } from './useDelayedServiceCall'

export function OneServiceCallToManyDelayedServiceCalls() {
  const [showComponent, setShowComponent] = useState(false)

  return (<section>
    <h2>We can make many delayed service calls after a single service call</h2>
    <label style={{ display: 'block' }}>
      <input type="checkbox" checked={showComponent} onChange={() => setShowComponent(v => !v)} />
      Show component
    </label>
    {showComponent && <Component />}
  </section>)
}

function Component() {
  console.log('component that makes many service calls after a delayed service call renders')

  const newNumberRef = useRef()
  const [numbersWithDoubles, setNumbersWithDoubles] = useState([])
  const { loading, data } = useServiceCall('numbersService', 'getNumbers', { startingNumber: 2 })

  const params = useMemo(() => ({
      onSuccess: (double, number) => {
        setNumbersWithDoubles(numbersWithDoubles => numbersWithDoubles.map(numberWithDouble => {
          if (numberWithDouble.number === number) return { number, double }
          return numberWithDouble
        }))
      }
    }
  ), [])

  const [,fetchDouble] = useDelayedServiceCall('numbersService', 'double', params)

  useEffect(() => {
    if (Array.isArray(data)) {
      setNumbersWithDoubles(data.map(number => ({ number })))
    }
  }, [data])

  useEffect(() => {
    numbersWithDoubles.filter(({double}) => !double).forEach(({number}) => fetchDouble(number))
  }, [numbersWithDoubles, fetchDouble])

  const addNewNumber = () => setNumbersWithDoubles(numbers => [...numbers, { number: newNumberRef.current.value }])

  return (<>
    <div>{loading && 'fetching initial numbers...'}</div>
    {numbersWithDoubles.length > 0 && (<><ul>
      { numbersWithDoubles.map(({ number, double }) => (
        <li key={number}>
          {number} x 2 = {!double && 'fetching double...'} {double}
        </li>)) }
    </ul>
    <input type="number" ref={newNumberRef} /><button onClick={addNewNumber}>Add another number</button>
    </>)}
  </>)
}