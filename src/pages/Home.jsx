import '../assets/styles/Home.css';
import { useState } from 'react';

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div className={`home-wrapper ${darkMode ? 'dark' : ''}`}>
      <header className="header">
        <h1 className="logo">VisionHire</h1>
        <div className="nav-buttons">
          <a href="/login" className="nav-link">Login</a>
          <a href="/register" className="nav-link">Register</a>
          <button onClick={toggleTheme} className="theme-toggle">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      <section className="hero">
        <h2>Master Your Software Engineering Interviews</h2>
        <p>
          Practice with our AI-powered interviewer that adapts to your responses,
          provides intelligent follow-ups, and helps you build confidence for your next interview.
        </p>
        <a href="/interview" className="cta-button">Start Your Interview Practice</a>
      </section>

      <section className="features">
        <div className="feature-row">
          <div className="feature-card">
            <h3>AI-Powered Questions</h3>
            <p>Dynamic questions tailored to your responses for realistic practice.</p>
          </div>
          <div className="feature-card">
            <h3>Software Engineering Focus</h3>
            <p>Topics include data structures, system design, and coding challenges.</p>
          </div>
          <div className="feature-card">
            <h3>Voice & Text Responses</h3>
            <p>Simulate real interviews with voice or text input options.</p>
          </div>
        </div>

        <div className="feature-row">
          <div className="feature-card">
            <h3>Resume Analysis</h3>
            <p>Enable resume analysis to personalize the interview experience.</p>
          </div>
          <div className="feature-card">
            <h3>Real Interview Experience</h3>
            <p>Enable camera and microphone for authentic interview conditions.</p>
          </div>
          <div className="feature-card">
            <h3>Instant Feedback</h3>
            <p>Receive intelligent feedback and follow-up questions based on your responses.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="how-row">
          <div className="how-card">
            <strong>Upload Resume</strong>
            <p>Upload your resume to personalize the interview experience.</p>
          </div>
          <div className="how-card">
            <strong>Setup Recording</strong>
            <p>Enable camera and microphone for realistic practice.</p>
          </div>
          <div className="how-card">
            <strong>AI Interview</strong>
            <p>Answer 10–15 personalized questions with follow-ups.</p>
          </div>
          <div className="how-card">
            <strong>Get Feedback</strong>
            <p>Receive detailed feedback and improvement suggestions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
