import React from 'react';
import { Navbar } from 'react-bootstrap';
import './scss/Nav.scss';

const Nav = () => {
  return (
    <div className='Nav_Wrapper'>
      <div className='Nav_Logo'> 유자 </div>
      <div className='Nav_Ul'>
        <ul>
          <li>유튜버</li>
          <li>편집자</li>
          <li>썸네일러</li>
          <li>윈윈</li>
          <li>고객센터</li>
          <li className='Nav_Login'> 로그인/회원가입 </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
