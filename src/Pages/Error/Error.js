import './Error.css'
import { Link } from "react-router-dom"
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function Error() {
  return (
    <div className='error-container'>
      <Header />
      <div className="error-content">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/'>Retournez sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  )
}
