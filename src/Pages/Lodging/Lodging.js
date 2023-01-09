import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './Lodging.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Dropdown from '../../Components/Dropdown/Dropdown'
import Rating from '../../Components/Rating/Rating'
import Slider from '../../Components/Slider/Slider'
import LodgingInfo from '../../Components/LodgingInfo/LodgingInfo';

export default function Lodging() {

  const [data, setData] = useState([]);
  const {id} = useParams();
  
  useEffect( () => {
    const fetchData = async () => {
      const result = await axios(
        '/lodging.json'
        );
        setData(result.data);
      };
      fetchData();
      
  },[])

  return (
    <div className='lodging-container'>
      <Header/>
      <div className="lodging-content">
        {data.filter(item => item.id === id).map(item => {
            return (
              <div 
              key={item.id}>
                <Slider images={item.pictures}/>

                <LodgingInfo 
                  title={item.title}
                  location={item.location}
                  tags={item.tags}
                  host={{
                    name: `${item.host.name}`,
                    picture: `${item.host.picture}`
                  }}
                  rating={item.rating}
                />
                
                <div className="dropdowns">
                  <div className='dropdown'>
                    <Dropdown 
                    title='Description' 
                    content={item.description} />
                  </div>
                  <div className='dropdown'>
                    <Dropdown
                    title='Équipements'
                    content={
                      item.equipments.map(item => (
                        <p key={item}>{item}</p>
                      ))}
                    />
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
        <Footer />
    </div>
  )
}
