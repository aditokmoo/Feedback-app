import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from 'framer-motion';
import MessageCard from "./shared/MessageCard";
import Spinner from "./assets/Spinner";

function FeedbackList() {
  const { feedback, loading } = useContext(FeedbackContext);

  if(!loading && (!feedback || feedback.length === 0)) {
    return <MessageCard>No Feedback</MessageCard>
  }

  return loading ? <Spinner /> :
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map(item => (
          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
}

export default FeedbackList