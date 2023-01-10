import {useState} from 'react'
import './Gallery.css'
import BtnGallery from './BtnGallery'

export default function Gallery({ images }) {

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
        {images.length > 1 ?
            <>
            {images.map((image, index) => {
                return (
                    <div
                    key={index}
                    className={slideIndex === index ?
                    "slide active" : "slide"}
                    >
                        <img src={`${image}`} alt="images de la location" />
                    </div>
                )
            })}
            <BtnGallery moveSlide={() => changeSlide('next')} direction={"next"}/>
            <BtnGallery moveSlide={() => changeSlide('prev')} direction={"prev"}/>
            </>
        : 
        <div className="slide active">
            <img src={`${images[0]}`} alt="location" />
        </div>
        }
    </div>
  )
}