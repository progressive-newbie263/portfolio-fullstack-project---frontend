import React, { useState } from 'react';
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion'

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  //app__navbar (2 gạch dưới). tra google cụm từ "BEM methodology". naming method.
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>

      <ul className='app__navbar-links'>
        {['home','about','work','skills','contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))} 
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            {/* tạo icon cho cái hiệu ứng onClick. Tắt/bật chuyển giữa 2 gạch và dấu x */}
            <HiX onClick={() => setToggle(false)} /> 

            {/* hiển thị/tắt danh sách này đi qua nút 2 gạch. Sử dụng cho màn hình nhỏ */}
            <ul>
              {['home','about','work','skills','contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))} 
            </ul>    
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
