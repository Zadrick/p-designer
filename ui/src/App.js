import './App.scss';
import { Main, Project } from './views'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;