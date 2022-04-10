import React from 'react'
import './Style.scss'

const ComponentDetails = () => {
    let crut = 1

    return (
        <div className='sidebar component-details'>
            <h2>Component Detail</h2>
                <div className='pattern__detals_content'>
                    <div className='pattern__detals_item'>
                        <div className='pattern__detals_name'>Name:</div>
                        <div className="pattern__detals_value">jdlsd</div>
                    </div>
                    <div className='pattern__detals_item'>
                        <div className='pattern__detals_name'>Type:</div>
                        <div className="pattern__detals_value">CNC Machine</div>
                    </div>
                    <div className='pattern__detals_item'>
                        <div className='pattern__detals_name'>Category:</div>
                        <div className="pattern__detals_value">Physical Assets</div>
                    </div>
                    <div className='pattern__detals_item'>
                        <div className='pattern__detals_name'>Status:</div>
                        <div className="pattern__detals_value">Ready to use</div>
                    </div>
                </div>
                <button>Edit Component’s Datasheet</button>
        </div>)
}

export default ComponentDetails