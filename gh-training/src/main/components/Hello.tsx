import React from 'react'

interface HelloProps {
  name: string
}

export function Hello(props: HelloProps) {
  return <span>Hello, {props.name}</span>
}
