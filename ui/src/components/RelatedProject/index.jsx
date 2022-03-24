import './style.scss'

const RelatedProject = () => {
    return (
        <div className='related-project'>
            <h2>Related Project Details</h2>
            <div className='pattern__detals_content'>
                <div className='pattern__detals_item'>
                    <div className='pattern__detals_name'>Pattern Name:</div>
                    <div className="pattern__detals_value">Standard Pattern</div>
                </div>
                <div className='pattern__detals_item'>
                    <div className='pattern__detals_name'>Status:</div>
                    <div className="pattern__detals_value">Ready to use</div>
                </div>
            </div>
            <button>Go to the Project</button>
        </div>
    )
}

export default RelatedProject