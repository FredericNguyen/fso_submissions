import { useState } from 'react'

const Button = () => {
    return (
        <button></button>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <h1>statistics</h1>
    </div>
  )
}

export default App