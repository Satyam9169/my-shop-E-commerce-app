import React from 'react'
import { Route, Routes } from 'react-router-dom'
//components
import { Header, Footer } from './components'
// pages
import { Home, Contact, Login, Register, ResetPassword } from './pages'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App