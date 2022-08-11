
import React from 'react'

import './index.scss'

export default function (props: {
  icon: any
}) {
  return (
    <img className="PostPic" src={props.icon} />
  )
}
