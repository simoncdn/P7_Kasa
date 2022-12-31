import React,{useState} from 'react'
import './Dropdown.css'

export default function Dropdown(props) {

    const [toggle, setToggle] = useState(true);

    const foo = () => {
        setToggle(prevValue => !prevValue)
    }

  return (
    <div className='dropdown-container'>
        <div 
        onClick={foo}
        className="dropdown-title">
            {props.children[0]}
            <img src="/Images/downArrow.svg" alt="arrow" className={toggle? null : "active-arrow"}/>
        </div>
        <div className={toggle ? "dropdown-txt" : "dropdown-txt active-txt"}>
            {props.children[1]}
        </div>
    </div>
  )
}
