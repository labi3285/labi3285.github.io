
import React from 'react'

import './index.scss'

export default function (props: {
  children: any
}) {
  return (
    <div className="LayoutList">
      {props.children}
    </div>
  )
}
