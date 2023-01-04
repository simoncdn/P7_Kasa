import React from 'react'
import './Banner.css'

export default function Banner(props) {
  return (
    <div className="banner">
        <div className="background">
          <img src={`${props.image}`} alt="" />
          <h2>{props.title}</h2>
        </div>
    </div>
  )
}
