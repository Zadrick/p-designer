import React from 'react'
import './Style.scss'

const LibraryDetails = () => {
 return (
    <div className='pattern__detals'>
    <h2>Pattern Details</h2>
    <div className='pattern__detals_content'>
        <div className='pattern__detals_item input'>
            <div className='pattern__detals_name'>Pattern Name:</div>
            
                
                <div className="pattern__detals_value">'sfdsf</div>
            <div className="pattern__detals_edit">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path d="M15.5833 5.1283C15.5838 5.03508 15.566 4.94267 15.5307 4.85637C15.4955 4.77007 15.4435 4.69157 15.3779 4.62539L12.3746 1.62205C12.3084 1.55641 12.2299 1.50447 12.1436 1.46922C12.0573 1.43397 11.9649 1.4161 11.8716 1.41664C11.7784 1.4161 11.686 1.43397 11.5997 1.46922C11.5134 1.50447 11.4349 1.55641 11.3687 1.62205L9.36414 3.62664L1.62205 11.3687C1.55641 11.4349 1.50447 11.5134 1.46922 11.5997C1.43397 11.686 1.4161 11.7784 1.41664 11.8716V14.875C1.41664 15.0628 1.49127 15.243 1.6241 15.3758C1.75694 15.5087 1.93711 15.5833 2.12497 15.5833H5.1283C5.22742 15.5887 5.32656 15.5732 5.4193 15.5378C5.51204 15.5024 5.59631 15.4479 5.66664 15.3779L13.3662 7.6358L15.3779 5.66664C15.4425 5.59799 15.4952 5.51897 15.5337 5.43289C15.5405 5.37643 15.5405 5.31935 15.5337 5.26289C15.537 5.22992 15.537 5.19669 15.5337 5.16372L15.5833 5.1283ZM4.83789 14.1666H2.8333V12.1621L9.86705 5.1283L11.8716 7.13289L4.83789 14.1666ZM12.8704 6.13414L10.8658 4.12955L11.8716 3.1308L13.8691 5.1283L12.8704 6.13414Z" fill="black"/>
                </svg>
            </div>
        </div>
        <div className='pattern__detals_item'>
            <div className='pattern__detals_name'>Status:</div>
            <div className="pattern__detals_value">
            <select className='setting__select'>
                    <option value={1}>Draft</option>
                    <option value={2}>Ready to use</option>
            </select>
            </div>
        </div>
        <div className='pattern__detals_item'>
            <div className='pattern__detals_name'>Category:</div>
            <div className="pattern__detals_value">
            <select className='setting__select'>
                    <option value={1}>Draft</option>
                    <option value={2}>Ready to use</option>
            </select>
            </div>
        </div>
    </div>
    <button className='pattern__delete'>Delete the Library</button>
</div>
 )
}

export default LibraryDetails