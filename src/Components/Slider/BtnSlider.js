import React from 'react'

export default function BtnSlider(props) {
    
  return (
    <button
    onClick={props.moveSlide}
    className={props.direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
        <img src={props.direction === "next" ? "/Images/RightArrow.svg" : "/Images/LeftArrow.svg"} alt="left arrow" />
    </button>
  )
}
