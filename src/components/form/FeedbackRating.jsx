import { useState } from 'react';

function FeedbackRating({select}) {
    const [ selected, setSelected ] = useState(5)

    const handleRatingChange = (e) => {
        setSelected(+e.currentTarget.value);
        select(+e.currentTarget.value);
    }
    
    return (
        <div className="rating">
            <h2>Rate your experience with our product:</h2>
            <ul className="rating-form">
                <li>
                    <input type="radio" id="num1" checked={selected === 1} onChange={handleRatingChange} name="rating" value='1' />
                    <label htmlFor="num1">1</label>
                </li>
                <li>
                    <input type="radio" id="num2" checked={selected === 2} onChange={handleRatingChange} name="rating" value='2' />
                    <label htmlFor="num2">2</label>
                </li>
                <li>
                    <input type="radio" id="num3" checked={selected === 3} onChange={handleRatingChange} name="rating" value='3' />
                    <label htmlFor="num3">3</label>
                </li>
                <li>
                    <input type="radio" id="num4" checked={selected === 4} onChange={handleRatingChange} name="rating" value='4' />
                    <label htmlFor="num4">4</label>
                </li>
                <li>
                    <input type="radio" id="num5" checked={selected === 5} onChange={handleRatingChange} name="rating" value='5' />
                    <label htmlFor="num5">5</label>
                </li>
            </ul>
        </div>
    )
}

export default FeedbackRating