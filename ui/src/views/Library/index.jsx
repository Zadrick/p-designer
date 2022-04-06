import React from 'react'
import { PatternList, RelatedProject, ModalCreate } from '../../components'
import './Style.scss'
import { Link } from 'react-router-dom'
import { useStore } from '../../hooks'

const Library = () => {
    const [ libraryList, activeLibrary, setActiveLibrary, postLibrary ] = useStore('libraryStore')
    const [ isCreate, setIsCreate ] = React.useState(false)

    // React.useEffect(())


    const createLibrary = name => {
        postLibrary(name)
    }

    return (
        <div className='library App_main'>
            <header className='main__header'>
                <h2>SINTERING COMPONENTs</h2>
                <p>component library</p>
            </header>
            <div className='window'>
                <PatternList  list={libraryList} componentName="List of Comp.Libraries" buttonName="+ Add New Library" activeItem={activeLibrary} changeActive={setActiveLibrary} createNewItem={setIsCreate}  />
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
            {isCreate ? <ModalCreate title="A New Project Pattern" inputName="Pattern Name" saveFunc={createLibrary} disardFunc={setIsCreate} /> : (<></>)}
        </div>
    )
}

export default Library