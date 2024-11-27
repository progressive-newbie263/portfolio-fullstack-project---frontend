import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      {/* showing twitter icon */}
      <div>
        <BsTwitter />
      </div>

      {/* showing facebook icon */}
      <div>
        <FaFacebookF />
      </div>

      {/* showing instagram icon */}
      <div>
        <BsInstagram />
      </div>
    </div>
  )
}

export default SocialMedia
