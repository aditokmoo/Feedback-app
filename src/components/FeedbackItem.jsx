import { FaStar, FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
    const { deleteFeedback } = useContext(FeedbackContext)
    let ratings = [];

    for(let i = 1; i <= item.rating; i++) {
        ratings.push(item.rating);
    }

    const rating = ratings.map((rate, index) => <FaStar key={index} />);

    return (
        <div className="feedback">
            <div className="feedback-num">{rating}</div>
            <button className='close' onClick={() => deleteFeedback(item.id)}>
                <FaTimes />
            </button>
            <div className="feedback-text">{item.text}</div>
        </div>
    )
}

export default FeedbackItem