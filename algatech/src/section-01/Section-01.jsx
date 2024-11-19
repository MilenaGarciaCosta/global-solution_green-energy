import React from 'react';
import Image from './img/background-section1.png';  

const Section01 = () => {
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',      
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}
    >
      <div className="container">
        <h1>Explore o poder das Algas</h1>
        <p>Texto aqui...</p>
      </div>
    </section>
  );
};

export default Section01;
