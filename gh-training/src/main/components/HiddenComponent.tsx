import React from 'react'

export interface HiddenComponentProps {
  isHidden: boolean
}
export function HiddenComponent(props: HiddenComponentProps) {
  if (props.isHidden) {
    console.log("I am here, but you can't see me!")
    return null
  } else {
    return <div>Now you see me!</div>
  }
}
