import React, { useState } from 'react'

export function ParentRerenders() {
  const [showComponent, setShowComponent] = useState(false)

  return (<section>
    <h2>A component re-renders when its parent rerenders</h2>
    <label style={{ display: 'block' }}>
      <input type="checkbox" checked={showComponent} onChange={() => setShowComponent(v => !v)} />
      Show component
    </label>
    {showComponent && <ParentComponent />}
  </section>)
}

function ParentComponent() {
  console.log('parent re-renders')
  const [, setCount] = useState(1)

  // force re-render by updating state
  const forceRender = () => setCount(n => ++n)
  
  return (
    <>
      <button onClick={forceRender}>Make parent re-render</button>
      <ChildComponent />
    </>
  )
}

function ChildComponent() {
  return <div>child component</div>
}