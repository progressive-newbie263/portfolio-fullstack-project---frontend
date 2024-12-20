import React from 'react'

//aria-label để sửa lỗi: "anchor must have content and the content must be accessible by a screen reader: "
const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['home','about','work','skills','testimonials','contact'].map((item, index) => (
        <a 
          href={`#${item}`} 
          key={item + index}
          className='app__navigation-dot'
          style={active === item ? {backgroundColor: '#313BAC'} : { }}
          aria-label={`Navigate to ${item}`} 
        />
      ))}
    </div>
  )
}

export default NavigationDots;
