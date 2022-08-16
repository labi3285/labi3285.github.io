import React, { Component } from 'react'

import { useState } from 'react'
import './index.scss'

import IconLogo from '../../assets/logo.png'

import IconNavHome from '../../assets/nav_home.png'
import IconNavProduct from '../../assets/nav_product.png'
import IconNavUser from '../../assets/nav_user.png'

interface Props {
  type: string
  children: any
}
class Label extends Component<Props> {
  render() {
    const color = () => {
      if (this.props.type === 'orange') {
        return '#ff9000'
      } else if (this.props.type === 'blue') {
        return '#3b82f6'
      }
      return '#888888'
    }
    const backColor = () => {
      if (this.props.type === 'orange') {
        return '#fed9a9'
      } else if (this.props.type === 'blue') {
        return '#e5eaf3'
      }
      return '#dadada'
    }
    const borderColor = () => {
      if (this.props.type === 'orange') {
        return '#fcb253'
      } else if (this.props.type === 'blue') {
        return '#bdcfee'
      }
      return '#b5b5b4'
    }
    return (
      <span className='Label' style={{
        color: color(),
        backgroundColor: backColor(),
        borderColor: borderColor(),
        }}>
        {this.props.children}
      </span>
    )
  }
}
export default Label

