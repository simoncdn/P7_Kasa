import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <a
      href={`logements/${props.id}`}
      className='card'
      style={{ backgroundImage: `url(${props.cover})`,backgroundSize: 'cover'}}>
        <div className="card-linearGradient"></div>
        <div className="card-title">
          <h2>{props.title}</h2>
        </div>
    </a>
  )
}
