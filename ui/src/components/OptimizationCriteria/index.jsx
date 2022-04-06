import { useState } from 'react'
import { useStore } from '../../hooks'
import { observer } from 'mobx-react-lite'
import './style.scss'

const OptimizationCriteria = observer(() => {
    const [newCriteria, setNewCriteria] = useState('')

    const { setCriteriaDetails,
            setCreatedCharacteristics, 
            activePattern,
            setDeletedOldCharacteristics, 
            criteriaList,
            setDeletedNewCharacteristics } = useStore('patternStore')

    const addCriteria = () => {
        const newCharacteristics = {
            id: 0,
            patternId: activePattern,
            name: newCriteria,
            minValue: 0,
            maxValue: 0,
            targetValue: 0,
            isMinimization: true
        }
        console.log(newCharacteristics)
        setCreatedCharacteristics(newCharacteristics)
        setNewCriteria('')
    }

    const deleteCriteria = characteristics => {
        if (characteristics.id === 0) {
            setDeletedNewCharacteristics(characteristics)
        } else {
            setDeletedOldCharacteristics(characteristics)
        }
    }

    const onUpdateCriteria = item => {
        setCriteriaDetails(item)
    }

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            addCriteria()
        }
    }

    console.log(criteriaList)

    return (
        <div className="optimization__criteria">
            <h2>List of Optimization Criteria</h2>
            <div className="optimization__criteria_content">
                <div className="optimization__criteria_names">
                    <div className="optimization__criteria_name">Name</div>
                    <div className="optimization__criteria_type">Type</div>
                    <div className="optimization__criteria_max">Max</div>
                    <div className="optimization__criteria_min">Min</div>
                    <div className="optimization__criteria_target">Target</div>
                </div>
                <div className="scroll">
                    {criteriaList.map((item, i) => (
                        <div key={i} className="optimization__criteria_item">
                            <div className="optimization__criteria_name">{item.name}</div>
                            <div className="optimization__criteria_type">{item.isMinimization? 'Minimization' : 'Maxmization'}</div>
                            <div className="optimization__criteria_max">{item.maxValue}</div>
                            <div className="optimization__criteria_min">{item.minValue}</div>
                            <div className="optimization__criteria_target">{item.targetValue}</div>
                            <div onClick={() => onUpdateCriteria(item)} className="optimization__criteria_edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                    <path d="M15.5833 5.1283C15.5838 5.03508 15.566 4.94267 15.5307 4.85637C15.4955 4.77007 15.4435 4.69157 15.3779 4.62539L12.3746 1.62205C12.3084 1.55641 12.2299 1.50447 12.1436 1.46922C12.0573 1.43397 11.9649 1.4161 11.8716 1.41664C11.7784 1.4161 11.686 1.43397 11.5997 1.46922C11.5134 1.50447 11.4349 1.55641 11.3687 1.62205L9.36414 3.62664L1.62205 11.3687C1.55641 11.4349 1.50447 11.5134 1.46922 11.5997C1.43397 11.686 1.4161 11.7784 1.41664 11.8716V14.875C1.41664 15.0628 1.49127 15.243 1.6241 15.3758C1.75694 15.5087 1.93711 15.5833 2.12497 15.5833H5.1283C5.22742 15.5887 5.32656 15.5732 5.4193 15.5378C5.51204 15.5024 5.59631 15.4479 5.66664 15.3779L13.3662 7.6358L15.3779 5.66664C15.4425 5.59799 15.4952 5.51897 15.5337 5.43289C15.5405 5.37643 15.5405 5.31935 15.5337 5.26289C15.537 5.22992 15.537 5.19669 15.5337 5.16372L15.5833 5.1283ZM4.83789 14.1666H2.8333V12.1621L9.86705 5.1283L11.8716 7.13289L4.83789 14.1666ZM12.8704 6.13414L10.8658 4.12955L11.8716 3.1308L13.8691 5.1283L12.8704 6.13414Z" fill="black"/>
                                </svg>
                            </div>
                            <div onClick={() => deleteCriteria(item)} className="optimization__criteria_delete">
                                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.08333 11.75C5.27119 11.75 5.45136 11.6754 5.5842 11.5426C5.71704 11.4097 5.79167 11.2295 5.79167 11.0417V6.79169C5.79167 6.60383 5.71704 6.42366 5.5842 6.29082C5.45136 6.15798 5.27119 6.08335 5.08333 6.08335C4.89547 6.08335 4.7153 6.15798 4.58247 6.29082C4.44963 6.42366 4.375 6.60383 4.375 6.79169V11.0417C4.375 11.2295 4.44963 11.4097 4.58247 11.5426C4.7153 11.6754 4.89547 11.75 5.08333 11.75ZM12.1667 3.25002H9.33333V2.54169C9.33333 1.9781 9.10945 1.4376 8.71094 1.03909C8.31242 0.64057 7.77192 0.416687 7.20833 0.416687H5.79167C5.22808 0.416687 4.68758 0.64057 4.28906 1.03909C3.89055 1.4376 3.66667 1.9781 3.66667 2.54169V3.25002H0.833333C0.645472 3.25002 0.465304 3.32465 0.332466 3.45749C0.199628 3.59032 0.125 3.77049 0.125 3.95835C0.125 4.14622 0.199628 4.32638 0.332466 4.45922C0.465304 4.59206 0.645472 4.66669 0.833333 4.66669H1.54167V12.4584C1.54167 13.0219 1.76555 13.5624 2.16406 13.961C2.56258 14.3595 3.10308 14.5834 3.66667 14.5834H9.33333C9.89692 14.5834 10.4374 14.3595 10.8359 13.961C11.2345 13.5624 11.4583 13.0219 11.4583 12.4584V4.66669H12.1667C12.3545 4.66669 12.5347 4.59206 12.6675 4.45922C12.8004 4.32638 12.875 4.14622 12.875 3.95835C12.875 3.77049 12.8004 3.59032 12.6675 3.45749C12.5347 3.32465 12.3545 3.25002 12.1667 3.25002ZM5.08333 2.54169C5.08333 2.35383 5.15796 2.17366 5.2908 2.04082C5.42364 1.90798 5.6038 1.83335 5.79167 1.83335H7.20833C7.39619 1.83335 7.57636 1.90798 7.7092 2.04082C7.84204 2.17366 7.91667 2.35383 7.91667 2.54169V3.25002H5.08333V2.54169ZM10.0417 12.4584C10.0417 12.6462 9.96704 12.8264 9.8342 12.9592C9.70136 13.0921 9.52119 13.1667 9.33333 13.1667H3.66667C3.4788 13.1667 3.29864 13.0921 3.1658 12.9592C3.03296 12.8264 2.95833 12.6462 2.95833 12.4584V4.66669H10.0417V12.4584ZM7.91667 11.75C8.10453 11.75 8.2847 11.6754 8.41753 11.5426C8.55037 11.4097 8.625 11.2295 8.625 11.0417V6.79169C8.625 6.60383 8.55037 6.42366 8.41753 6.29082C8.2847 6.15798 8.10453 6.08335 7.91667 6.08335C7.7288 6.08335 7.54864 6.15798 7.4158 6.29082C7.28296 6.42366 7.20833 6.60383 7.20833 6.79169V11.0417C7.20833 11.2295 7.28296 11.4097 7.4158 11.5426C7.54864 11.6754 7.7288 11.75 7.91667 11.75Z" fill="black" fill-opacity="0.54" />
                                </svg>
                            </div>
                        </div>
                    ))}
                    <div className="optimization__criteria_null">
                        <div className='input'>
                            <input type="text" onKeyPress={e => onKeyPress(e)} value={newCriteria} onChange={e => setNewCriteria(e.target.value)} />
                        </div>
                        <div onClick={addCriteria} className="optimization__criteria_add">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.50002 1.41669C7.09907 1.41669 5.72958 1.83212 4.56473 2.61044C3.39989 3.38877 2.492 4.49504 1.95588 5.78935C1.41976 7.08366 1.27948 8.50788 1.55279 9.88191C1.82611 11.2559 2.50073 12.5181 3.49135 13.5087C4.48197 14.4993 5.7441 15.1739 7.11813 15.4472C8.49217 15.7206 9.91639 15.5803 11.2107 15.0442C12.505 14.508 13.6113 13.6002 14.3896 12.4353C15.1679 11.2705 15.5834 9.90097 15.5834 8.50002C15.5834 7.56982 15.4001 6.64874 15.0442 5.78935C14.6882 4.92996 14.1664 4.1491 13.5087 3.49135C12.8509 2.8336 12.0701 2.31184 11.2107 1.95587C10.3513 1.5999 9.43022 1.41669 8.50002 1.41669ZM8.50002 14.1667C7.37926 14.1667 6.28367 13.8343 5.35179 13.2117C4.41991 12.589 3.6936 11.704 3.26471 10.6686C2.83581 9.63311 2.72359 8.49373 2.94224 7.39451C3.16089 6.29528 3.70059 5.28558 4.49308 4.49308C5.28558 3.70058 6.29529 3.16089 7.39451 2.94224C8.49374 2.72359 9.63311 2.83581 10.6686 3.2647C11.704 3.6936 12.589 4.41991 13.2117 5.35179C13.8343 6.28367 14.1667 7.37926 14.1667 8.50002C14.1667 10.0029 13.5697 11.4443 12.507 12.507C11.4443 13.5697 10.0029 14.1667 8.50002 14.1667ZM11.3334 7.79169H9.20836V5.66669C9.20836 5.47883 9.13373 5.29866 9.00089 5.16582C8.86805 5.03298 8.68789 4.95835 8.50002 4.95835C8.31216 4.95835 8.13199 5.03298 7.99916 5.16582C7.86632 5.29866 7.79169 5.47883 7.79169 5.66669V7.79169H5.66669C5.47883 7.79169 5.29866 7.86631 5.16582 7.99915C5.03298 8.13199 4.95836 8.31216 4.95836 8.50002C4.95836 8.68788 5.03298 8.86805 5.16582 9.00089C5.29866 9.13373 5.47883 9.20835 5.66669 9.20835H7.79169V11.3334C7.79169 11.5212 7.86632 11.7014 7.99916 11.8342C8.13199 11.9671 8.31216 12.0417 8.50002 12.0417C8.68789 12.0417 8.86805 11.9671 9.00089 11.8342C9.13373 11.7014 9.20836 11.5212 9.20836 11.3334V9.20835H11.3334C11.5212 9.20835 11.7014 9.13373 11.8342 9.00089C11.9671 8.86805 12.0417 8.68788 12.0417 8.50002C12.0417 8.31216 11.9671 8.13199 11.8342 7.99915C11.7014 7.86631 11.5212 7.79169 11.3334 7.79169Z" fill="black" fillOpacity="1" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default OptimizationCriteria