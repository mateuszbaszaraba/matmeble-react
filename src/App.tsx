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
import AdminLogin from './components/pages/AdminLogin';
import AdminDashboard from './components/layout/AdminDashboard/AdminDashboard';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route element={<Header />}>
            <Route path='' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/nasze-produkty' element={<Products />} />
            <Route path='/kontakt' element={<Contact />} />
          </Route>
          <Route element={<AuthProvider />}>
            <Route path='/admin/login' element={<AdminLogin />} />
            <Route element={<PrivateRoute />}>
              <Route path='/admin/dashboard' element={<AdminDashboard />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
