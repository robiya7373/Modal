import React from 'react'

const Backdrop = (closeModal, showBackdrop) => {
  return  <div onClick={closeModal} className='backdrop showBackdrop'></div>
  
}

export default Backdrop