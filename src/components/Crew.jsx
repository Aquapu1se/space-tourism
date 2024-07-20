import React, { useState } from 'react';
import members from '../members.json';
import Member from './Member';

function Crew() {
  const [indexActive, setIndexActive] = useState(0);

  function onClickActive(id) {
    setIndexActive(id);
  }

  return (
    <div className="crew">
      <div className="crew__subtitle">MEET YOUR CREW</div>
      <div className="crew__content">
        <Member {...members.crew[indexActive]} />
        <div className="crew__btns">
          {members.crew.map((member) => {
            return (
              <button
                onClick={() => onClickActive(member.id)}
                key={member.id}
                className={indexActive === member.id ? 'crew__btn member-btn__active' : 'crew__btn'}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Crew;
