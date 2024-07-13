import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="Projects">
      <div className="section">
        <h2>Projects</h2>
        <hr />
        <div className="project-list">
          <div className="project-card">
            <h3>INTEL- Classification</h3>
            <p>
              Utilized the Intel Classification Dataset for image classification tasks in a Data Science project. Implemented machine learning algorithms such as convolutional neural networks (CNNs) to classify images into predefined categories. Conducted data preprocessing, model training, and evaluation to achieve accurate classification results. Demonstrated proficiency in handling large-scale datasets and applying advanced machine learning techniques for real-world applications.
            </p>
          </div>
          <div className="project-card">
            <h3>Expense Tracker</h3>
            <p>
              Developed an expense tracker system using a Database Management System (DBMS). Designed database schemas to store expense data, user information, and transaction details. Implemented CRUD (Create, Read, Update, Delete) functionalities for managing expenses. Integrated user authentication and access control features to ensure data security. Utilized SQL queries for data retrieval, analysis, and reporting. Demonstrated strong database design and management skills in a real-world project setting.
            </p>
          </div>
          <div className="project-card">
            <h3>Online Recipe Generator</h3>
            <p>
              Developed an AI-based Online Recipe Generator that creates unique recipes based on user preferences and dietary needs. Used advanced algorithms to ensure the generated recipes are creative and practical. Demonstrated proficiency in AI and machine learning concepts to deliver a user-friendly and innovative solution.
            </p>
          </div>
          <div className="project-card">
            <h3>Pixel Intelligence</h3>
            <p>
              Developed a web application for generating and managing AI-generated images using the Unsplash API. Implemented features for saving images to local storage, viewing and deleting saved images, and uploading custom images. Utilized HTML, CSS, and JavaScript for front-end development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
