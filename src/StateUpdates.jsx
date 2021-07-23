import React, {useState} from 'react'

export function StateUpdates() {
  const [showComponent, setShowComponent] = useState(false)

  return (<section>
    <h2>A component renders when its state changes</h2>
    <p>If you click set state to current state, the component will re-render once, but not again. I don't know why.</p>
    <label style={{ display: 'block' }}>
      <input type="checkbox" checked={showComponent} onChange={() => setShowComponent(v => !v)} />
      Show component
    </label>
    {showComponent && <Component />}

  </section>)
}

function Component() {
  console.log('Component re-renders when state updates')
  const [componentState, setComponentState] = useState({ colour: '#ff3333', number: 18 })

  const updateColour = (event) => {
    const colour = event.currentTarget.value;
    setComponentState((state) => ({ ...state, colour }))
  }

  const updateNumber = (event) => {
    const number = event.currentTarget.value;
    setComponentState((state) => ({ ...state, number }))
  }

  const setRandomState = () => {
    setComponentState({ number: 4, colour: '#663399' })
  }

  const setCurrentState = () => {
    setComponentState(componentState)
  }

  return (<> 
    <div>The colour is {componentState.colour}</div>
    <div>The number is {componentState.number}</div>
    <input type="color" value={componentState.colour} onChange={updateColour} />
    <input type="number" value={componentState.number} onChange={updateNumber} />
    <button onClick={setRandomState}>Set random state</button>
    <button onClick={setCurrentState}>Set state to the current state</button>
  </>)
}