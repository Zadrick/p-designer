import React from 'react'
import { PatternList, RelatedProject, ModalCreate, ProjectBlueprints, SaveComponent } from '../../components'
import './Style.scss'
import { Link } from 'react-router-dom'
import { useStore } from '../../hooks'
import { observer } from 'mobx-react'

const Library = observer(() => {
    const { setCreatedProjects, 
            setDeletedNewProjects,
            setDeletedOldProjects, 
            setProjectsDetails,  } = useStore('patternStore')
    const { libraryList, 
            activeLibrary, 
            setActiveLibrary, 
            postLibrary, 
            getLibraries, 
            getLibray,
            libraryProject,
            getLibraryProjects } = useStore('libraryStore')
    const [ isCreate, setIsCreate ] = React.useState(false)

    React.useEffect(() => {
        getLibraries()
    }, [])

    React.useEffect(() => {
        getLibray(activeLibrary)
        getLibraryProjects(activeLibrary)
    }, [activeLibrary, getLibraryProjects, getLibray])


    const createLibrary = name => {
        postLibrary(name)
    }

    const addProject = newItem => {
        const obj  = {
            id: 0,
            name: newItem,
        }
        setCreatedProjects(obj)
    }
    
    
    const onDeleteProject = obj => {
        if (obj.id === 0) {
            setDeletedNewProjects(obj)
        } else {
            setDeletedOldProjects(obj)
        }
    }
    
    const editProject = obj => {
        setProjectsDetails(obj)
    }

    const saveLibrary = () => {

    }

    const disardChangesLibrary = () => {
        getLibray(activeLibrary)
        getLibraryProjects(activeLibrary)
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
                        <ProjectBlueprints list={libraryProject} addFunc={addProject} deleteFunc={onDeleteProject}
            editFunc={editProject} isAdd={true} />
                    </div>
                </main>
                <div className='sidebar'>
                    <RelatedProject />
                    <SaveComponent onPutFunc={saveLibrary} onDisardFunc={disardChangesLibrary} />
                </div>
            </div>
            <Link to="/project" className="go-back">Go Back</Link>
            {isCreate ? <ModalCreate title="A New Project Pattern" inputName="Pattern Name" saveFunc={createLibrary} disardFunc={setIsCreate} /> : (<></>)}
        </div>
    )
})

export default Library