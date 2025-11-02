import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap} from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '',});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  //destructuring data
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact).then(() => { 
      setLoading(false);
      setIsFormSubmitted(true);
    }).catch(
      (error) => console.log(error)
    );
  };


  return (
    <>
      <h2 className='head-text'>
        Liên hệ với tôi thông qua:
      </h2>

      <div className='app__footer-cards'>
        {/* cac card se co : hinh email, gia tri email, duong dan, .... */}
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          
          {/* href mailto trỏ đến địa chỉ cần thiết. */}
          <a href='mailto:jack26032004@gmail.com' className='p-text'>
            jack26032004@gmail.com
          </a>
        </div>

        {/* thiet bi di dong/ mobile */}
        <div className='app__footer-card'>
          <img src={images.mobile} alt='email' />
          
          {/* href mailto trỏ đến địa chỉ cần thiết. */}
          <a href='tel: +84 (94) 755-4629' className='p-text'>
            094 755 4629
          </a>
        </div>
      </div>

      {!isFormSubmitted ? 
        <div className='app__footer-form app__flex'>
          {/* name section */}
          <div className='app__flex'>
            <input className='p-text' name='name' type='text' placeholder='Your name' 
              value={name} onChange={handleChangeInput} />
          </div>

          {/* email section */}
          <div className='app__flex'>
            <input className='p-text' name='email' type='email' placeholder='Your email' 
              value={email} onChange={handleChangeInput} />
          </div>

          <div>
            <textarea 
              className='p-text'
              placeholder='Your message'
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {loading ? 'Đang gửi...' : 'Gửi tin nhắn'}
          </button>
        </div>
      : 
        <div>
          <h3>Thank you for getting in touch</h3>
        </div>
      }
    </>
  )
}

//import tu Contact sang. Footer se co kha nang di dong.
export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
