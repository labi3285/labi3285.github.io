import React, { Component } from 'react'

import './index.scss'

import IconArrowUp from '../../assets/arrow_up.png'

export default function () {
  const scrollToTop = () => {
    const offsetY = document.documentElement.scrollTop || document.body.scrollTop;
    if (offsetY > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, offsetY - offsetY / 8);
    }
  }
  return (
    <div className='GoTop' onClick={scrollToTop}>
      <img className='GoTop-Icon' src={IconArrowUp} />
    </div>
  )
}
