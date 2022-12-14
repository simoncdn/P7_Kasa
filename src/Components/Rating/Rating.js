import {useEffect, useState} from 'react'
import './Rating.css'

export default function Rating({rating}) {

    const [test, setTest] = useState([false, false, false, false, false])
    
    useEffect( () => {
        const ratingStars = parseInt([rating]);
        const newRate = [...test];

            for (let i = 0; i < ratingStars; i++) {
                newRate[i] = true;
            };
            setTest(newRate)
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[rating])
    
  return (
    <div className="rate-container">
        
        {test.map((rate, index) => {
            return (
                <svg
                    key={index}
                    className={rate ? "star-red" : "star-grey"}
                    viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"/>
                </svg>
            )
        })}
    </div>
  )
}


// .prettierrc
// {
//     "singleQuote": true,
//     "trailingComma": "all",
//     "arrowParens": "avoid"
//   }