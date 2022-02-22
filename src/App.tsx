import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import GlobalStyles from './styles/global.styled';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Header from './components/layout/shared/Header/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path='' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/nasze-produkty' element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
