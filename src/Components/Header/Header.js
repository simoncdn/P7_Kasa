import React,{useState} from 'react'
import './Header.css'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation();
  return (
    <div className='header'>

      <div className='logo-container'>
        <img src="/Images/icone.svg" alt="logo Kasa" />
      </div>

      <div className='navbar'>
        <a 
        className={location.pathname === '/' ? "selected" : "unselected"}
        href="/" 
        id='home'
        >Accueil</a>

        <a 
        href="/about" 
        id='about'
        className={location.pathname === '/about' ? "selected" : "unselected"}
        >A propos</a>
      </div>

    </div>
  )
}
