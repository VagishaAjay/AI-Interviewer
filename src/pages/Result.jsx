import '../assets/styles/Result.css';
import { useNavigate } from 'react-router-dom';

function Result({ darkMode }) {
  const navigate = useNavigate();

  // Example data — replace with actual score and analysis later
  const score = 8.5;
  const analysis = "Your answers were clear and well-articulated, demonstrating good communication skills and knowledge of the subject matter.";

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className={`result-container ${darkMode ? 'dark' : ''}`}>
      <h1 className="result-title">Interview <span>Results</span></h1>
      <p className="result-subtitle">Your interview has been completed. Review your performance below.</p>

      <div className="result-card">
        <div className="score-section">
          <h3>Interview Score</h3>
          <p className="score">{score}</p>
          <p className="out-of">out of 10</p>
        </div>

        <div className="analysis-section">
          <h3>Answer Analysis</h3>
          <p>{analysis}</p>
        </div>
      </div>

      <button className="home-button" onClick={handleReturnHome}>Return to Home</button>
    </div>
  );
}

export default Result;
