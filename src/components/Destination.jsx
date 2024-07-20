import React, { useState } from 'react';
import Planet from './Planet';
import planets from '../planets.json';

function Destination() {
  const [indexActive, setIndexActive] = useState(0);

  function onClickActive(id) {
    setIndexActive(id);
  }
  return (
    <div className="destination">
      <div className="destination__header">PICK YOUR DESTINATION</div>
      <div className="destination__content">
        <Planet {...planets.destinations[indexActive]} />
        <ul className="destination__list">
          {planets.destinations.map((planet) => {
            return (
              <li
                onClick={() => onClickActive(planet.id)}
                className={indexActive === planet.id ? 'active' : ''}
                key={planet.id}>
                {planet.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Destination;
