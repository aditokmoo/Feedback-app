import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [ feedback, setFeedback ] = useState(FeedbackData);
    const [ text, setText ] = useState('');
    const [ rating, setRating ] = useState(5);
    const [ btnDisabled, setBtnDisabled ] = useState(true);
    const [ message, setMessage ] = useState('');

    // Add Feedback Function
    const addFeedback = newFeedback => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    // Delete feedback function
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this feedback?')) {
          setFeedback(feedback.filter(item => item.id !== id));
        }
    }

    // Message Validation
    const messageValidation = ({ target: {value} }) => {
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

    // Submit Function
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(text.trim().length > 10) {
          const newFeedback = {
            text,
            rating
          }
      
          addFeedback(newFeedback);
    
          setText('');
          setBtnDisabled(true);
        }
      }
    
    return <FeedbackContext.Provider value={{
        feedback,
        text,
        message,
        btnDisabled,
        setRating,
        addFeedback,
        deleteFeedback,
        messageValidation,
        handleSubmit
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext