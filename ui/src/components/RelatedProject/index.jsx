import './style.scss'
import { useStore } from '../../hooks'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'

const RelatedProject = observer(() => {
    const { projectsDetails, pattern } = useStore('patternStore')

    return (
        <div className='related-project'>
            <h2>Related Project Details</h2>
            <div className='pattern__detals_content'>
                <div className='pattern__detals_item'>
                    <div className='pattern__detals_name'>Project Name:</div>
                    <div className="pattern__detals_value">{projectsDetails.name}</div>
                </div>
                <div className='pattern__detals_item'>
                    <div className='pattern__detals_name'>Status:</div>
                    <div className="pattern__detals_value">
                        <select>
                            {pattern.lifecycleStatusId === 1 ? 
                                (<>
                                    <option value={1}>Draft</option>
                                    <option value={2}>Ready to use</option>
                                </>)
                                : (<>
                                    <option value={2}>Ready to use</option>
                                    <option value={1}>Draft</option>
                                </>)}
                        </select>
                    </div>
                </div>
                <div className='pattern__detals_item'>
                    <div className='pattern__detals_name'>Rating:</div>
                    <div className="pattern__detals_value">{projectsDetails.rating}</div>
                </div>
            </div>
            <button><Link to="/project">Go to the Project</Link></button>
        </div>
    )
})

export default RelatedProject