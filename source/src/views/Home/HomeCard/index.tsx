import { useState } from 'react'

import './index.scss'

import Label from '../../../components/Label/index'

import PostPic from '../../../components/PostPic/index'
import LayoutListItem from '../../../components/Layout/LayoutListItem/index'

export default function (props: {
  labels?: { text: string, type: string }[]
  icon: any
  title: string
  content: string
  children: any
}) {

  let labels = null
  if (props.labels) {
    labels = props.labels.map(e => {
      return <Label type={e.type} key={e.text} >{e.text}</Label>
    })
  }
  return (
    <LayoutListItem>
      <div className="HomeCard">
        <PostPic icon={props.icon} />
        <div className='HomeCard-Title'>
          {labels}
          {props.title}
        </div>
        <div className='HomeCard-Content'>{props.content}</div>
        <div className='HomeCard-Handle'>{props.children}</div>
      </div>
    </LayoutListItem>
  )
}
