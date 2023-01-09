import {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'

export default function Slider({ images }) {

    const [slideIndex, setSlideIndex] = useState(0)
    const [isTransitionInProgress, setIsTransitionInProgress] = useState(false)

    const changeSlide = (direction) => {
        if (isTransitionInProgress) {
            return;
        }
        
        setIsTransitionInProgress(true);

        setSlideIndex(prevIndex => {
            if (direction === 'prev') {
                console.log(images.length);
                return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
            }
            
            return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        });

        setTimeout(() => {
            setIsTransitionInProgress(false);
        }, 400);
    }

  return (
    <div className='slider-container'>
        {images.map((image, index) => {
            return (
                <div
                key={index}
                className={slideIndex === index ?
                "slide active-anim" : "slide"}
                >
                    <img src={`${image}`} alt="" />
                </div>
            )
        })}
        <BtnSlider moveSlide={() => changeSlide('next')} direction={"next"}/>
        <BtnSlider moveSlide={() => changeSlide('prev')} direction={"prev"}/>
    </div>
  )
}