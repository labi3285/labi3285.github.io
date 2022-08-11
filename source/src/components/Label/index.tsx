import React, { Component } from 'react'

import { useState } from 'react'
import './index.scss'

import IconLogo from '../../assets/logo.png'

import IconNavHome from '../../assets/nav_home.png'
import IconNavProduct from '../../assets/nav_product.png'
import IconNavUser from '../../assets/nav_user.png'

interface Props {
  icon: any
  children: any
}
class Label extends Component<Props> {
  render() {
    return (
      <div className='Label'>
        <img className='Label-Icon' src={this.props.icon} />
        <div className='Label-Name'>{this.props.children}</div>
      </div>
    )
  }
}
export default Label

