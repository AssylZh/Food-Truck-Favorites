import React from 'react';

const Board = ({ resources }) => {
  return (
    <div className="board">
      {resources.map((resource, index) => (
        <div className="card" key={index}>
          <img src={resource.image} alt={`${resource.title} logo`} className="card-image" />
          <h3>{resource.title}</h3>
          <p>{resource.description}</p>
          <a href={resource.link} target="_blank" rel="noopener noreferrer" className="view-menu-btn">
            View Menu
          </a>
        </div>
      ))}
    </div>
  );
};

export default Board;