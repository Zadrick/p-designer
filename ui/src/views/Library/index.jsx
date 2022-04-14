import React from 'react'
import { PatternList, 
        RelatedProject, 
        ModalCreate, 
        ProjectBlueprints, 
        SaveComponent, 
        LibraryDetails, 
        ListComponents,
        ComponentDetails,
        ButtonExpertEstimations,
        ListTypes } from '../../components'
import './Style.scss'
import { Link } from 'react-router-dom'
import { useStore } from '../../hooks'
import { observer } from 'mobx-react'

const Library = observer(() => {
    const { getComponentTypes } = useStore('componentTypeStore')
    const { setCreatedProjects, 
            setDeletedNewProjects,
            setDeletedOldProjects, 
            setProjectsDetails,  } = useStore('patternStore')
    const { libraryList, 
            activeLibrary, 
            setActiveLibrary, 
            postLibrary, 
            getLibraries, 
            getLibrary,
            libraryProject,
            getLibraryProjects } = useStore('libraryStore')
    const [ isCreate, setIsCreate ] = React.useState(false)

    React.useEffect(() => {
        getLibraries()
    }, [])

    React.useEffect(() => {
        getLibrary(activeLibrary)
        getLibraryProjects(activeLibrary)
        getComponentTypes(activeLibrary)
    }, [activeLibrary, getLibraryProjects, getLibrary, getComponentTypes])


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
        getLibrary(activeLibrary)
        getLibraryProjects(activeLibrary)
    }



    return (
        <div className='library App_main'>
            <header className='main__header'>
                <h2>SINTERING COMPONENTs</h2>
                <p>component library</p>
            </header>
            <div className='window'>
                <div className='sidebar'>
                    <PatternList  list={libraryList} 
                    componentName="List of Comp.Libraries" 
                    buttonName="+ Add New Library" 
                    activeItem={activeLibrary} 
                    changeActive={setActiveLibrary} 
                    createNewItem={setIsCreate}  />
                    <LibraryDetails />
                </div>
                <main className='main'>
                    <div className='main__content'>
                        <ListTypes />
                        <ListComponents />
                    </div>
                    <div className='main__content'>
                        <ButtonExpertEstimations />
                        <ProjectBlueprints list={libraryProject} 
                                            addFunc={addProject} 
                                            deleteFunc={onDeleteProject}
                                            editFunc={editProject} 
                                            isAdd={true} />
                    </div>
                </main>
                <div className='sidebar'>
                    <ComponentDetails />
                    <RelatedProject />
                    <SaveComponent onPutFunc={saveLibrary} onDisardFunc={disardChangesLibrary} />
                </div>
            </div>
            <Link to="/project" className="go-back">Go Back</Link>
            {isCreate ? <ModalCreate title="A New Library" 
                                    inputName="Library Name" 
                                    saveFunc={createLibrary} 
                                    disardFunc={setIsCreate} /> : (<></>)}
        </div>
    )
})

export default Library