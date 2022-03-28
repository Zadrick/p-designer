import React from 'react'
import './style.css'
import { useStore } from '../../hooks'
import ModalCreate from '../ModalCreate'
import { observer } from 'mobx-react'

const PatternList = observer(() => {
    const { postPattern, patternList, getPatternList, setActivePettern, activePattern } = useStore('patternStore')
    const [isCreateModal, setCreateModal] = React.useState(false)

    React.useEffect(() => {
        getPatternList()
    }, [])

    const addNewPattern = patternName => {
        postPattern(patternName)
    }

    const onClickPattern = id => {
        setActivePettern(id)
    }

    return (
        <>
        <aside className='sidebar patterns'>
            <h2>Templates Palette</h2>
            <div className='patternList'>
                {patternList.map((item, i) => (
                    item.id === activePattern ?  (<span className='active' key={item.id}>{item.name}</span>) 
                    : (<span onClick={() => onClickPattern(item.id)} key={item.id}>{item.name}</span>)
                ))}
            </div>
            <button onClick={() => setCreateModal(true)} className='button_createPattern'>+ Create New Pattern</button>
        </aside>
        {isCreateModal ? <ModalCreate title="A New Project Pattern" inputName="Pattern Name" saveFunc={addNewPattern} disardFunc={setCreateModal} /> : (<></>)}
        </>
    )
})

export default PatternList
