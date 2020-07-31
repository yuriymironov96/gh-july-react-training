import React from 'react'

export interface FakeAnchorProps {
  href: string
  children: React.ReactNode
}

/**
 * Wraps any content into a fake link that does some action instead of redirecting.
 */
export function FakeAnchor(props: FakeAnchorProps) {
  return (
    <a href={props.href} onClick={handleClick}>
      {props.children}
    </a>
  )
}

function handleClick(e: React.MouseEvent) {
  e.preventDefault()
  console.log('foobar')
}
