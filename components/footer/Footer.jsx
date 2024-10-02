import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title' >Tanuja</h1>

        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>
        </ul>


        <span className='footer__copy'>
          &#169; Tanuja. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
