import '../assets/styles/Interview.css';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Interview({ darkMode }) {
  const [resume, setResume] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      setResume(file);
      console.log("Resume uploaded:", file.name);
    } else {
      alert("File must be PDF, DOC, or DOCX and under 10MB.");
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleContinue = () => {
    if (resume) {
      navigate('/guidelines');
    } else {
      alert('Please upload your resume before continuing.');
    }
  };

  return (
    <div className={`interview-container ${darkMode ? 'dark' : ''}`}>
      <h1 className="interview-title">Upload Your <span>Resume</span></h1>
      <p className="interview-subtitle">
        Upload your resume to get personalized interview questions tailored to your experience and skills.
      </p>

      <div className="upload-box">
        <h3>Resume Upload</h3>
        <p className="upload-info">PDF, DOC, DOCX (Max size: 10MB)</p>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />

        <div className="upload-area" onClick={triggerFileInput}>
          <p>Drop your resume here or click to browse</p>
          <p className="upload-note">PDF, DOC, DOCX up to 10MB</p>
          <button className="choose-file" type="button">Choose File</button>
          {resume && <p className="file-name">Uploaded: {resume.name}</p>}
        </div>

        <div className="upload-actions">
          <button className="back-button" onClick={handleBack}>← Back</button>
          <button className="continue-button" onClick={handleContinue}>Continue to Guidelines</button>
        </div>
      </div>

      <div className="feature-row">
        <div className="feature-card">
          <h4>Clear Format</h4>
          <p>Ensure your resume is well-formatted and easy to read.</p>
        </div>
        <div className="feature-card">
          <h4>Highlight Skills</h4>
          <p>Include relevant technical skills and programming languages.</p>
        </div>
        <div className="feature-card">
          <h4>Show Projects</h4>
          <p>Include projects that demonstrate your coding abilities.</p>
        </div>
      </div>
    </div>
  );
}

export default Interview;
