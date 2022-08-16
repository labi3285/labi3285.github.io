import React, { Component } from 'react'
import { useHref } from 'react-router'
import './index.scss'

import SideMenu from '../SideMenu/index'

import IconLogo from '../../assets/logo.png'

import IconNavHome from '../../assets/nav_home.png'
import IconNavProduct from '../../assets/nav_product.png'
import IconNavUser from '../../assets/nav_user.png'

interface Props {
  title: string
}
interface State {
  backAlpha: number
}
class NavBarDetail extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      backAlpha: 0,
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
  handleBack = () => {
    history.back()
    // location.back()
  }
  render() {
    return (
      <div className='NavBarDetail'>
        <div className='NavBarDetail-Back' style={{opacity: this.state.backAlpha}} ></div>
        <div className='NavBarDetail-Left'>
          <div className='NavBarDetail-Left-Button' onClick={this.handleBack}>
            <svg className="NavBarDetail-Left-Button-Icon" fill='#666666' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2454" width="200" height="200"><path d="M395.21518 513.604544l323.135538-312.373427c19.052938-18.416442 19.052938-48.273447 0-66.660212-19.053961-18.416442-49.910737-18.416442-68.964698 0L291.75176 480.290811c-19.052938 18.416442-19.052938 48.273447 0 66.660212l357.633237 345.688183c9.525957 9.207709 22.01234 13.796214 34.497699 13.796214 12.485359 0 24.971741-4.588505 34.466999-13.82896 19.052938-18.416442 19.052938-48.242747 0-66.660212L395.21518 513.604544z" p-id="2455"></path></svg>
            <div className='NavBarDetail-Left-Button-Name'>返回</div>      
          </div>
        </div>
        <div className='cm-flex-space'></div>
      </div>
    )
  }
}
export default NavBarDetail;

