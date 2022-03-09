import React from'react'
import './style.css'

const Criteria = () => {
    const [maxValue, setMaxValue] = React.useState(2.5)
    const [minValue, setMinValue] = React.useState(0)
    const [inputValue, setInputValue] = React.useState(1)

    return (
        <div className='sidebar__criteria'>
            <h2>Criteria Details</h2>
            <div className='criteria criteria__border'>
                <div className='criteria__item'>
                   <div className='criteria__type'>Name:</div>
                   <div className='criteria__value'>OEE</div>
                </div>
                <div className='criteria__item criteria__border'>
                    <div className='criteria__type'>Type:</div>
                    <div className='criteria__value'>
                        <button className='criteria__value_button active'>Maxmization</button>
                        <button className='criteria__value_button'>Minimization</button>
                    </div>
                </div>
                <div className='criteria__item'>
                    <div className='criteria__type'>Validation:</div>
                    <div className='criteria__value'>
                        <button className='criteria__value_button active'>Non-negative</button>
                        <button className='criteria__value_button'>Threshold</button>
                    </div>
                </div>
            </div>
            <div class="slidecontainer">
                <input type="range" 
                    min={minValue} 
                    max={maxValue} 
                    value={inputValue} 
                    step='0.1'
                    class="slider" 
                    onInput={(e) => setInputValue(e.target.value)} />
                <input type='number' 
                    min='0' 
                    max={maxValue} 
                    value={minValue} 
                    step='0.1'
                    pattern='\d+(,\d{1})?'
                    className='min'
                    onInput={(e) => setMinValue(e.target.value)} />
                <input type='number' 
                    value={maxValue} 
                    min={minValue} 
                    step='0.1'
                    pattern='\d+(,\d{1})?'
                    className='max'
                    onInput={(e) => setMaxValue(e.target.value)} />
                <input type='number' 
                    value={inputValue} 
                    min={minValue} 
                    step='0.1'
                    pattern='\d+(,\d{1})?'
                    className='value'
                    onInput={(e) => setInputValue(e.target.value)} />
            </div>
            <button className='edit__criteria'>Edit Optimization Criteria</button>
        </div>
    )
}

export default Criteria