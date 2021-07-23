import React, { useState } from 'react'

export function PropsChange() {
  const [showComponent, setShowComponent] = useState(false)

  return (
    <section>
      <h2>A component re-renders when its props change</h2>
      <label style={{ display: 'block' }}>
        <input type="checkbox" checked={showComponent} onChange={() => setShowComponent(v => !v)} />
        Show component
      </label>
      {showComponent && <Component />}
    </section>
  )
}

function Component() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((count) => ++count)

  return (<>
    <button onClick={incrementCount}>Increment child component count prop</button>
    <PropsChangeChild count={count} />
  </>)

}

function PropsChangeChild({ count }) {
  console.log('My props changed, I\'m rendering!')

  return <div>The count is currently {count}</div>
}