import React from 'react';
import './scss/Logo.scss';
import Nav from './Nav';

const Logo = ({ children }) => {
  return (
    <div className='Logo_Head'>
      <Nav></Nav>
      <div className='Logo_Body'>
        <div className='Logo_Top'>
          <div>
            유튜브와 <br />
            자유롭게
          </div>
        </div>
        <div className='Logo_Under'>
          <img src={process.env.PUBLIC_URL + '/yuzu05.png'} width='150' />
        </div>
      </div>
    </div>
  );
};

export default Logo;
