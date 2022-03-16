import './style.css'

const PatternDetails = () => {
    return (
        <div className='pattern__detals'>
            <h2>Pattern Details</h2>
            <div className='pattern__detals_content pattern__detals_border'>
                <div className='pattern__detals_item'>
                    <div className='pattern__detals_name'>Pattern Name:</div>
                    <div className="pattern__detals_value">Standard Pattern</div>
                </div>
                <div className='pattern__detals_item pattern__detals_border'>
                    <div className='pattern__detals_name'>Author:</div>
                    <div className="pattern__detals_value">Oman Abyshev</div>
                </div>
                <div className='pattern__detals_item'>
                    <div className='pattern__detals_name'>Last Update:</div>
                    <div className="pattern__detals_value">3/3/2022</div>
                </div>
                <div className='pattern__detals_item pattern__detals_border'>
                    <div className='pattern__detals_name'>Created:</div>
                    <div className="pattern__detals_value">3/3/2022</div>
                </div>
                <div className='pattern__detals_item'>
                    <div className='pattern__detals_name'>Status:</div>
                    <div className="pattern__detals_value">Ready to use</div>
                </div>
            </div>
        </div>
    )
}

export default PatternDetails
