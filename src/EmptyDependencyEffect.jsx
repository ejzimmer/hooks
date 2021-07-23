import React, { useEffect, useState } from 'react'

export function EmptyDependencyEffect() {
  const [showComponent, setShowComponent] = useState(false)

  return (<section>
    <h2>An effect with an empty dependency array is only called once</h2>
    <label style={{ display: 'block' }}>
      <input type="checkbox" checked={showComponent} onChange={() => setShowComponent(v => !v)} />
      Show component
    </label>
    {showComponent && <Component />}
  </section>)
}

function Component() {
  console.log('component with empty effect dependency array renders')
  const [, setCount] = useState(0)

  useEffect(() => { 
    console.log('effect with empty dependency array is called')
  }, [])

  const forceRender = () => setCount(n => ++n)

  return <button onClick={forceRender}>Make component re-render</button>
}