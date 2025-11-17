import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo.jpg'

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="" />
      </div>

      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/service">Service</Link>
          </div>
    </div>
  )
}
