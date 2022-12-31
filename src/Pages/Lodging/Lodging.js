import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './Lodging.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Dropdown from '../../Components/Dropdown/Dropdown'
import Rating from '../../Components/Rating/Rating'
import Slider from '../../Components/Slider/Slider'

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
  })

  return (
    <div className='lodging-container'>
      <Header/>
        {data.map(item => {
          if(item.id === id){
            return (
              <div 
              key={item.id}
              className="lodging-content">
                <div className="lodging-caroussel">
                  <Slider>{item.pictures}</Slider>
                </div>
                <div className="lodging-info-container">
                  <div className="lodging-info-left">
                    <h2>{item.title}</h2>
                    <p>{item.location}</p>
                    <div className='tags-container'>
                      <ul>
                        {item.tags.map(element => (
                          <li 
                          key={element}
                          className='tag'>{element}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lodging-info-right">
                    <div className="lodging-info-right-host">
                      <p>{item.host.name}</p>
                      <img src={`${item.host.picture}`} alt="host img"/>
                    </div>
                    <Rating>
                      {item.rating}
                    </Rating>
                  </div>
                </div>
                <div className="dropdowns">
                  <div className='dropdown'>
                    <Dropdown>
                      <span>Description</span>
                      <p>{item.description}</p>
                    </Dropdown>
                  </div>
                  <div className='dropdown'>
                    <Dropdown>
                      <span>Équipements</span>
                        <ul>
                          {item.equipments.map(item => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                    </Dropdown>
                  </div>
                </div>
              </div>
            )
          }
        })}
        <Footer />
    </div>
  )
}
