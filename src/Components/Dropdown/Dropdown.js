import {useState} from 'react'
import './Dropdown.css'

export default function Dropdown({title, content}) {
    const [toggle, setToggle] = useState(true);

    const foo = () => {
        setToggle(prevValue => !prevValue)
    }

  return (
    <div className='dropdown-container'>
        <div 
        onClick={foo}
        className="dropdown-title">
            <h2>{title}</h2>
            <img src="/Images/downArrow.svg" alt="arrow" className={toggle? null : "active-arrow"}/>
        </div>
        <div className={toggle ? "dropdown-txt" : "dropdown-txt active-txt"}>
            {content}
        </div>
    </div>
  )
}
