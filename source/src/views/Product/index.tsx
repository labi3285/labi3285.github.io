import { useState } from 'react'
import './index.scss'

import NavBar from '../../components/NavBar/index'
import NavBarPlaceholder from '../../components/NavBar/NavBarPlaceholder'
import SpaceTop from '../../components/Space/SpaceTop/index'
import BottomBar from '../../components/BottomBar/index'
import GoTop from '../../components/GoTop/index'
import LayoutList from '../../components/Layout/LayoutList/index'
import LayoutListItem from '../../components/Layout/LayoutListItem/index'
import LayoutListCard from '../../components/Layout/LayoutListCard/index'

import Title from '../../components/Title/index'

import ProductCard from './ProductCard/index'
import IconFramework from '../../assets/icon_framework.png'

export default function () {
  return (
    <div className='Product'>
      <NavBar page='Product' />
      <NavBarPlaceholder />
      <LayoutList>
        <SpaceTop />
        <LayoutListItem>
          <Title>我的作品</Title>
        </LayoutListItem>

        <LayoutListItem>
          <div className='Product-Collection'>            

            <ProductCard icon={IconFramework} title='QXUIKitExtension' onClick={() => {
              location.href = 'https://github.com/labi3285/QXUIKitExtension'
            }}>Swift语言开发，全面封装系统组件，提供基于配置模式的组件封装，可大大提高开发效率，降低代码耦合。</ProductCard>

            <ProductCard icon={IconFramework} title='QXConsMaker' onClick={() => {
              location.href = 'https://github.com/labi3285/QXConsMaker'
            }}>Swift语言开发，最简单高效的自动布局约束库，可大大提高开发效率。</ProductCard>

            <ProductCard icon={IconFramework} title='QXMessageView' onClick={() => {
              location.href = 'https://github.com/labi3285/QXMessageView'
            }}>Swift语言开发，基于界面的消息提示框架，智能提示时长，交互式隐藏，高度可定制化（面向协议，用户可自己实现展示效果）。</ProductCard>

            <ProductCard icon={IconFramework} title='QXBookReader' onClick={() => {
              location.href = 'https://github.com/labi3285/QXBookReader'
            }}>Swift语言开发，小说阅读器SDK，支持主题切换，支持epub、txt两种格式。</ProductCard>
             
            <ProductCard icon={IconFramework} title='QXJSON' onClick={() => {
              location.href = 'https://github.com/labi3285/QXJSON'
            }}>Swift语言开发，仿JSON，轻量级字典快捷操作。</ProductCard>

            <ProductCard icon={IconFramework} title='QXUIKitExtensionPictureView' onClick={() => {
              location.href = 'https://github.com/labi3285/QXUIKitExtensionPictureView'
            }}>Swift语言开发，图片预览库。</ProductCard>
             
            <ProductCard icon={IconFramework} title='QXUIKitExtensionEditPictureView' onClick={() => {
              location.href = 'https://github.com/labi3285/QXUIKitExtensionEditPictureView'
            }}>Swift语言开发，选择图片库。</ProductCard>

          </div>
          
        </LayoutListItem>
      </LayoutList>
      <BottomBar />
      <GoTop />
    </div>
  )
}
