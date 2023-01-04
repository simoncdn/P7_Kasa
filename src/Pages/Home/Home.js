import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../../Components/Header/Header'
import './Home.css'
import Card from "../../Components/Card/Card"
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer'

export default function Home() {

  // State
  const [data, setData] = useState([]);

  // API CALL AND UPDATE DATA 
  useEffect( () => {
    const fetchData = async () => {
      const result = await axios(
        '/lodging.json'
      );
      setData(result.data);
      console.log(result.data);
    };
    fetchData();
  },[])

  return (
    <div className='home-container'>
        <Header />
        <Banner 
        image={"/Images/bannerImgHome.jpg"}
        title="Chez vous, partout et ailleurs"
         />
        <div className="card-container">
          {data.map((item, index) => (
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
