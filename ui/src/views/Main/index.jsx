import React from 'react';
import { PatternList, 
        Criteria, 
        PatternDetails, 
        OptimizationCriteria, 
        ProjectBlueprints, 
        ModalCreate,
        SaveComponent,
        DesignAspects, 
        RelatedProject } from '../../components'
import { useStore } from '../../hooks'
import { observer } from 'mobx-react-lite'
import './style.scss';

const Main = observer(() => {
  const { setCreatedProjects, 
    setDeletedNewProjects,
    updatedCharacteristics,
    deletedCharacteristics,
    createdProjects,
    setDeletedOldProjects, 
    setProjectsDetails, 
    getPatternList, 
    postPattern, 
    postCritetia,
    postProject,
    deleteProject,
    deletedProjects,
    patternList, 
    putCritetia,
    setActivePettern, 
    activePattern, 
    getProjects,
    deleteCritetia,
    getPattern, 
    projectList,
    getCriterias,
    createdCharacteristics,
    putPattern } = useStore('patternStore')
  const [isCreateModal, setCreateModal] = React.useState(false)


  const addNewPattern = patternName => {
      postPattern(patternName)
  }

  const onClickPattern = id => {
      setActivePettern(id)
  }

  React.useEffect(() => {
    getPatternList()
  }, [])

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

  React.useEffect(() => {
    getPattern(activePattern)
    getProjects()
    getCriterias(activePattern)
  }, [activePattern, getCriterias, getPattern, getProjects])

  const onSaveData = () => {
    putPattern()
    if(createdCharacteristics.length > 0) {
      createdCharacteristics.forEach(item => {
        postCritetia(item)
      })
    }
    if(updatedCharacteristics.length > 0) {
      updatedCharacteristics.forEach(item => {
        putCritetia(item)
      })
    }
    if(deletedCharacteristics.length > 0) {
      deletedCharacteristics.forEach(item => {
        deleteCritetia(item)
      })
    }
    if(createdProjects.length > 0) {
      createdProjects.forEach(item => {
        postProject(item)
      })
    }
    if(deletedProjects.length > 0) {
      deletedProjects.forEach(item => {
        deleteProject(item)
      })
    }
    getPattern(activePattern)
    getProjects()
    getCriterias(activePattern)
  }

  const disardChanges = () => {
    getPattern(activePattern)
  }

  return (
    <>
    <div className='App_main'>
      <header className='main__header'>
        <h2>The MAIN MENU</h2>
        <p>Select the project template</p>
      </header>
      <div className='window'>
        <PatternList list={patternList} componentName="Templates Palette" buttonName="+ Create New Pattern" activeItem={activePattern} changeActive={onClickPattern} createNewItem={setCreateModal} />
        <main className='main'>
          <h2>Selected Pattern composition</h2>
          <div className='main__content'>
            <PatternDetails />
            <OptimizationCriteria />
          </div>
          <div div className='main__content'>
            <DesignAspects />
            <ProjectBlueprints list={projectList} addFunc={addProject} deleteFunc={onDeleteProject}
            editFunc={editProject} />      
          </div>
        </main>
        <div className='sidebar'>
          <Criteria />
          <RelatedProject />
          <SaveComponent onPutFunc={onSaveData} onDisardFunc={disardChanges} />
        </div>
      </div>
    </div>
    {isCreateModal ? <ModalCreate title="A New Project Pattern" inputName="Pattern Name" saveFunc={addNewPattern} disardFunc={setCreateModal} /> : (<></>)}
    </>
  )
})

export default Main
