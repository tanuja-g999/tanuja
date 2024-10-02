import React from 'react';

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i className='bx bx-award about__icon'></i>

        <h3 className='about__title'>Experience</h3>
        <span className='about__subtitle'> 2 Years</span>
      </div>

      <div className='about__box'>
        <i className='bx bx-landscape about__icon'></i>
        

        <h3 className='about__title'>Interested</h3>
        <span className='about__subtitle'>Exploring</span>
      </div>

      <div className='about__box'>
        <i className='bx bxs-graduation about__icon'></i>

        <h3 className='about__title'>Graduated</h3>
        <span className='about__subtitle'>Master's Degree</span>
      </div>

      
    </div>
  );
};

export default Info;
