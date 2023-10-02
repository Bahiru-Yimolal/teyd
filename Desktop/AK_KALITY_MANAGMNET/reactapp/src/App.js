import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import SideNavBar from './pages/SideNavBar'
import Side from './pages/Side'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
const App = () => {
  return (
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path="/nav" element={<SideNavBar></SideNavBar>}>
        <Route path="dash" element={<Dashboard></Dashboard>} />
        <Route path="pro" element={<Project></Project>} />
      </Route>
      <Route path="/home" element={<Home></Home>}></Route>
    </Routes>
  );
}

export default App
