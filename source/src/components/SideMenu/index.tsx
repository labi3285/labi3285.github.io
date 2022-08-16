import React, { Component } from 'react'
import { useHref } from 'react-router'
import './index.scss'

import IconLogo from '../../assets/logo.png'
import IconNavUser from '../../assets/head.png'

interface Props {
  isShow: boolean
  onClose?: () => void
}
interface State {
  isClosing: boolean
}
class SideMenu extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isClosing: false
    }
  }
  handleClose = () => {
    this.setState({
      isClosing: true
    })
    setTimeout(() => {
      this.setState({
        isClosing: false
      })
    }, 500);
    if (this.props.onClose) {
      this.props.onClose()
    }
  }
  handleContentClick = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
  }
  render() {
    if (!this.state.isClosing && !this.props.isShow) {
      return null
    }
    return (
      <div className='SideMenu' onClick={this.handleClose}>
        <div className={(this.props.isShow && !this.state.isClosing) ? 'SideMenu-Content show' : 'SideMenu-Content hide'} onClick={this.handleContentClick}>
          <svg className='SideMenu-Content-Close' onClick={this.handleClose} fill='#ffffff' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2377" width="200" height="200"><path d="M556.8 512L832 236.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L512 467.2l-275.2-277.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l275.2 277.333333-277.333333 275.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333L512 556.8 787.2 832c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L556.8 512z" p-id="2378"></path></svg>
          <img className='SideMenu-Content-Head' src={IconNavUser} />
          <div className='SideMenu-Content-Info'>
            <div className='SideMenu-Content-Info-Name'>labi3285</div>     
            <div className='SideMenu-Content-Info-Sub'>iOS developer</div>
            <div className='SideMenu-Content-Info-Brief'>An iOS programmer who enjoys programming.</div>
          </div>
        </div>
      </div>
    )
  }
}
export default SideMenu

