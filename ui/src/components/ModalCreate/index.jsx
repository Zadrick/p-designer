import React from 'react'
import './Style.scss'

const ModalCreate = ({title, inputName, disardFunc, saveFunc}) => {
    const [inputValue, setInputValue] = React.useState('')

    const onCreatePattern = () => {
        saveFunc(inputValue)
        disardFunc(false)
    }

    const onDisardChanges = () => {
        disardFunc(false)
    }


    return (
        <div className='modal-create'>
            <div className="modal-create__title"><h2>{title}</h2></div>
            <div className="modal-create__input">
                <p>{inputName}</p>
                <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            </div>
            <div className="modal-create__buttons">
                <button onClick={onCreatePattern} className="modal-create__save">Save and Go back</button>
                <button onClick={onDisardChanges} className="modal-create__disard">Discard changes</button>
            </div>
        </div>
    )
}

export default ModalCreate