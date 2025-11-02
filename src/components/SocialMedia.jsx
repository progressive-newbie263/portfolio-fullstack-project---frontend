import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      {/* showing twitter icon */}
      <div className='cursor-pointer duration-200'>
        <a
          href="https://x.com/jake_nv"
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsTwitter />
        </a>
      </div>

      {/* showing facebook icon */}
      <div className='cursor-pointer duration-200'>
        <a
          href="https://www.facebook.com/quang.nguyen.182428"
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaFacebookF />
        </a>
      </div>

      {/* showing instagram icon */}
      <div className='cursor-pointer duration-200'>
        <a
          href="https://www.instagram.com/freelancer263/?hl=en"
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsInstagram />
        </a>
      </div>

      {/* showing linkedIn icon */}
      <div className='cursor-pointer duration-200'>
        <a
          href="https://www.linkedin.com/in/jake-nv-8904782a7/"
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
