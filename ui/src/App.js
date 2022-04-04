import './App.scss';
import { Main, Project, Library } from './views'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/library" element={<Library />} />
        <Route path="/project" element={<Project />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;