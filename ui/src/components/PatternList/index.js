import React, { useEffect } from 'react'
import './style.css'

const arr = ['Standard Pattern']

const PatternList = () => {
    const [activePattern, setActivePattern] = React.useState(0)
    const [pattrens, setPattrens] = React.useState(arr)

    useEffect(() => {
        localStorage.setItem("count", 1)
    }, [])

    const addNewPattern = () => {
        debugger
        const count = localStorage.getItem("count")
        setPattrens(`New Pattern ${count}`)
        // localStorage.setItem("count", (Number(count) + 1))
        // setActivePattern(pattrens.length)
    }

    return (
        <aside className='sidebar patterns'>
            <h2>Templates Palette</h2>
            <div className='patternList'>
                {pattrens.length !== 0 && pattrens.map((item, i) => (
                    i === activePattern ?  (<span className='active' key={item}>{item}</span>) 
                    : (<span onClick={() => setActivePattern(i)} key={item}>{item}</span>)
                ))}
            </div>
            <button onClick={() => addNewPattern()} className='button_createPattern'>+ Create New Pattern</button>
        </aside>
    )
}

export default PatternList
