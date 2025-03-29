import React from 'react';
import '/src/styles/SectionHead.css';

const SectionHead = ({ title, lead }) => {
  return (
    <div>
      <h1 className="section-title">{title}</h1>
      <p className="section-lead">{lead}</p>
      <hr className="spacer" />
    </div>
  );
};

export default SectionHead;
