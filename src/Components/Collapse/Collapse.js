import {useState} from 'react'
import './Collapse.css'

export default function Dropdown({title, content}) {
    const [toggle, setToggle] = useState(true);

    const foo = () => {
        setToggle(prevValue => !prevValue)
    }

  return (
    <div className='collapse-container'>
        <div 
        onClick={foo}
        className="collapse-title">
            <h2>{title}</h2>
            <img src="/Images/downArrow.svg" alt="arrow" className={toggle? null : "active-arrow"}/>
        </div>
        <div className={toggle ? "collapse-txt" : "collapse-txt active-txt"}>
            {content}
        </div>
    </div>
  )
}
