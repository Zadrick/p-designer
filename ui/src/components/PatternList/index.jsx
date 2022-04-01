import React from 'react'
import './style.css'
import { observer } from 'mobx-react'

const PatternList = observer(({ list, componentName, buttonName, activeItem, changeActive, createNewItem }) => {

    return (
        <aside className='sidebar patterns'>
            <h2>{componentName}</h2>
            <div className='patternList'>
                {list.map(item => (
                    item.id === activeItem ?  (<span className='active' key={item.id}>{item.name}</span>) 
                    : (<span onClick={() => changeActive(item.id)} key={item.id}>{item.name}</span>)
                ))}
            </div>
            <button onClick={() => createNewItem(true)} className='button_createPattern'>{buttonName}</button>
        </aside>
    )
})

export default PatternList
