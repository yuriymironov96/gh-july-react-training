import React, { useState } from 'react'
import { NameForm } from './NameForm'

/**
 * Implements a typical form submit, with submit logic passed fron outer component
 * to a dummy form-component NameFormWrapper
 */
export function NameFormWrapper() {
  const [name, setName] = useState('foo')

  return (
    <div>
      My submitted name is {name}
      <NameForm handleSubmit={setName} defaultValue={name}></NameForm>
    </div>
  )
}
