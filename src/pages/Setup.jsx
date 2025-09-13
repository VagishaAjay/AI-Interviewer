import '../assets/styles/Setup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Setup({ darkMode }) {
  const [cameraStatus, setCameraStatus] = useState('Camera permission not yet requested');
  const [micStatus, setMicStatus] = useState('Microphone permission not yet requested');
  const navigate = useNavigate();

  const requestCameraAccess = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStatus('Camera access granted');
    } catch (err) {
      setCameraStatus('Camera access denied');
    }
  };

  const requestMicAccess = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicStatus('Microphone access granted');
    } catch (err) {
      setMicStatus('Microphone access denied');
    }
  };

  const handleBack = () => {
    navigate('/guidelines');
  };

  const handleStart = () => {
    if (cameraStatus === 'Camera access granted' && micStatus === 'Microphone access granted') {
      navigate('/interview-start');
    } else {
      alert('Please allow both camera and microphone access to proceed.');
    }
  };

  return (
    <div className={`setup-container ${darkMode ? 'dark' : ''}`}>
      <h1 className="setup-title">Setup <span>Recording</span></h1>
      <p className="setup-subtitle">
        We need access to your camera and microphone to conduct the interview. Please grant permissions below.
      </p>

      <div className="permission-row">
        <div className="permission-card">
          <h3>📷 Camera Access</h3>
          <p className="permission-desc">Required for video recording during the interview</p>
          <p className="permission-status">{cameraStatus}</p>
          <p className="permission-note">Your camera will be used to record your responses during the interview.</p>
          <button onClick={requestCameraAccess}>Allow Camera</button>
        </div>

        <div className="permission-card">
          <h3>🎤 Microphone Access</h3>
          <p className="permission-desc">Required for voice responses during the interview</p>
          <p className="permission-status">{micStatus}</p>
          <p className="permission-note">Your microphone will be used to capture your voice responses.</p>
          <button onClick={requestMicAccess}>Allow Microphone</button>
        </div>
      </div>

      <div className="setup-actions">
        <button className="back-button" onClick={handleBack}>← Back to Guidelines</button>
        <button className="start-button" onClick={handleStart}>Start Interview →</button>
      </div>
    </div>
  );
}

export default Setup;
