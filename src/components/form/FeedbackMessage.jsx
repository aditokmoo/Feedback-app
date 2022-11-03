import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';

function RatingMessage() {
  const { handleSubmit, messageValidation, btnDisabled, text } = useContext(FeedbackContext);

  return (
    <div className="rating-message">
        <h2>Anything that can be improved?</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" id="text" value={text} onChange={messageValidation} placeholder="Your feedback" />
            <button type="submit" disabled={btnDisabled}>Submit</button>
        </form>
    </div>
  )
}

export default RatingMessage