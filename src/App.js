import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from './data/FeedbackData';
import Header from './components/assets/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './App.css';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  }

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4();
    
    setFeedback([newFeedback, ...feedback]);
  }

  return (
    <>
      <Header />
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  );
}

export default App;
