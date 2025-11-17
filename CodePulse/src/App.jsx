import React from 'react'
import Header from './componants/layout/Header'
import Home from './home'
import { ToastContainer, toast } from 'react-toastify
import About from './About'
import { BrowserRouter, Routes, Route } from'react-router-dom'
import './App.css'
import Blog from './componants/layout/blog'
import Contacts from './componants/layout/contact'
import Service from './componants/layout/service'



export default function App() {
  const to = () => {
    toast.warning('warning')
    toast.error('error')
    toast.success('success')
    toast.info('info')
    
    
  }

  return (
    <div>
      <div className="btn-box">
        <button onClick={to} className="btn">click me</button>
      </div>

      <ToastContainer/>

      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
           <Route path="/blog" element={<Blog/>}/>
           <Route path="/contacts" element={<Contacts/>}/>
           <Route path="/service" element={<Service/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
