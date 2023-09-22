import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
//halaman
import Register from './components/pages/register/register.jsx'
import Login from './components/pages/login/login.jsx';
import Home from './components/pages/home/home';
import Home2 from './components/pages/home2/home2';


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route index element={<Home />} />
    <Route path="/home2" element={<Home2 />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
