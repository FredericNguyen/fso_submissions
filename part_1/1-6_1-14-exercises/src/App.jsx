import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)
  
    const addGoodFeedback = () => {
        const updatedGood = good + 1
        setGood(updatedGood)
        setAverage((updatedGood + bad*(-1))/(updatedGood + neutral + bad))
        setPositive(updatedGood/(updatedGood + neutral + bad)*100)
    }
    const addNeutralFeedback = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
        setAverage((good + bad*(-1))/(good + updatedNeutral + bad))
        setPositive(good/(good + updatedNeutral + bad)*100)

    }
    const addBadFeedback = () => {
        const updatedBad = bad + 1
        setBad(updatedBad)
        setAverage((good + updatedBad*(-1))/(good + neutral + updatedBad))
        setPositive(good/(good + neutral + updatedBad)*100)

    }
    return (
        <div>
        <h1>give feedback</h1>
        <div>
            <Button onClick={addGoodFeedback} text='good'/>  
            <Button onClick={addNeutralFeedback} text='neutral'/>
            <Button onClick={addBadFeedback} text='bad'/>
        </div>
        <h1>statistics</h1>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>average {average}</div>
        <div>positive {positive}%</div>
        </div>
    )
}

export default App