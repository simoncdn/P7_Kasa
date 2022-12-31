import React from 'react'
import './Error.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function Error() {
  return (
    <div className='error-container'>
      <Header />
      <div className="error-content">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href='/'>Retournez sur la page d'accueil</a>
      </div>
      <Footer />
    </div>
  )
}
