import { Route, Routes } from 'react-router-dom';
import './App.css';
import AccordionList from './Components/AccordionList';
import HomePage from './Components/HomePage';
import NavbarTheme from './Components/Navbar';
import PersonalPage from './Components/PersonalPage';

function App() {
  return (
    <div className="App">
      <NavbarTheme />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/student/lect' element = {<AccordionList />} />
        <Route path='/personal/adding' element={<PersonalPage />} />
      </Routes>
    </div>
  );
}

export default App;
