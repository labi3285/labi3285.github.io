import { useState } from 'react'
import './index.scss'

import toast, { Toaster } from 'react-hot-toast'

import NavBar from '../../components/NavBar/index'
import NavBarPlaceholder from '../../components/NavBar/NavBarPlaceholder'
import SpaceTop from '../../components/Space/SpaceTop/index'
import BottomBar from '../../components/BottomBar/index'
import GoTop from '../../components/GoTop/index'
import LayoutList from '../../components/Layout/LayoutList/index'
import LayoutListItem from '../../components/Layout/LayoutListItem/index'

import IconButton from '../../components/Button/IconButton/index'
import IconButton1 from '../../components/Button/IconButton1/index'
import IconGithub from '../../assets/icon_github.png'
import IconEmail from '../../assets/icon_email.png'
import IconQQ from '../../assets/icon_qq.png'
import IconOpen from '../../assets/icon_open.png'
import IconMoreW from '../../assets/icon_more_w.png'

import ResourcePostPic_dida from './resources/post_pic_dida.png'
import ResourcePostPic_framework from './resources/post_pic_framework.png'

import HomeCard from './HomeCard/index'

export default function () {

  const handleCopy = (text: string) => {
    const textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    toast('已复制')
  }

  return (
    <div className='Home'>
      <Toaster/>
      <NavBar page='Home' />
      <NavBarPlaceholder />
      <LayoutList>
        <SpaceTop />
        <LayoutListItem>
          <div className='Home-Intro'>
            <div className='Home-Intro-Welcome'>👋 Welcome!</div>
            <div className='Home-Intro-Info'>This is labi3285. An iOS programmer who enjoys programming. I have some beautiful works worth your attention. Give it a try?</div>
            <div className='Home-Intro-Contact'>
              <IconButton icon={IconGithub} onClick={() => {
                location.href = 'https://github.com/labi3285'
              }}>Github</IconButton>
              <IconButton icon={IconEmail} onClick={() => {
                location.href = 'mailto:766043285@qq.com'
              }}>Email</IconButton>
              <span className='cm-desktop-only'>
                <IconButton icon={IconQQ} onClick={() => {
                  handleCopy('766043285')
                }}>QQ</IconButton>
              </span>
              <IconButton1 icon={IconMoreW} onClick={() => {
                location.href = '#/contact'
              }}>More</IconButton1>
            </div>
          </div>
        </LayoutListItem>

        <HomeCard icon={ResourcePostPic_dida} labels={[
            { text: 'APP', type: 'blue' },
          ]} title="“滴答”APP正式上线" content="“滴答”APP是一款基于本地存储的生活小助手，你可以在APP中管理待办事项、打卡、记账、管理文件、看书或写日记等。">
          <IconButton icon={IconOpen} onClick={() => {
            location.href = '#/schedule'
          }}>详情</IconButton>
        </HomeCard>
        <HomeCard icon={ResourcePostPic_framework} labels={[
            { text: 'SDK', type: 'orange' },
          ]} title="QXUIKitExtension" content="Swift语言开发，全面封装系统组件，提供基于配置模式的组件封装，可大大提高开发效率，降低代码耦合。子项目：QXUIKitExtensionDebugSettings、QXUIKitExtensionEditPictureView、QXUIKitExtensionPictureView">
          <IconButton icon={IconOpen} onClick={() => {
            location.href = 'https://github.com/labi3285/QXUIKitExtension'
          }}>详情</IconButton>
        </HomeCard>
        <HomeCard icon={ResourcePostPic_framework} labels={[
            { text: 'SDK', type: 'orange' },
          ]} title="QXConsMaker" content="Swift语言开发，最简单高效的自动布局约束库，可大大提高开发效率。">
          <IconButton icon={IconOpen} onClick={() => {
            location.href = 'https://github.com/labi3285/QXConsMaker'
          }}>详情</IconButton>
        </HomeCard>
        <HomeCard icon={ResourcePostPic_framework} labels={[
            { text: 'SDK', type: 'orange' },
          ]} title="QXMessageView" content="Swift语言开发，基于界面的消息提示框架，智能提示时长，交互式隐藏，高度可定制化（面向协议，用户可自己实现展示效果）。">
          <IconButton icon={IconOpen} onClick={() => {
            location.href = 'https://github.com/labi3285/QXMessageView'
          }}>详情</IconButton>
        </HomeCard>
        <HomeCard icon={ResourcePostPic_framework} labels={[
            { text: 'SDK', type: 'orange' },
          ]} title="QXBookReader" content="Swift语言开发，小说阅读器SDK，支持主题切换，支持epub、txt两种格式。">
          <IconButton icon={IconOpen} onClick={() => {
            location.href = 'https://github.com/labi3285/QXBookReader'
          }}>详情</IconButton>
        </HomeCard>
      </LayoutList>
      <BottomBar />
      <GoTop />
    </div>
  )
}
