import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './Card.css';

export default function Card() {

  const [data, setData] = useState([]);

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
    <div className='card-container'>
        {data.map(item => (
          <a
          key={item.id}
          href={`logements/${item.id}`}
          className='card'
          style={{ backgroundImage: `url(${item.cover})`,backgroundSize: 'cover'}}>
            <div className="card-linearGradient"></div>
            <div className="card-title">
              <h2>{item.title}</h2>
            </div>
          </a>
        ))}
    </div>
  )
}
