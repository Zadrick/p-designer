import React from 'react'
import './style.css'

const pattrens = ['pattern one', 'pattern two']

const PatternList = () => {
    const [activePattern, setActivePattern] = React.useState(0)

    return (
        <aside className='sidebar patterns'>
            <h2>Templates Palette</h2>
            <div className='patternList'>
                {pattrens.map((item, i) => (
                    i === activePattern ?  (<span className='active' key={item}>{item}</span>) 
                    : (<span onClick={() => setActivePattern(i)} key={item}>{item}</span>)
                ))}
            </div>
            <button className='button_createPattern'>+ Create New Pattern</button>
        </aside>
    )
}

export default PatternList
