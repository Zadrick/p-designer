import React from 'react';
import { PatternList, Criteria } from '../../components'
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
          <div>
            <div className='pattern__detals'>
              <h2>Delete the Pattern</h2>
            </div>
            <div>
              <h2>List of Optimization Criteria</h2>
            </div>
          </div>
          <div>
            <div>
              <h2>Project Design Aspects</h2>
            </div>  
            <div>
              <h2>List of Related Project Blueprints</h2>
            </div>          
          </div>
        </main>
        <div className='sidebar'>
          <Criteria />
          <div className='sidebar__project'>
            <h2>Related Project Details</h2>
            <button>Go to the Project</button>
          </div>
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
