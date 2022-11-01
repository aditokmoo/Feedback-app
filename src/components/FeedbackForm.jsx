import { useState } from 'react';
import FeedbackRating from "./form/FeedbackRating";
import FeedbackMessage from "./form/FeedbackMessage";
import Message from "./assets/Message";

function FeedbackForm({ handleAdd }) {
  const [ text, setText ] = useState('');
  const [ rating, setRating ] = useState(5);
  const [ btnDisabled, setBtnDisabled ] = useState(true);
  const [ message, setMessage ] = useState('');

  const handleMessageChange = ({ target: {value} }) => {
    if(value === '') {
      setBtnDisabled(true);
      setMessage('');
    } else if(value !== '' && value.trim().length < 10) {
      setMessage('Text must be at least 10 charachters')
      setBtnDisabled(true);
    } else {
      setMessage('');
      setBtnDisabled(false);
    }

    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }
  
      handleAdd(newFeedback);

      setText('');
      setBtnDisabled(true);
    }
  }

  return (
    <div className="forms">
      <FeedbackRating select={rating => setRating(rating)} />
      <FeedbackMessage handleMessageChange={handleMessageChange} btnDisabled={btnDisabled} handleSubmit={handleSubmit} text={text} />
      <Message message={message} />
    </div>
  )
}

export default FeedbackForm