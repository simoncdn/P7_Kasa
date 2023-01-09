import './Banner.css'

export default function Banner({image, title}) {
  return (
    <div className="banner">
        <div className="background">
          <img src={`${image}`} alt="" />
          <h2>{title}</h2>
        </div>
    </div>
  )
}
