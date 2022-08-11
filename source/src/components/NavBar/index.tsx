import React, { Component } from 'react'

import { useState } from 'react'
import './index.scss'

import IconLogo from '../../assets/logo.png'

import IconNavHome from '../../assets/nav_home.png'
import IconNavProduct from '../../assets/nav_product.png'
import IconNavUser from '../../assets/nav_user.png'

interface Props {
}
interface State {
  backAlpha: number
}
class NavBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      backAlpha: 0
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }
  onScroll = (event: any) => {
    const offsetY = event.srcElement.documentElement.scrollTop || window.pageYOffset || event.srcElement.body.scrollTop
    let alhpa = 0
    if (offsetY < 40) {
      alhpa = 0
    } else if (offsetY < 80) {
      alhpa = 1 - (80 - offsetY) / 40
    } else {
      alhpa = 1
    }
    this.setState({
      backAlpha: alhpa
    })
  }
  render() {
    return (
      <div className='NavBar'>
        <div className='NavBar-Back' style={{opacity: this.state.backAlpha}} ></div>
        <div className='NavBar-Left'>
          <img className='NavBar-Left-Logo' src={IconLogo} />          
        </div>
        <div className='cm-flex-space'></div>
        <div className='NavBar-Right'>
          <div className='NavBar-Right-Button'>
            <img className='NavBar-Right-Button-Icon' src={IconNavHome} />
            <div className='NavBar-Right-Button-Name'>Home</div>          
          </div>
          <div className='NavBar-Right-Button'>
            <img className='NavBar-Right-Button-Icon' src={IconNavProduct} />
            <div className='NavBar-Right-Button-Name'>Product</div>          
          </div>
          <div className='NavBar-Right-Button'>
            <img className='NavBar-Right-Button-Icon' src={IconNavUser} />
            <div className='NavBar-Right-Button-Name'>About</div>          
          </div>
        </div>
      </div>
    )
  }
}
export default NavBar;

