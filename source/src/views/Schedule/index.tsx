import { useState } from 'react'
import './index.scss'

import NavBarDetail from '../../components/NavBarDetail/index'
import NavBarDetailPlaceholder from '../../components/NavBarDetail/NavBarDetailPlaceholder'
import SpaceTop from '../../components/Space/SpaceTop/index'
import BottomBar from '../../components/BottomBar/index'
import GoTop from '../../components/GoTop/index'
import LayoutList from '../../components/Layout/LayoutList/index'
import LayoutListItem from '../../components/Layout/LayoutListItem/index'
import LayoutListCard from '../../components/Layout/LayoutListCard/index'

import IconLogo1 from '../../assets/logo1.png'

import Title from '../../components/Title/index'

export default function () {
  return (
    <div className='Schedule'>
      <NavBarDetail title='滴答' />
      <NavBarDetailPlaceholder />
      <LayoutList>
        <SpaceTop />
        <LayoutListItem>
          <p className='Schedule-Title'><span>
            <img className='Schedule-Title-Icon' src={IconLogo1} />  
          </span>滴答</p>
          <p className='Schedule-Brief'>“滴答”APP是一款基于本地存储的生活小助手，你可以在APP中管理待办事项、打卡、记账、管理文件、看书或写日记等。</p>
        </LayoutListItem>

        <LayoutListCard>
          <div className='Schedule-Item'>
            <div className='Schedule-Item-Title'>用户协议</div>
            <a className='Schedule-Item-Link' href="./schedule/user_protocol.html">用户协议</a>
          </div>
          <div className='Schedule-Item'>
            <div className='Schedule-Item-Title'>隐私政策</div>
            <a className='Schedule-Item-Link' href="./schedule/user_privacy.html">隐私政策</a>
          </div>
        </LayoutListCard>

        <LayoutListCard>
          <div className='Schedule-Item'>
            <div className='Schedule-Item-Title'>下载地址</div>
            <a className='Schedule-Item-Link' href="https://apps.apple.com/cn/app/id1622505251">苹果下载地址</a>
          </div>
          <div className='Schedule-Item'>
            <div className='Schedule-Item-Title'>反馈邮箱</div>
            <a className='Schedule-Item-Link' href='mailto:766043285@qq.com'>766043285@qq.com</a>
          </div>
          <div className='Schedule-Item'>
            <div className='Schedule-Item-Title'>“滴答”APP用户交流群（QQ）</div>
            <div className='Schedule-Item-Content'>740429216</div>
          </div>
        </LayoutListCard>
      </LayoutList>
      <BottomBar />
      <GoTop />
    </div>
  )
}
