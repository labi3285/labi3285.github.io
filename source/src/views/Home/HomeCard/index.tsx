import { useState } from 'react'

import './index.scss'

import PostPic from '../../../components/PostPic/index'
import LayoutListItem from '../../../components/Layout/LayoutListItem/index'

export default function (props: {
  icon: any
  title: string
  content: string
  children: any
}) {
  return (
    <LayoutListItem>
      <div className="HomeCard">
        <PostPic icon={props.icon} />
        <div className='HomeCard-Title'>{props.title}</div>
        <div className='HomeCard-Content'>{props.content}</div>
        <div className='HomeCard-Handle'>{props.children}</div>
      </div>
    </LayoutListItem>
  )
}
