import React from 'react';
import './Home.css';
import profilePic from '../assets/profile.jpg';

function Home() {
  return (
    <div className="Home">
      <div className="profile">
        <div className="profile-center">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <h2>About Me</h2>
        <hr />
        <p>A Dedicated Individual eager to learn and contribute effectively both independently and as part of a team. With adaptability and strong communication skills, I'm ready to apply my knowledge to real-world projects. Seeking opportunities to grow personally and professionally while making a positive impact.</p>
      </div>

      <div className="section">
        <h2>Education Background</h2>
        <hr />
        <ul>
          <li>Madras Institute of Technology, Chennai</li>
          <li>BTech Artificial Intelligence and Data Science, 2022-2026</li>
          <li>CGPA: 7.75 (as of 3rd semester)</li>
        </ul>
        <ul>
          <li>Zion Matric Higher Secondary School, Chennai</li>
          <li>HSC: 95.8%</li>
        </ul>
        <ul>
          <li>Zion Matric Higher Secondary School, Chennai</li>
          <li>SSLC: 85.4%</li>
        </ul>
      </div>

      <div className="section">
        <h2>Technical Skills</h2>
        <hr />
        <ul>
          <li>Python</li>
          <li>C++</li>
          <li>SQL (Oracle)</li>
          <li>OOPs, Data Structures</li>
          <li>Artificial Intelligence (Basics)</li>
          <li>Data Science (Basics)</li>
          <li>Data Visualization</li>
        </ul>
      </div>

      <div className="section">
        <h2>Soft Skills</h2>
        <hr />
        <ul>
          <li>Communication</li>
          <li>Teamwork</li>
        </ul>
      </div>

      <div className="section">
        <h2>Organization</h2>
        <hr />
        <ul>
          <li>Member of NSS, MIT (2022-Present)</li>
          <li>Member of TBO, MIT (2022-Present)</li>
        </ul>
      </div>

      <div className="section">
        <h2>Languages</h2>
        <hr />
        <ul>
          <li>Tamil</li>
          <li>English</li>
        </ul>
      </div>

      <div className="section">
        <h2>Achievements</h2>
        <hr />
        <ul>
          <li>Winner of MUTEX’23 Learn Code Unleash Competition conducted by Information Technology Association (ITA) of MIT Campus, Anna University</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
