import React from 'react'
import './Banner.css'

export default function Banner(props) {
  return (
    <div className="banner">
        <div className="background">
            {props.children}
        </div>
    </div>
  )
}
