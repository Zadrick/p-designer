import React from 'react'
import { LibraryList, RelatedProject } from '../../components'
import './Style.scss'
import { Link } from 'react-router-dom'

const Library = () => {

    return (
        <div className='library App_main'>
            <header className='main__header'>
                <h2>SINTERING COMPONENTs</h2>
                <p>component library</p>
            </header>
            <div className='window'>
                <LibraryList />
                <main className='main'>
                    <div className='main__content'>
                        <div><h2>SINTERING COMPONENTs</h2></div>
                        <div><h2>SINTERING COMPONENTs</h2></div>
                    </div>
                    <div className='main__content'>
                        <div><h2>SINTERING COMPONENTs</h2></div>
                        {/* <ProjectBlueprints /> */}
                    </div>
                </main>
                <div className='sidebar'>
                    <RelatedProject />
                </div>
            </div>
            <Link to="/project" className="go-back">Go Back</Link>
        </div>
    )
}

export default Library