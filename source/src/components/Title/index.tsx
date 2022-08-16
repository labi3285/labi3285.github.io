import React, { Component } from 'react'

import { useState } from 'react'
import './index.scss'

import IconLogo from '../../assets/logo.png'

import IconNavHome from '../../assets/nav_home.png'
import IconNavProduct from '../../assets/nav_product.png'
import IconNavUser from '../../assets/nav_user.png'

interface Props {
  children: any
}
class Title extends Component<Props> {
  render() {
    return (
      <div className='Title'>
        {this.props.children}
      </div>
    )
  }
}
export default Title

