import React from 'react';
import "./Section-01.css" 
import Agua from "./img/imagem-agua.png"

const Section01 = () => {
  return (
    <section className='container-potencial'>
      <div className='ctn-explicacao'>
        <h1>Harnessing </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum praesentium officiis iste molestiae eum quo itaque quasi delectus alias voluptates accusamus adipisci cupiditate est ipsam voluptate quae, similique laborum aspernatur!</p>
        <div className='btn-potencial'>
          <button id='btn-explore'>Explore now</button>
          <button id='btn-learn'>Learn More</button>
        </div>
      </div>
      <div className='ctn-image'>
        <img src={Agua} alt=""/>
      </div>
    </section>
    
  );
};

export default Section01;
