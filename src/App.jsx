import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
//halaman
import Register from './components/pages/register/register.jsx'
import Login from './components/pages/login/login.jsx';


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
