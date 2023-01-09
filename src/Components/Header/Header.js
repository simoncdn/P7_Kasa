import React from 'react'
import './Header.css'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation();
  const arrNav = [
    {
      label : 'Accueil',
      id : 'home',
      path : '/'
    },
    {
      label : 'A propos',
      id : 'about',
      path : '/about'
    }
  ]
  return (
    <div className='header'>

      <div className='logo-container'>
        <img src="/Images/icone.svg" alt="logo Kasa" />
      </div>
      <div className="navbar">
        {arrNav.map((item, index) => {
            return (
            <a
            className={location.pathname === item.path ? "selected" : "unselected"}
            key={index}
            id={`${item.id}`}
            href={`${item.path}`}>
            {item.label}</a>
            )
          })}
      </div>

    </div>
  )
}
