import React from 'react'

const SaveComponent = ({ onPutFunc, onDisardFunc}) => {
    return (
        <div className='sidebar__buttons'>
            <button onClick={onPutFunc}>Save the Pattern</button>
            <button onClick={onDisardFunc}>Discard Changes</button>
        </div>
    )
}

export default SaveComponent