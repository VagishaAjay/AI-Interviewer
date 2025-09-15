import '../assets/styles/InterviewStart.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    category: 'Introduction',
    text: 'Tell me about yourself and your experience in software development.',
  },
  {
    category: 'Technical Skills',
    text: 'What programming languages are you most comfortable with?',
  },
  // Add more questions as needed
];

function InterviewStart({ darkMode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [time, setTime] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
  if (currentIndex < questions.length - 1) {
    setCurrentIndex(currentIndex + 1);
    setAnswer('');
    setTime(0);
  } else {
    navigate('/result', {
  state: {
    score: 8.5,
    analysis: 'Your answers were clear and well-articulated...',
  }
});
  }
};

  const handleEnd = () => {
    if (window.confirm('Are you sure you want to end the interview early?')) {
      navigate('/');
    }
  };

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);

  return (
    <div className={`interview-start-container ${darkMode ? 'dark' : ''}`}>
      <header className="interview-header">
        <h1>VisionHire <span>Interview</span></h1>
        <div className="status-bar">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>⏱ {formatTime(time)}</span>
          <span>Category: {questions[currentIndex].category}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          <span>{progress}%</span>
        </div>
      </header>

      <div className="question-card">
        <p>{questions[currentIndex].text}</p>
      </div>

      <div className="answer-section">
        <label>Your Answer</label>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here, or use voice recording..."
        />
        <div className="answer-actions">
          <button className="voice-button">🎙 Voice Answer</button>
          <button className="next-button" onClick={handleNext}>Next Question →</button>
        </div>
      </div>

      <button className="end-button" onClick={handleEnd}>End Interview Early</button>
    </div>
  );
}

export default InterviewStart;
