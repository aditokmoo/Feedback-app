import { useContext } from 'react';
import FeedbackRating from "./form/FeedbackRating";
import FeedbackMessage from "./form/FeedbackMessage";
import Message from "./assets/Message";
import FeedbackContext from '../context/FeedbackContext';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function FeedbackForm() {
  const { setRating } = useContext(FeedbackContext)

  return (
    <div className="forms">
      <FeedbackRating select={rating => setRating(rating)} />
      <FeedbackMessage />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Message />
    </div>
  )
}

export default FeedbackForm