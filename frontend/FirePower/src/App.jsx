import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './LoginPage';
import CameraPage from './CameraPage';
import Dashboard from './Dashboard';

function App() {
  const [count, setCount] = useState(0)
  
  return ( 
  <Routes>
  
    <Route path="/" element={<LoginPage />} />
    <Route path="/camera" element={<CameraPage />} />
    <Route path="/dash" element={<Dashboard/>} />

  </Routes>
  )
}

export default App
