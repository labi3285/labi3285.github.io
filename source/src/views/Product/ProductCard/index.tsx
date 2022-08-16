import { useState } from 'react'

import './index.scss'

import Label from '../../../components/Label/index'

import PostPic from '../../../components/PostPic/index'
import LayoutListItem from '../../../components/Layout/LayoutListItem/index'

export default function (props: {
  icon: any
  title: string
  children: string
  onClick: Function
}) {
  return (
    <div className="ProductCard" onClick={props.onClick()}>
      <img className='ProductCard-Icon' src={props.icon} />
      <div className='ProductCard-Title'>{props.title}</div>
      <div className='ProductCard-Content'>{props.children}</div>
    </div>
  )
}
