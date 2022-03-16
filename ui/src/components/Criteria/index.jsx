import React from'react'
import './style.css'

const Criteria = () => {
    const [maxValue, setMaxValue] = React.useState(2.5)
    const [minValue, setMinValue] = React.useState(0)
    const [inputValue, setInputValue] = React.useState(1)

    const onChangeInput = e => {
        if (/^[0-9].\+$/.test(e.target.value) || e.target.value === '') {
            console.log(e.target.name)
            if (e.target.name === 'min') {
                console.log('fgfdg')
                setMinValue(e.target.value)
            } else if (e.target.name === 'max') {
                setMaxValue(e.target.value)
            } else if (e.target.name === 'value') {
                setInputValue(e.target.value)
            }
        }
    }

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
                <div className="slider">
                    <p>Min</p>
                    <input type='text' 
                        min='0' 
                        max={inputValue} 
                        value={minValue} 
                        className='input'
                        name='min'
                        onInput={(e) => onChangeInput(e)} />
                </div>
                <div className="slider">
                    <p>Target</p>
                    <input type='text' 
                        value={inputValue} 
                        min={minValue} 
                        max={maxValue}
                        className='input'
                        name='value'
                        onInput={(e) => onChangeInput(e)} />
                </div>
                <div className="slider">
                    <p>Max</p>
                    <input type='text' 
                        value={maxValue} 
                        min={inputValue} 
                        className='input'
                        name='max'
                        onInput={(e) => onChangeInput(e)} />
                </div>
            </div>
            <button className='edit__criteria'>Edit Optimization Criteria</button>
        </div>
    )
}

export default Criteria