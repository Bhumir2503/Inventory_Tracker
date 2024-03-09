import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import PageNotFound from './pages/pageNotFound'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Dashboard from './pages/user/dashboard'
import Contacts from './pages/user/contacts'
import Inventory from './pages/user/inventory'
import Purchases from './pages/user/purchases'
import Sales from './pages/user/sales'
import NavbarHome from './components/navbarHome'
import NavbarUser from './components/navbarUser'


function App() {
  let navbar;
  let currentPath = window.location.pathname;

  if(currentPath === '/'){
    navbar = <NavbarHome />;
  } else if (currentPath === '/dashboard' || currentPath === '/contact' || currentPath === '/inventory' || currentPath === '/purchase' || currentPath === '/sales') {
    navbar = <NavbarUser />;
  } else if (currentPath === '/login' || currentPath === '/register') {
    navbar = <NavbarHome />;
  }else{
    navbar = <NavbarHome />;
  }


  return (
    <BrowserRouter>
      {navbar}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/purchase" element={<Purchases />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App