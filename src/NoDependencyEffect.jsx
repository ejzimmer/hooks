import React, { useEffect, useState } from 'react'

export function NoDependencyEffect() {
  const [showComponent, setShowComponent] = useState(false)

  return (<section>
    <h2>An effect is called <i>after</i> the component renders</h2>
    <p>It doesn't cause another render</p>
    <label style={{ display: 'block' }}>
      <input type="checkbox" checked={showComponent} onChange={() => setShowComponent(v => !v)} />
      Show component
    </label>
    {showComponent && <Component />}
  </section>)
}

function Component() {
  console.log('component with effect renders')
  const [, setCount] = useState(0)

  useEffect(() => { 
    console.log('the effect is called')
  })

  const forceRender = () => setCount(n => ++n)

  return <button onClick={forceRender}>Make component re-render</button>
}