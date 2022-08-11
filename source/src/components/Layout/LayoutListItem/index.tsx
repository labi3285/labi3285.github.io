import { useState } from 'react'

import './index.scss'

export default function (props: {
  children: any
}) {
  return (
    <div className="LayoutListItem">
      {props.children}
    </div>
  )
}
