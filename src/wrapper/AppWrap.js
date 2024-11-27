import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

//HOC viết tắt cho 'Higher Order Components'
const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />

      <div className='app__wrapper app__flex'>
        <Component />

        <div className='copyright'>
          <p className='p-text'>@2024 QuangNV</p>
          <p className='p-text'>All Rights Reserved</p>
        </div>
      </div>

      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap
