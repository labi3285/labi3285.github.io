import React, { Component } from 'react'
import { useHref } from 'react-router'
import './index.scss'

import SideMenu from '../SideMenu/index'

import IconLogo from '../../assets/logo.png'

import IconNavHome from '../../assets/nav_home.png'
import IconNavProduct from '../../assets/nav_product.png'
import IconNavUser from '../../assets/nav_user.png'

interface Props {
  page: string
}
interface State {
  backAlpha: number
  isSideMenuShow: boolean
}
class NavBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      backAlpha: 0,
      isSideMenuShow: false
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
  getButtonColor = (item: string) => {
    return item === this.props.page ? 'rgba(59,130,246,1)' : '#666666'
  }

  handleGoHome = () => {
    if (this.props.page !== 'Home') {
      location.href = '#/'
    }
  }
  handleGoProduct = () => {
    if (this.props.page !== 'Product') {
      location.href = '#/product'
    }
  }
  handleGoAbout = () => {
    this.setState({
      isSideMenuShow: true
    })
  }

  render() {
    return (
      <div className='NavBar'>
        <div className='NavBar-Back' style={{opacity: this.state.backAlpha}} ></div>
        <div className='NavBar-Left' style={{opacity: this.state.backAlpha}} >
          <img className='NavBar-Left-Logo' src={IconLogo} />          
        </div>
        <div className='cm-flex-space'></div>
        <div className='NavBar-Right'>
          <div className='NavBar-Right-Button' onClick={this.handleGoHome}>
            <svg className="NavBar-Right-Button-Icon" fill={this.getButtonColor('Home')} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7523" width="200" height="200"><path d="M923.733333 394.666667c-85.333333-70.4-206.933333-174.933333-362.666666-309.333334C533.333333 61.866667 490.666667 61.866667 462.933333 85.333333c-155.733333 134.4-277.333333 238.933333-362.666666 309.333334-14.933333 14.933333-25.6 34.133333-25.6 53.333333 0 38.4 32 70.4 70.4 70.4H192v358.4c0 29.866667 23.466667 53.333333 53.333333 53.333333H405.333333c29.866667 0 53.333333-23.466667 53.333334-53.333333v-206.933333h106.666666v206.933333c0 29.866667 23.466667 53.333333 53.333334 53.333333h160c29.866667 0 53.333333-23.466667 53.333333-53.333333V518.4h46.933333c38.4 0 70.4-32 70.4-70.4 0-21.333333-10.666667-40.533333-25.6-53.333333z m-44.8 59.733333h-57.6c-29.866667 0-53.333333 23.466667-53.333333 53.333333v358.4h-138.666667V661.333333c0-29.866667-23.466667-53.333333-53.333333-53.333333h-128c-29.866667 0-53.333333 23.466667-53.333333 53.333333v206.933334H256V507.733333c0-29.866667-23.466667-53.333333-53.333333-53.333333H145.066667c-4.266667 0-6.4-2.133333-6.4-6.4 0-2.133333 2.133333-4.266667 2.133333-6.4 85.333333-70.4 206.933333-174.933333 362.666667-309.333333 4.266667-4.266667 10.666667-4.266667 14.933333 0 155.733333 134.4 277.333333 238.933333 362.666667 309.333333 2.133333 2.133333 2.133333 2.133333 2.133333 4.266667 2.133333 6.4-2.133333 8.533333-4.266667 8.533333z" p-id="7524"></path></svg>
            <div className='NavBar-Right-Button-Name' style={{color: this.getButtonColor('Home')}}>Home</div>          
          </div>
          <div className='NavBar-Right-Button' onClick={this.handleGoProduct}>
            <svg className="NavBar-Right-Button-Icon" fill={this.getButtonColor('Product')} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9362" width="200" height="200"><path d="M409.6 477.866667H204.8a102.4 102.4 0 0 1-102.4-102.4V238.933333a136.533333 136.533333 0 0 1 136.533333-136.533333h136.533334a102.4 102.4 0 0 1 102.4 102.4v204.8a68.266667 68.266667 0 0 1-68.266667 68.266667zM238.933333 170.666667a68.266667 68.266667 0 0 0-68.266666 68.266666v136.533334a34.133333 34.133333 0 0 0 34.133333 34.133333h204.8V204.8a34.133333 34.133333 0 0 0-34.133333-34.133333z m580.266667 307.2h-204.8a68.266667 68.266667 0 0 1-68.266667-68.266667V204.8a102.4 102.4 0 0 1 102.4-102.4h136.533334a136.533333 136.533333 0 0 1 136.533333 136.533333v136.533334a102.4 102.4 0 0 1-102.4 102.4z m-170.666667-307.2a34.133333 34.133333 0 0 0-34.133333 34.133333v204.8h204.8a34.133333 34.133333 0 0 0 34.133333-34.133333V238.933333a68.266667 68.266667 0 0 0-68.266666-68.266666z m-273.066666 750.933333H238.933333a136.533333 136.533333 0 0 1-136.533333-136.533333v-136.533334a102.4 102.4 0 0 1 102.4-102.4h204.8a68.266667 68.266667 0 0 1 68.266667 68.266667v204.8a102.4 102.4 0 0 1-102.4 102.4z m-170.666667-307.2a34.133333 34.133333 0 0 0-34.133333 34.133333v136.533334a68.266667 68.266667 0 0 0 68.266666 68.266666h136.533334a34.133333 34.133333 0 0 0 34.133333-34.133333v-204.8z m580.266667 307.2h-136.533334a102.4 102.4 0 0 1-102.4-102.4v-204.8a68.266667 68.266667 0 0 1 68.266667-68.266667h204.8a102.4 102.4 0 0 1 102.4 102.4v136.533334a136.533333 136.533333 0 0 1-136.533333 136.533333z m-170.666667-307.2v204.8a34.133333 34.133333 0 0 0 34.133333 34.133333h136.533334a68.266667 68.266667 0 0 0 68.266666-68.266666v-136.533334a34.133333 34.133333 0 0 0-34.133333-34.133333z" p-id="9363"></path></svg>
            <div className='NavBar-Right-Button-Name' style={{color: this.getButtonColor('Product')}}>Product</div>          
          </div>
          <div className='NavBar-Right-Button' onClick={this.handleGoAbout}>
            <svg className="NavBar-Right-Button-Icon" fill={this.getButtonColor('About')} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10289" width="200" height="200"><path d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667zM288 810.666667c0-123.733333 100.266667-224 224-224S736 686.933333 736 810.666667c-61.866667 46.933333-140.8 74.666667-224 74.666666s-162.133333-27.733333-224-74.666666z m128-384c0-53.333333 42.666667-96 96-96s96 42.666667 96 96-42.666667 96-96 96-96-42.666667-96-96z m377.6 328.533333c-19.2-96-85.333333-174.933333-174.933333-211.2 32-29.866667 51.2-70.4 51.2-117.333333 0-87.466667-72.533333-160-160-160s-160 72.533333-160 160c0 46.933333 19.2 87.466667 51.2 117.333333-89.6 36.266667-155.733333 115.2-174.933334 211.2-55.466667-66.133333-91.733333-149.333333-91.733333-243.2 0-204.8 168.533333-373.333333 373.333333-373.333333S885.333333 307.2 885.333333 512c0 93.866667-34.133333 177.066667-91.733333 243.2z" p-id="10290"></path></svg>
            <div className='NavBar-Right-Button-Name' style={{color: this.getButtonColor('About')}}>About</div>          
          </div>
        </div>
        <SideMenu isShow={this.state.isSideMenuShow} onClose={() => this.setState({isSideMenuShow: false})} />
      </div>
    )
  }
}
export default NavBar;

