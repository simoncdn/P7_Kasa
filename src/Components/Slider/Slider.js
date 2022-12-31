import {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'

export default function Slider(props) {

    const [dataSlider, setDataSlider] = useState(props.children)
    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false
    })

    const nextSlide = () => {
        if(slideAnim.index !== dataSlider.length && !slideAnim.inProgress){
            setSlideAnim({index: slideAnim.index + 1, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index: slideAnim.index + 1, inProgress: false})
            },400);
        }
        else if(slideAnim.index === dataSlider.length && !slideAnim.inProgress){
            setSlideAnim({index: 1, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index: 1, inProgress: false})
            },400);
        }
    }

    const prevSlide = () => {
        if(slideAnim.index !== 1 && !slideAnim.inProgress){
            setSlideAnim({index: slideAnim.index - 1, inProgress: true})

            setTimeout( () => {
                setSlideAnim({index: slideAnim.index =1, inProgress: false})
            }, 400)
        }
        else if(slideAnim.index === 1 && !slideAnim.inProgress){
            setSlideAnim({index: dataSlider.length, inProgress: true})

            setTimeout( () => {
                setSlideAnim({index: dataSlider.length, inProgress: false})
            }, 400)
        }
    }

  return (
    <div className='slider-container'>
        {dataSlider.map((obj, index) => {
            return (
                <div
                key={obj}
                className={slideAnim.index === index + 1 ?
                "slide active-anim" : "slide"}
                >
                    <img src={`${dataSlider[index]}`} alt="" />
                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"}/>
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
    </div>
  )
}
