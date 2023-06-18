import React from 'react';
import './job.css'

const JobComp = ({ title, company, location, description, requirements }) => {
  return (
    <div className="job">
      <h2 className="job-title">{title}</h2>
      <h3 className="job-company">{company}</h3>
      <p className="job-location">Location: {location}</p>
      <p className="job-description">Description: {description}</p>
      <h4 className="job-requirements">Requirements:</h4>
      <ul className="job-requirements-list">
        {requirements.map((requirement, index) => (
          <li key={index} className="job-requirement">{requirement}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobComp;