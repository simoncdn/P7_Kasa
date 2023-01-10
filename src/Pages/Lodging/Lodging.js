import {useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import './Lodging.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Collapse from '../../Components/Collapse/Collapse'
import Gallery from '../../Components/Gallery/Gallery'
import LodgingInfo from '../../Components/LodgingInfo/LodgingInfo';
import lodgingsData from '../../assets/lodging.json';

export default function Lodging() {

  const {id} = useParams();
  const navigate = useNavigate()

  useEffect( () => {
    if(!lodgingsData.find(item => item.id === id)){
      return navigate("/error404");
    }
  })

  return (
    <div className='lodging-container'>
      <Header/>
      <div className="lodging-content" >
        {lodgingsData.filter(item => item.id === id).map(item => {return (
            <div 
            key={item.id}>
              <Gallery images={item.pictures}/>

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

              <div className="collapses">
                <div className='collapse'>
                  <Collapse 
                  title='Description' 
                  content={item.description} />
                </div>
                <div className='collapse'>
                  <Collapse
                  title='Équipements'
                  content={
                    item.equipments.map(item => (
                      <p key={item}>{item}</p>
                    ))}
                  />
                </div>
              </div>
            </div>
          )})}
        </div>
        <Footer />
    </div>
  )
}
