import React, { Component } from 'react'

import { useState } from 'react'
import './index.scss'

import IconLogo from '../../assets/logo.png'

import IconNavHome from '../../assets/nav_home.png'
import IconNavProduct from '../../assets/nav_product.png'
import IconNavUser from '../../assets/nav_user.png'

interface Props {
  icon: any
  onClick?: Function,
  children: any
}
class IconButton extends Component<Props> {
  handleClick = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    if (this.props.onClick) {
      this.props.onClick()
    }
  }
  render() {
    return (
      <div className='IconButton' onClick={this.handleClick}>
        <img className='IconButton-Icon' src={this.props.icon} />
        <div className='IconButton-Name'>{this.props.children}</div>
      </div>
    )
  }
}
export default IconButton

