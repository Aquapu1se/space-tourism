import React from 'react';

function Termin({ name, images, description }) {
  return (
    <div className="termin">
      <div className="termin__content">
        <div className="termin__subtitle">the terminology...</div>
        <div className="termin__name">{name}</div>
        <div className="termin__description">{description}</div>
      </div>
      <img src={images.portrait} alt={name} />
    </div>
  );
}

export default Termin;
