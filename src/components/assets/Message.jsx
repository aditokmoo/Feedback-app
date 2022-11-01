import { motion, AnimatePresence } from 'framer-motion';

function Message({message}) {
  return (
    <AnimatePresence>
      {message && 
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
          <div className="message">
            <p>{message}</p>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  ) 
}

export default Message