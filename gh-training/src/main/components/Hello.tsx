import React from 'react'

interface HelloProps {
  name: string
}

export function Hello(props: HelloProps) {
  return <div>Hello, {props.name}</div>
}
