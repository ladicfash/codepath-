import React from 'react';
import './EventCard.css';

function EventCard({ title, description, link, image }) {
  return (
    <div className="event-card">
      <img src={image} alt={title} />
      <div className="event-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
      </div>
    </div>
  );
}

export default EventCard;