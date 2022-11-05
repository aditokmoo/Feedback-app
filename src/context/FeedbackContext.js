import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [ feedback, setFeedback ] = useState([])
    const [ text, setText ] = useState('');
    const [ rating, setRating ] = useState(5);
    const [ btnDisabled, setBtnDisabled ] = useState(true);
    const [ message, setMessage ] = useState('');
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
      fetchFeedback();
    }, [])

    // Fetch feedback
    const fetchFeedback = async () => {
      const res = await fetch(`/feedback?_sort=id&_order=desc`);
      const data = await res.json();

      setFeedback(data);
      setLoading(false);
    }

    // Add Feedback Function
    const addFeedback = async newFeedback => {
      const res = await fetch('/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
      });

      const data = await res.json();

      setFeedback([data, ...feedback]);
    }

    // Delete feedback function
    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete this feedback?')) {
          await fetch(`/feedback/${id}`, { method: 'DELETE' });

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
        loading,
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