import React from 'react';
import { PatternList, 
        Criteria, 
        PatternDetails, 
        OptimizationCriteria, 
        ProjectBlueprints, 
        DesignAspects, 
        RelatedProject } from '../../components'
import { useStore } from '../../hooks'
import { observer } from 'mobx-react-lite'
import './style.scss';

const Main = observer(() => {


  const { getPattern, putPattern, activePattern } = useStore('patternStore')
  React.useEffect(() => {
    getPattern(activePattern)
  }, [activePattern, getPattern])

  const onPutPatterns = () => {
    putPattern()
  }

  const disardChanges = () => {
    getPattern(activePattern)
  }

  return (
    <div className='App_main'>
      <header className='main__header'>
        <h2>The MAIN MENU</h2>
        <p>Select the project template</p>
      </header>
      <div className='window'>
        <PatternList />
        <main className='main'>
          <h2>Selected Pattern composition</h2>
          <div className='main__content'>
            <PatternDetails />
            <OptimizationCriteria />
          </div>
          <div div className='main__content'>
            <DesignAspects />
            <ProjectBlueprints />          
          </div>
        </main>
        <div className='sidebar'>
          <Criteria />
          <RelatedProject />
          <div className='sidebar__buttons'>
            <button onClick={onPutPatterns}>Save the Pattern</button>
            <button onClick={disardChanges}>Discard Changes</button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Main
