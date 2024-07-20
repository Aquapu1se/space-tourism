import React from 'react';

function Planet({ name, images, description, distance, travel }) {
  return (
    <div className="planet">
      <img src={images.png} alt={name} />
      <div className="planet__content">
        <div className="planet__title">{name}</div>
        <div className="planet__description">{description}</div>
        <hr />
        <div className="planet__subinfo">
          <div className="planet__distance">
            <p>AVG. DISTANCE</p>
            {distance}
          </div>
          <div className="planet__time">
            <p>EST. TIME TRAVEL</p>
            {travel}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planet;
