
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Features from '../components/Features'
import Contact from '../components/Contact'
import Login from '../components/Login'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
       <Route path='/' element={<Hero/>}/>
       <Route path='/services' element={<Features/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
