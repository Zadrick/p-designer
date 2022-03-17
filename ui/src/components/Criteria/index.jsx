import React from'react'
import './style.css'

const Criteria = () => {
    const [maxValue, setMaxValue] = React.useState(2.5)
    const [minValue, setMinValue] = React.useState(0)
    const [inputValue, setInputValue] = React.useState(1)
    const [editCriteria, setEditCriteria] = React.useState(false)
    const [editMin, setEditMin] = React.useState(false)
    const [editTarget, setEditTarget] = React.useState(false)
    const [editMax, setEditMax] = React.useState(false)
    const [criteriaName, setCriteriaName] = React.useState('OEE')
    const [isChanged, setIsChanged] = React.useState(false)
    const [isTypeMax, setIsTypeMax] = React.useState(true)
    const [isValidation, setIsValidation] = React.useState(true)

    const onChangeInput = e => {
        console.log(e.target);
        if (/^[0-9.]+$/.test(e.target.value) || e.target.value === '') {
            console.log(e.target);
            setIsChanged(true)
            if (e.target.name === 'min') {
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
            <div className='criteria'>
                <div className='criteria__item'>
                   <div className='criteria__type'>Name:</div>
                   <div className='criteria__value input'>
                    {editCriteria ? (<input type="text" name='max' value={criteriaName} onChange={e => {
                        setCriteriaName(e.target.value)
                        setIsChanged(true)
                    }} />) : criteriaName}
                    </div>
                   <div onClick={() => setEditCriteria(!editCriteria)} className="pattern__detals_edit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M15.5833 5.1283C15.5838 5.03508 15.566 4.94267 15.5307 4.85637C15.4955 4.77007 15.4435 4.69157 15.3779 4.62539L12.3746 1.62205C12.3084 1.55641 12.2299 1.50447 12.1436 1.46922C12.0573 1.43397 11.9649 1.4161 11.8716 1.41664C11.7784 1.4161 11.686 1.43397 11.5997 1.46922C11.5134 1.50447 11.4349 1.55641 11.3687 1.62205L9.36414 3.62664L1.62205 11.3687C1.55641 11.4349 1.50447 11.5134 1.46922 11.5997C1.43397 11.686 1.4161 11.7784 1.41664 11.8716V14.875C1.41664 15.0628 1.49127 15.243 1.6241 15.3758C1.75694 15.5087 1.93711 15.5833 2.12497 15.5833H5.1283C5.22742 15.5887 5.32656 15.5732 5.4193 15.5378C5.51204 15.5024 5.59631 15.4479 5.66664 15.3779L13.3662 7.6358L15.3779 5.66664C15.4425 5.59799 15.4952 5.51897 15.5337 5.43289C15.5405 5.37643 15.5405 5.31935 15.5337 5.26289C15.537 5.22992 15.537 5.19669 15.5337 5.16372L15.5833 5.1283ZM4.83789 14.1666H2.8333V12.1621L9.86705 5.1283L11.8716 7.13289L4.83789 14.1666ZM12.8704 6.13414L10.8658 4.12955L11.8716 3.1308L13.8691 5.1283L12.8704 6.13414Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <div className='criteria__item'>
                    <div className='criteria__type'>Type:</div>
                    <div className='criteria__value'>
                        <button onClick={() => {
                            setIsTypeMax(true)
                            setIsChanged(true)
                        }} 
                            className={isTypeMax ? 'criteria__value_button active' : 'criteria__value_button'}>
                            Maxmization
                        </button>
                        <button onClick={() => {
                            setIsTypeMax(false)
                            setIsChanged(true)
                        }}
                            className={isTypeMax ? 'criteria__value_button' : 'criteria__value_button active'}>
                            Minimization
                        </button>
                    </div>
                </div>
                <div className='criteria__item'>
                    <div className='criteria__type'>Validation:</div>
                    <div className='criteria__value'>
                        <button onClick={() => {
                            setIsValidation(true)
                            setIsChanged(true)
                        }}
                            className={isValidation ? 'criteria__value_button active' : 'criteria__value_button'}>
                            Non-negative
                        </button>
                        <button onClick={() => {
                            setIsValidation(false)
                            setIsChanged(true)
                        }}
                            className={isValidation ? 'criteria__value_button' : 'criteria__value_button active'}>
                            Threshold
                        </button>
                    </div>
                </div>
                <div className='criteria__item'>
                    <div className='criteria__type'>Min:</div>
                    <div className='criteria__value input'>
                        {editMin ? (<input type="text" name='min' value={minValue} onChange={e => onChangeInput(e)} />) : minValue}
                    </div>
                    <div onClick={() => setEditMin(!editMin)} className="pattern__detals_edit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M15.5833 5.1283C15.5838 5.03508 15.566 4.94267 15.5307 4.85637C15.4955 4.77007 15.4435 4.69157 15.3779 4.62539L12.3746 1.62205C12.3084 1.55641 12.2299 1.50447 12.1436 1.46922C12.0573 1.43397 11.9649 1.4161 11.8716 1.41664C11.7784 1.4161 11.686 1.43397 11.5997 1.46922C11.5134 1.50447 11.4349 1.55641 11.3687 1.62205L9.36414 3.62664L1.62205 11.3687C1.55641 11.4349 1.50447 11.5134 1.46922 11.5997C1.43397 11.686 1.4161 11.7784 1.41664 11.8716V14.875C1.41664 15.0628 1.49127 15.243 1.6241 15.3758C1.75694 15.5087 1.93711 15.5833 2.12497 15.5833H5.1283C5.22742 15.5887 5.32656 15.5732 5.4193 15.5378C5.51204 15.5024 5.59631 15.4479 5.66664 15.3779L13.3662 7.6358L15.3779 5.66664C15.4425 5.59799 15.4952 5.51897 15.5337 5.43289C15.5405 5.37643 15.5405 5.31935 15.5337 5.26289C15.537 5.22992 15.537 5.19669 15.5337 5.16372L15.5833 5.1283ZM4.83789 14.1666H2.8333V12.1621L9.86705 5.1283L11.8716 7.13289L4.83789 14.1666ZM12.8704 6.13414L10.8658 4.12955L11.8716 3.1308L13.8691 5.1283L12.8704 6.13414Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <div className='criteria__item input'>
                    <div className='criteria__type'>Target:</div>
                    <div className='criteria__value'>
                        {editTarget ? (<input type="text" name='value' value={inputValue} onChange={e => onChangeInput(e)} />) : inputValue}
                    </div>
                    <div onClick={() => setEditTarget(!editTarget)} className="pattern__detals_edit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M15.5833 5.1283C15.5838 5.03508 15.566 4.94267 15.5307 4.85637C15.4955 4.77007 15.4435 4.69157 15.3779 4.62539L12.3746 1.62205C12.3084 1.55641 12.2299 1.50447 12.1436 1.46922C12.0573 1.43397 11.9649 1.4161 11.8716 1.41664C11.7784 1.4161 11.686 1.43397 11.5997 1.46922C11.5134 1.50447 11.4349 1.55641 11.3687 1.62205L9.36414 3.62664L1.62205 11.3687C1.55641 11.4349 1.50447 11.5134 1.46922 11.5997C1.43397 11.686 1.4161 11.7784 1.41664 11.8716V14.875C1.41664 15.0628 1.49127 15.243 1.6241 15.3758C1.75694 15.5087 1.93711 15.5833 2.12497 15.5833H5.1283C5.22742 15.5887 5.32656 15.5732 5.4193 15.5378C5.51204 15.5024 5.59631 15.4479 5.66664 15.3779L13.3662 7.6358L15.3779 5.66664C15.4425 5.59799 15.4952 5.51897 15.5337 5.43289C15.5405 5.37643 15.5405 5.31935 15.5337 5.26289C15.537 5.22992 15.537 5.19669 15.5337 5.16372L15.5833 5.1283ZM4.83789 14.1666H2.8333V12.1621L9.86705 5.1283L11.8716 7.13289L4.83789 14.1666ZM12.8704 6.13414L10.8658 4.12955L11.8716 3.1308L13.8691 5.1283L12.8704 6.13414Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <div className='criteria__item input'>
                    <div className='criteria__type'>Max:</div>
                    <div className='criteria__value'>
                        {editMax ? (<input type="text" name='max' value={maxValue} onChange={e => onChangeInput(e)} />) : maxValue}
                    </div>
                    <div onClick={() => setEditMax(!editMax)} className="pattern__detals_edit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M15.5833 5.1283C15.5838 5.03508 15.566 4.94267 15.5307 4.85637C15.4955 4.77007 15.4435 4.69157 15.3779 4.62539L12.3746 1.62205C12.3084 1.55641 12.2299 1.50447 12.1436 1.46922C12.0573 1.43397 11.9649 1.4161 11.8716 1.41664C11.7784 1.4161 11.686 1.43397 11.5997 1.46922C11.5134 1.50447 11.4349 1.55641 11.3687 1.62205L9.36414 3.62664L1.62205 11.3687C1.55641 11.4349 1.50447 11.5134 1.46922 11.5997C1.43397 11.686 1.4161 11.7784 1.41664 11.8716V14.875C1.41664 15.0628 1.49127 15.243 1.6241 15.3758C1.75694 15.5087 1.93711 15.5833 2.12497 15.5833H5.1283C5.22742 15.5887 5.32656 15.5732 5.4193 15.5378C5.51204 15.5024 5.59631 15.4479 5.66664 15.3779L13.3662 7.6358L15.3779 5.66664C15.4425 5.59799 15.4952 5.51897 15.5337 5.43289C15.5405 5.37643 15.5405 5.31935 15.5337 5.26289C15.537 5.22992 15.537 5.19669 15.5337 5.16372L15.5833 5.1283ZM4.83789 14.1666H2.8333V12.1621L9.86705 5.1283L11.8716 7.13289L4.83789 14.1666ZM12.8704 6.13414L10.8658 4.12955L11.8716 3.1308L13.8691 5.1283L12.8704 6.13414Z" fill="black"/>
                        </svg>
                    </div>
                </div>
            </div>
            {isChanged ? (<button onClick={() => setIsChanged(false)} className='edit__criteria'>Edit Optimization Criteria</button>) : (<></>)}
        </div>
    )
}

export default Criteria