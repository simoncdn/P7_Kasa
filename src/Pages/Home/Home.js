import Header from '../../Components/Header/Header'
import './Home.css'
import Card from "../../Components/Card/Card"
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer'
import lodgingsData from '../../assets/lodging.json'

export default function Home() {
  return (
    <div className='home-container'>
        <Header />
        <Banner 
        image={"/Images/bannerImgHome.jpg"}
        title="Chez vous, partout et ailleurs"
         />
        <div className="card-container">
          {lodgingsData.map((item, index) => (
            <Card
            key={index}
            id={item.id}
            title={item.title}
            cover={item.cover}
            />
          ))}
        </div>
        <Footer />
    </div>
  )
}
