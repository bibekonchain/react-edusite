import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import heroBg from '../../assets/hero.png';

const Hero = () => {
  return (
    <section className='hero'>
      <div className="overlay"></div>
      <div className="hero-content container">
        <h1>We Ensure Better Education for a Better World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore nihil ipsa vel dicta dolorem
          velit quia quasi sint, atque, suscipit quae consequatur eligendi vero. Molestiae maxime magni minus
          doloribus.
        </p>
        <button className='btn'>
          Explore More
          <span className="arrow">
            <img src={dark_arrow} alt="arrow" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
