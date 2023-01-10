import './Card.css';
import { Link } from 'react-router-dom'

export default function Card({id, cover, title}) {
  return (
    <Link
      to={`logements/${id}`}
      className='card'
      style={{ backgroundImage: `url(${cover})`,backgroundSize: 'cover'}}>
        <div className="card-linearGradient"></div>
        <div className="card-title">
          <h2>{title}</h2>
        </div>
    </Link>
  )
}
