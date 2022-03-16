import React from 'react';
import { PatternList, Criteria, PatternDetails, OptimizationCriteria, ProjectBlueprints, DesignAspects, RelatedProject } from '../../components'
import './style.css';

const Main = () => {

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
            <button>Save the Pattern</button>
            <button>Delete the Pattern</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
