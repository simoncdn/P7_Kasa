import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './Card.css';
import {Link} from 'react-router-dom';

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
      <ul>
        {data.map(item => (
        <Link to={`logements/${item.id}`}
        key={item.id}
        >
          <li
          style={{ backgroundImage: `url(${item.cover})`,backgroundSize: 'cover'}}>
            <div className="card-linearGradient"></div>
            <div className="card-title">
              <h2>{item.title}</h2>
            </div>
          </li>
        </Link>
        ))}
      </ul>
    </div>
  )
}
