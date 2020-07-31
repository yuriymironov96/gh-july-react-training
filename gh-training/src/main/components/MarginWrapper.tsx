import React from 'react'

export interface MarginWrapperProps {
  children: React.ReactNode
}

export function MarginWrapper(props: MarginWrapperProps) {
  return <p>{props.children}</p>
}
