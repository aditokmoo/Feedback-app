import Header from './components/assets/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import { FeedbackProvider } from './context/FeedbackContext';
import './App.css';

function App() {
  return (
    <FeedbackProvider>
      <>
        <Header />
        <FeedbackForm />
        <FeedbackList />
      </>
    </FeedbackProvider>
  );
}

export default App;
