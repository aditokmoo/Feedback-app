import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import MessageCard from '../shared/MessageCard';
import Alert from '@mui/material/Alert';

function Message() {
  const { message } = useContext(FeedbackContext);

  return (
    <AnimatePresence>
      {message && 
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
          <MessageCard>
          <Alert severity="error">
            {message}
          </Alert>
          </MessageCard>
        </motion.div>
      }
    </AnimatePresence>
  ) 
}

export default Message