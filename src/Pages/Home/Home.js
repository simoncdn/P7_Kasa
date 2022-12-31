import React from 'react'
import Header from '../../Components/Header/Header'
import './Home.css'
import Card from "../../Components/Card/Card"
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer'

export default function Home() {




  return (
    <div className='home-container'>
        <Header />
        <Banner>
            <img src="/Images/bannerImgHome.jpg" alt="" />
            <h1>Chez vous, partout et ailleurs</h1>
        </Banner>
        <Card />
        <Footer />
    </div>
  )
}
