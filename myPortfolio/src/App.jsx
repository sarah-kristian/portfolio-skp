//import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import DescrTeacher from "./components/description/DescrTeacher";
import DescrResearcher from "./components/description/DescrResearcher";
import DescrDeveloper from "./components/description/DescrDeveloper";


function App() {

  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teacher" element={<DescrTeacher />} />
          <Route path="researcher" element={<DescrResearcher />} />
          <Route path="developer" element={<DescrDeveloper/>} />
        </Route>
      </Routes>
  )
}

export default App
