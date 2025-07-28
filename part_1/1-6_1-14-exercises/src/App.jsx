import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({statistic, text}) => {
    if (text == "positive") {
        return <div>{text} {statistic}%</div>
    }
    return <div>{text} {statistic}</div>
}

const Statistics = (props) => {
    if (props.good + props.neutral + props.bad != 0) {
        return (
            <>
            <h1>statistics</h1>
            <StatisticLine statistic={props.good} text="good"/>
            <StatisticLine statistic={props.neutral} text="neutral"/>
            <StatisticLine statistic={props.bad} text="bad"/>
            <StatisticLine statistic={(props.good + props.bad*(-1))/(props.good + props.neutral + props.bad)} text="average"/>
            <StatisticLine statistic={props.good/(props.good + props.neutral + props.bad)*100} text="positive"/>
            <StatisticLine statistic={props.good + props.neutral + props.bad} text="all"/>
            </>
        )
    }
    return (
        <>
        <br />
        <div>No feedback given</div>
        </>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
    const addGoodFeedback = () => {
        const updatedGood = good + 1
        setGood(updatedGood)
    }
    const addNeutralFeedback = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
    }
    const addBadFeedback = () => {
        const updatedBad = bad + 1
        setBad(updatedBad)
    }
    return (
        <div>
        <h1>give feedback</h1>
        <div>
            <Button onClick={addGoodFeedback} text='good'/>  
            <Button onClick={addNeutralFeedback} text='neutral'/>
            <Button onClick={addBadFeedback} text='bad'/>
        </div>
        <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App