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

import Title from '../../components/Title/index'

export default function () {
  return (
    <div className='Contact'>
      <NavBarDetail title='联系我' />
      <NavBarDetailPlaceholder />
      <LayoutList>
        <SpaceTop />
        <LayoutListItem>
          <Title>联系我</Title>
        </LayoutListItem>

        <LayoutListCard>
          <div className='Contact-Item'>
            <div className='Contact-Item-Title'>Gihub</div>
            <div className='Contact-Item-Content'>https://github.com/labi3285</div>
          </div>
          <div className='Contact-Item'>
            <div className='Contact-Item-Title'>QQ</div>
            <div className='Contact-Item-Content'>766043285</div>
          </div>
          <div className='Contact-Item'>
            <div className='Contact-Item-Title'>邮箱</div>
            <div className='Contact-Item-Content'>766043285@qq.com</div>
          </div>
          <div className='Contact-Item'>
            <div className='Contact-Item-Title'>“滴答”APP用户交流群（QQ）</div>
            <div className='Contact-Item-Content'>740429216</div>
          </div>
        </LayoutListCard>
      </LayoutList>
      <BottomBar />
      <GoTop />
    </div>
  )
}
