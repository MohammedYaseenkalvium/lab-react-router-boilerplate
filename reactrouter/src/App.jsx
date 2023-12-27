import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './Components/PageNotfound'

const App = () => {
  return (
    <div>
      <Navbar />

      {/* Perform Routing */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App
