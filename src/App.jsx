import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/home/Home'
import About from './component/about/About'
import Services from './component/services/Services'
import Contact from './component/contact/Contact'
import Form from './component/form/Form'


function App() {
 
  const [login, setLogin] = useState(true)

  const handleLog = ()=>{
    const currentState = login
    setLogin(!currentState)
  }

  

  return (
    <>
      <BrowserRouter>

      <Navbar/>

         <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact'element={<Contact/>}/>

         </Routes>

        
      
      </BrowserRouter>

     
      {
        login? <Form/> : 'USER Logout'
      }

  <button onClick={()=>{handleLog()}}>{login? 'log out' : 'sign up'}</button>


    </>
  )
}

export default App
