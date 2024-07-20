import React, { useState } from 'react';
import termins from '../termins.json';
import Termin from './Termin';

function Technology() {
  const [indexActive, setIndexActive] = useState(0);

  function onClickActive(id) {
    setIndexActive(id);
  }

  return (
    <div className="technology">
      <div className="technology__header">SPACE LAUNCH 101</div>
      <div className="technology__content">
        <ol className="technology__list">
          {termins.technology.map((termin) => {
            return (
              <li
                key={termin.id}
                onClick={() => onClickActive(termin.id)}
                className={
                  indexActive === termin.id
                    ? 'technology__item technology__active'
                    : 'technology__item'
                }>
                {termin.id + 1}
              </li>
            );
          })}
        </ol>
        <Termin {...termins.technology[indexActive]} />
      </div>
    </div>
  );
}

export default Technology;
