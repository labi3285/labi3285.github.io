import { useState } from 'react'

import './index.scss'

export default function (props: {
  children: any
}) {
  return (
    <div className="LayoutListCard">
      {props.children}
    </div>
  )
}
