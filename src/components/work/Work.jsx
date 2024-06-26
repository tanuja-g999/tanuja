import React from 'react';
import './work.css';
import Works from './Works';


const Work = (item) => {
  return (
    <section className='work section' id='portfolio'>
      <h2 className='section__title'>Projects</h2>

      <span className='section__subtitle'>Most recent works</span>
      <div className='work__card' key={item.id}>


      <Works />
      </div>
    </section>
  );
};

export default Work;
