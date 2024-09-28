import { Route, Routes } from 'react-router-dom';
import './App.css';
import AccordionList from './Components/AccordionList';
import HomePage from './Components/HomePage';
import NavbarTheme from './Components/Navbar';
import PersonalPage from './Components/PersonalPage';
import { AuthContext, useAuth } from './auth/auth';
import PersonalAccordionList from './Components/PersonalAccordionList';

function App() {
  const { isLoggedIn, user, login, logout, role } = useAuth();
  return (
    <div className="App">
      <AuthContext.Provider value={{ isLoggedIn, user, login, logout, role}}>
      <NavbarTheme />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/student/lect' element = {<AccordionList />} />
        <Route path='/personal/adding' element={<PersonalPage />} />
        <Route path='/personal/course/list' element={<PersonalAccordionList />} />
      </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
