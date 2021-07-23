import React, { useEffect, useState } from 'react'

export function EffectWithDependencies() {
  const [showComponent, setShowComponent] = useState(false)

  return (<section>
    <h2>An effect with dependencies is called when the dependencies change</h2>
    
    <label style={{ display: 'block' }}>
      <input type="checkbox" checked={showComponent} onChange={() => setShowComponent(v => !v)} />
      Show component
    </label>
    {showComponent && <Component />}
  </section>)
}

function Component() {
  console.log('component with effect with dependencies renders')
  const [number, setNumber] = useState(0)
  const [colour, setColour] = useState('#5533ee')

  useEffect(() => { 
    console.log('the colour changed!')
  }, [colour])

  const updateNumber = ({currentTarget}) => {
    const number = currentTarget.value
    setNumber(number)
  }
  const updateColour = ({currentTarget}) => {
    const colour = currentTarget.value
    setColour(colour)
  }

  return (<>
    <input type="color" value={colour} onChange={updateColour} />
    <input type="number" value={number} onChange={updateNumber} />
  </>)
}