import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import MessageCard from '../shared/MessageCard';

function Message() {
  const { message } = useContext(FeedbackContext);

  return (
    <AnimatePresence>
      {message && 
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
          <MessageCard>
            <p>{message}</p>
          </MessageCard>
        </motion.div>
      }
    </AnimatePresence>
  ) 
}

export default Message