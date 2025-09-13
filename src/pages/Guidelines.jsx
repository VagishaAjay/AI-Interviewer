import '../assets/styles/Guidelines.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Guidelines({ darkMode }) {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/interview');
  };

  const handleProceed = () => {
    if (agreed) {
      navigate('/setup');
    } else {
      alert('Please agree to the guidelines before proceeding.');
    }
  };

  return (
    <div className={`guidelines-container ${darkMode ? 'dark' : ''}`}>
      <h1 className="guidelines-title">Interview <span>Guidelines</span></h1>
      <p className="guidelines-subtitle">
        Please read and acknowledge these important guidelines before starting your interview.
      </p>

      <div className="guideline-box red">
        <h3>📹 Recording in Progress</h3>
        <ul>
          <li>Your video and audio will be recorded during the interview</li>
          <li>Voice responses will be transcribed and analyzed</li>
          <li>Recordings are used solely for interview assessment and feedback</li>
        </ul>
      </div>

      <div className="guideline-box orange">
        <h3>⚠️ Academic Integrity</h3>
        <ul>
          <li>Using external resources or references during the interview</li>
          <li>Getting assistance from other people</li>
          <li>Copy-pasting answers from online sources</li>
          <li>Using AI tools to generate answers</li>
          <li>Switching tabs or applications during the interview</li>
        </ul>
      </div>

      <div className="guideline-box blue">
        <h3>⚙️ Technical Requirements</h3>
        <ul>
          <li>Stable internet connection</li>
          <li>Working camera and microphone</li>
          <li>Quiet environment</li>
          <li>No other applications running in background</li>
          <li>Web-enabled browser</li>
        </ul>
      </div>

      <label className="agreement">
        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        I have read and understood all the guidelines above. I agree to maintain academic integrity and acknowledge that this interview session will be recorded. I understand that any violation of these guidelines may result in disqualification.
      </label>

      <div className="guidelines-actions">
        <button className="back-button" onClick={handleBack}>← Back to Resume Upload</button>
        <button className="proceed-button" onClick={handleProceed}>Proceed to Setup</button>
      </div>
    </div>
  );
}

export default Guidelines;
