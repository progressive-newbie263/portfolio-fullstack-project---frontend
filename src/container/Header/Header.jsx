import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}


const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      {/*show component tạo tên/ nghề nghiệp (?)*/}
      <motion.div
        whileInView={{ x:[-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋Hello</span>

            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Quang</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Newbie Web Developer</p>
            <p className='p-text'>NEU student</p>
          </div>
        </div>
      </motion.div>


      {/* show component tạo ảnh của developer */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        {/* ảnh pfp của dev/user */}
        <img src={images.profile} alt='profile-bg'></img>
        
        {/* tạo nền động cho image, 1 hình tròn xám phía sau lưng img của user. */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile-circle"
          className="overlay-circle"
        />
      </motion.div>


      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header