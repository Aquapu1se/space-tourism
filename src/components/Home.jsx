import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="home__text">
        <div className="home__subtitle">SO, YOU WANT TO TRAVEL TO</div>
        <div className="home__title">SPACE</div>
        <p className="home__description">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience! Explore
        </p>
      </div>
      <Link to="/destination" className="home__btn">
        EXPLORE
      </Link>
    </div>
  );
}

export default Home;
