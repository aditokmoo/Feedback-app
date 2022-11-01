import { FaStar, FaTimes } from 'react-icons/fa'

function FeedbackItem({ item, handleDelete }) {
    let ratings = [];

    for(let i = 1; i <= item.rating; i++) {
        ratings.push(item.rating);
    }

    const rating = ratings.map((rate, index) => <FaStar key={index} />);

    return (
        <div className="feedback">
            <div className="feedback-num">{rating}</div>
            <button className='close' onClick={() => handleDelete(item.id)}>
                <FaTimes />
            </button>
            <div className="feedback-text">{item.text}</div>
        </div>
    )
}

export default FeedbackItem