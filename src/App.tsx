import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import GlobalStyles from './styles/global.styled';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
