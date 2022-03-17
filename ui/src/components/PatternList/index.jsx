import React from 'react'
import './style.css'

const arr = ['Standard Pattern', 'newPattern']

const PatternList = () => {
    const [activePattern, setActivePattern] = React.useState(0)
    const [count, setCount] = React.useState(1)
    const [pattrens, setPattrens] = React.useState(arr)

    const addNewPattern = () => {
        setPattrens([...pattrens, `New Pattern ${count}`])
        setCount(count + 1)
        setActivePattern(pattrens.length)
    }

    return (
        <aside className='sidebar patterns'>
            <h2>Templates Palette</h2>
            <div className='patternList'>
                {pattrens.length > 0 && pattrens.map((item, i) => (
                    i === activePattern ?  (<span className='active' key={item}>{item}</span>) 
                    : (<span onClick={() => setActivePattern(i)} key={item}>{item}</span>)
                ))}
            </div>
            <button onClick={() => addNewPattern()} className='button_createPattern'>+ Create New Pattern</button>
        </aside>
    )
}

export default PatternList
