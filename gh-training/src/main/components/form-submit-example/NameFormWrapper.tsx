import React, { useState } from 'react'
import { NameForm } from './NameForm'

export function NameFormWrapper() {
  const [name, setName] = useState('foo')

  return (
    <div>
      My submitted name is {name}
      <NameForm handleSubmit={setName} defaultValue={name}></NameForm>
    </div>
  )
}
