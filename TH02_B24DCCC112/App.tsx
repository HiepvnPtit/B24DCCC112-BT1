import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import './App.css'
import Bai1 from './bai1'
import Bai2 from './bai2';
import Bai3 from './bai3'
import Bai2_1 from './bai2_1';


function App() {
  const [count, setCount] = useState(0)

  return (
    < BrowserRouter>  
      <nav>
        <Link to="/bai1">Bai 1</Link> |{" "}
        <Link to="/bai2">Bai 2</Link> |{" "}
        

        <Link to="/bai3">Bai 3</Link>
      </nav>
      <Routes>
        <Route path="/bai1" element={<Bai1 />} />
        <Route path="/bai2" element={<Bai2 />} />
        <Route path="/bai2/:id" element={<Bai2_1 />} />
        <Route path="/bai3" element={<Bai3 />} />
      </Routes>
    </ BrowserRouter>
    
     
  )
}

export default App
