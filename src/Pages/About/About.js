import React from 'react'
import './About.css'
import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import Dropdown from '../../Components/Dropdown/Dropdown'
import Footer from '../../Components/Footer/Footer'

export default function About() {
  return (
    <div className='about-container'>

      <Header />
      <Banner>
          <img src="/Images/bannerImgAbout.png" alt="" />
      </Banner>
      <div className="dropdown-bloc">
        <Dropdown>
          <span>Fiabilité</span>
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Dropdown>
        <Dropdown>
          <span>Respect</span>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Dropdown>
        <Dropdown>
          <span>Service</span>
          <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </Dropdown>
        <Dropdown>
          <span>Sécurité</span>
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Dropdown>
      </div>

      <Footer />
    </div>
  )
}
