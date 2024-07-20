import React from 'react';

function Member({ name, images, role, bio }) {
  return (
    <div className="member">
      <div className="member__information">
        <div className="member__role">{role}</div>
        <div className="member__name">{name}</div>
        <div className="member__bio">{bio}</div>
      </div>
      <img src={images.png} alt={name} />
    </div>
  );
}

export default Member;
