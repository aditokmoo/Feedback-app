import { useContext, useState } from 'react';
import FeedbackRating from "./form/FeedbackRating";
import FeedbackMessage from "./form/FeedbackMessage";
import Message from "./assets/Message";
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const { setRating } = useContext(FeedbackContext)

  return (
    <div className="forms">
      <FeedbackRating select={rating => setRating(rating)} />
      <FeedbackMessage />
      <Message />
    </div>
  )
}

export default FeedbackForm